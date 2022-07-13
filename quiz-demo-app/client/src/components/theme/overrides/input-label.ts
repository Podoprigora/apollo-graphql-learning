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

          '&.Mui-disabled': {
            opacity: theme.palette.action.disabledOpacity,
          },
        },
        shrink: {
          fontWeight: theme.typography.fontWeightMedium,
          letterSpacing: 0.6,
          maxWidth: 'calc(133% - 24px)',
          pointerEvents: 'auto',
          userSelect: 'none',
          transform: 'translate(12px, 7px) scale(0.75)',

          '&.Mui-focused': {
            '&.MuiFormLabel-colorPrimary': {
              color: theme.palette.primary.dark,
            },
          },
        },
      },
    },
  };
};
