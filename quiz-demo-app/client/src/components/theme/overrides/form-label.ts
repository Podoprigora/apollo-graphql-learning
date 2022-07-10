import { Theme, Components } from '@mui/material/styles';

export const FormLabel = (theme: Theme): Components => {
  return {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#ff3d00',
        },
      },
    },
  };
};
