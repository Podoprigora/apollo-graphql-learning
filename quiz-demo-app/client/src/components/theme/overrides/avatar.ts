import { Components, Theme } from '@mui/material/styles';

export const Avatar = (theme: Theme): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ecedef',
          color: theme.palette.text.secondary,
        },
      },
    },
  };
};
