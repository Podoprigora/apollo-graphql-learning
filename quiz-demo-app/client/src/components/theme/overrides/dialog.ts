import { Theme, Components } from '@mui/material/styles';

export const Dialog = (theme: Theme): Components => {
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiDialogActions-root': {
            alignItems: 'stretch',
            padding: theme.spacing(2, 3),
            borderTop: `1px solid ${theme.palette.divider}`,

            '& :not(:first-of-type)': {
              marginLeft: theme.spacing(3),
            },
          },
        },
        paper: {
          borderRadius: theme.shape.borderRadiusLarge,
          boxShadow: '0px 2px 20px -1px rgb(0 0 0 / 20%)',
        },
      },
    },
  };
};
