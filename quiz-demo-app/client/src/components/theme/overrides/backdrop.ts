import { Theme, Components, alpha } from '@mui/material/styles';

export const Backdrop = (theme: Theme): Components => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#000', 0.12),
        },
      },
    },
  };
};
