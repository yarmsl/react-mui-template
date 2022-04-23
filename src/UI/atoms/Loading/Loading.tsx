import { Backdrop, Box, CircularProgress } from '@mui/material';
import { FC, memo } from 'react';

const Loading: FC<ILoadingProps> = ({ fullscreen }) => {
  if (fullscreen) {
    return (
      <Backdrop sx={{ zIndex: 'modal', bgcolor: 'background.default' }} open>
        <CircularProgress />
      </Backdrop>
    );
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default memo(Loading);
