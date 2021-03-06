import { Theme, Components } from '@mui/material/styles';

export const CssBaseline = (theme: Theme): Components => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
          height: '100%',
          fontSize: '62.5%',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      },
    },
  };
};
