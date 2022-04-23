import { memo } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { styles } from './styles';

const Header: React.FC = () => (
  <AppBar color='transparent' sx={styles.root}>
    <Toolbar disableGutters sx={styles.header}>
      Header
    </Toolbar>
  </AppBar>
);

export default memo(Header);
