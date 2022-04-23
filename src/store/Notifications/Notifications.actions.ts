import { SnackbarKey } from 'notistack';
import { enqueueSnackbar, closeSnackbar, removeSnackbar } from '.';

export const showErrorSnackbar =
  (message: string) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(
      enqueueSnackbar({
        dismissed: false,
        message,
        options: {
          variant: 'error',
          key: new Date().getTime() + Math.random(),
        },
      })
    );
  };

export const showSuccessSnackbar =
  (message: string) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(
      enqueueSnackbar({
        dismissed: false,
        message,
        options: {
          variant: 'success',
          key: new Date().getTime() + Math.random(),
        },
      })
    );
  };

export const showWarningSnackbar =
  (message: string) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(
      enqueueSnackbar({
        dismissed: false,
        message,
        options: {
          variant: 'warning',
          key: new Date().getTime() + Math.random(),
        },
      })
    );
  };

export const showInfoSnackbar =
  (message: string) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(
      enqueueSnackbar({
        dismissed: false,
        message,
        options: {
          variant: 'info',
          key: new Date().getTime() + Math.random(),
        },
      })
    );
  };

export const closeSnackbarAction =
  (key?: SnackbarKey) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(closeSnackbar({ dismissAll: !key, key }));
  };

export const removeSnackbarAction =
  (key: SnackbarKey) =>
  // eslint-disable-next-line no-unused-vars
  (dispatch: (arg0: unknown) => void): void => {
    dispatch(removeSnackbar(key));
  };
