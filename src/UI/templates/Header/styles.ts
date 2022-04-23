import { SxProps } from '@mui/material';

export const styles: Record<string, SxProps> = {
  root: {
    boxShadow: 'none',
    bgcolor: 'background.default',
    minHeight: '64px',
    transition: 'box-shadow 250ms ease-in-out',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
