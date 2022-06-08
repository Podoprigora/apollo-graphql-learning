import { Typography } from '@mui/material/styles/createTypography';

const pxToRem = (px: number): string => {
  return `${px / 10}rem`;
};

export const typography: Partial<Typography> = {
  htmlFontSize: 10,
  fontFamily: 'Poppins, "Roboto", "Arial", sans-serif',
  fontWeightBold: 600,

  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  button: {
    fontSize: pxToRem(16),
    textTransform: 'none',
  },
};
