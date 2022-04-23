import { Box, SxProps } from '@mui/material';

interface IHighlightTextProps {
  text: string;
  highlight: string;
}

const styles: Record<string, SxProps> = {
  highlight: {
    bgcolor: 'primary.main',
    color: 'white',
  },
};

export const HighlightText = ({
  text,
  highlight,
}: IHighlightTextProps): JSX.Element => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part) => (
        <Box
          component='span'
          key={Date.now()}
          sx={
            part.toLowerCase() === highlight.toLowerCase()
              ? styles.highlight
              : undefined
          }
        >
          {part}
        </Box>
      ))}
    </span>
  );
};
