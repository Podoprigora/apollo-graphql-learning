import { Theme, Components } from '@mui/material/styles';

export const Switch = (theme: Theme): Components => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
    },
  };
};
