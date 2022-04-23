import { Container } from '@mui/material';
import { FC, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from 'UI/atoms/Loading/Loading';
import Header from 'UI/templates/Header/Header';
import { styles } from './styles';

const MainLayout: FC = () => (
  <Container sx={styles.root} disableGutters maxWidth={false}>
    <Header />
    <Container disableGutters sx={styles.main} maxWidth='xl'>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  </Container>
);

export default memo(MainLayout);
