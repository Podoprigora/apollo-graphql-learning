import { Components, Theme } from '@mui/material/styles';

export const Avatar = (theme: Theme): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ede9e6',
          color: theme.palette.text.secondary,
        },
      },
    },
  };
};
