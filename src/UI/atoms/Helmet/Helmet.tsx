import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from 'store';

interface IHelmetProps {
  title: string;
}

const HelmetTitle = ({ title }: IHelmetProps): JSX.Element => {
  const { darkMode } = useAppSelector((st) => st.ui);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='theme-color' content={darkMode ? '#111936' : '#ffffff'} />
    </Helmet>
  );
};

export default memo(HelmetTitle);
