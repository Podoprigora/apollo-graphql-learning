import { Theme, Components } from '@mui/material/styles';

export const FormHelperText = (theme: Theme): Components => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          letterSpacing: 0.4,
        },
      },
    },
  };
};
