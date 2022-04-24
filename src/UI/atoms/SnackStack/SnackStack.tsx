import {
  Alert,
  AlertTitle,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  SnackbarOrigin,
  Stack,
} from '@mui/material';
import { FC, memo, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { closeSnackAction } from 'store/SnackStack';
import CloseIcon from '@mui/icons-material/Close';

interface ISnackStackProps {
  anchorOrigin?: SnackbarOrigin;
  spacing?: number;
  maxSnack?: number;
}

const SnackStack: FC<ISnackStackProps> = ({
  anchorOrigin = undefined,
  spacing = 1,
  maxSnack = 5,
}) => {
  const { snackBarsStack } = useAppSelector((st) => st.snackStack);
  const dispatch = useAppDispatch();
  const handleClose = useCallback(
    (
      event: Event | React.SyntheticEvent<unknown, Event>,
      reason: SnackbarCloseReason,
      id: string
    ) => {
      if (reason === 'timeout') {
        dispatch(closeSnackAction(id));
      }
    },
    [dispatch]
  );

  const top = useMemo(() => {
    switch (anchorOrigin?.vertical) {
      case 'top':
        return 0;
      default:
        return 'auto';
    }
  }, [anchorOrigin?.vertical]);

  const bottom = useMemo(() => {
    switch (anchorOrigin?.vertical) {
      case 'top':
        return 'auto';
      default:
        return 0;
    }
  }, [anchorOrigin?.vertical]);

  const left = useMemo(() => {
    switch (anchorOrigin?.horizontal) {
      case 'right':
        return 'auto';
      case 'center':
        return '50%';
      default:
        return 0;
    }
  }, [anchorOrigin?.horizontal]);

  const right = useMemo(() => {
    switch (anchorOrigin?.horizontal) {
      case 'left':
        return 'auto';
      case 'center':
        return '50%';
      default:
        return 0;
    }
  }, [anchorOrigin?.horizontal]);

  const transform = useMemo(() => {
    switch (anchorOrigin?.horizontal) {
      case 'center':
        return 'translateX(-50%)';
      default:
        return 'none';
    }
  }, [anchorOrigin?.horizontal]);

  const cuttedSnackStack = useMemo(
    () => snackBarsStack.slice(-maxSnack),
    [maxSnack, snackBarsStack]
  );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {cuttedSnackStack.length > 0 && (
        <Stack
          spacing={spacing}
          sx={{ position: 'fixed', top, right, bottom, left, transform }}
        >
          {cuttedSnackStack.map(
            ({
              id,
              open,
              autoHideDuration = 6000,
              title = undefined,
              message,
              severity = undefined,
              variant = undefined,
              closable = false,
            }) => (
              <Snackbar
                anchorOrigin={anchorOrigin}
                sx={{ position: 'relative' }}
                key={id}
                open={open}
                autoHideDuration={autoHideDuration}
                onClose={(event, reason) => handleClose(event, reason, id)}
              >
                <Alert
                  severity={severity}
                  variant={variant}
                  action={
                    closable && (
                      <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => dispatch(closeSnackAction(id))}
                      >
                        <CloseIcon fontSize='inherit' />
                      </IconButton>
                    )
                  }
                >
                  {title && <AlertTitle>{title}</AlertTitle>}
                  {message}
                </Alert>
              </Snackbar>
            )
          )}
        </Stack>
      )}
    </>
  );
};

export default memo(SnackStack);
