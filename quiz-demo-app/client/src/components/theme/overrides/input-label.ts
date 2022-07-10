import { Theme, Components } from '@mui/material/styles';

export const InputLabel = (theme: Theme): Components => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          maxWidth: 'calc(100% - 24px)',
          transform: 'translate(12px, 16px) scale(1)',
          pointerEvents: 'none',
          zIndex: 1,

          '&.Mui-error': {
            color: theme.palette.text.secondary,
          },
        },
        shrink: {
          maxWidth: 'calc(133% - 24px)',
          transform: 'translate(12px, 7px) scale(0.75)',
          letterSpacing: 0.4,
          pointerEvents: 'auto',
          userSelect: 'none',
        },
      },
    },
  };
};
