import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface mediaQueries {
  isMobile: boolean;
  isTablet: boolean;
  isPortable: boolean;
  isDesktop: boolean;
  IsDownThan1625: boolean;
}

export const useMedia = (): mediaQueries => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPortable = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const IsDownThan1625 = useMediaQuery('(max-width:1625px)');

  return {
    isMobile,
    isTablet,
    isPortable,
    isDesktop,
    IsDownThan1625,
  };
};
