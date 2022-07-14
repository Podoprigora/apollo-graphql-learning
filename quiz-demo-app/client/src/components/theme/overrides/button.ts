import { Theme, Components } from '@mui/material/styles';

export const Button = (theme: Theme): Components => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-containedError': {
            backgroundColor: theme.palette.error.light,

            '&:hover': {
              backgroundColor: theme.palette.error.main,
            },
          },
        },
      },
    },
  };
};
