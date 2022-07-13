import { Theme, Components, alpha } from '@mui/material/styles';

export const Input = (theme: Theme): Components => {
  return {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          boxShadow: `0 0 0 1px rgba(0,0,0, .14)`,
          borderRadius: theme.shape.borderRadius,
          transition: theme.transitions.create('box-shadow', {
            duration: theme.transitions.duration.shortest,
          }),

          'label + &': {
            marginTop: 0,
          },

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.9)}`,
            borderRadius: theme.shape.borderRadius,
            opacity: 0,
            pointerEvents: 'none',
            transition: theme.transitions.create('opacity', {
              duration: theme.transitions.duration.shortest,
            }),
            zIndex: 0,
          },

          '&:hover:not(.Mui-foucused):not(.Mui-disabled):not(.Mui-error)': {
            boxShadow: `0 0 0 1px rgba(0,0,0, .4)`,
          },

          '&.Mui-focused': {
            '&::before': {
              opacity: 1,
            },
          },

          '&.Mui-disabled': {
            opacity: theme.palette.action.disabledOpacity,
          },
        },
        multiline: {
          padding: '25px 12px 8px',
        },
        error: {
          boxShadow: `0 0 0 1px ${alpha(theme.palette.error.main, 0.9)}`,
        },

        input: {
          paddingTop: 25,
          paddingRight: 12,
          paddingBottom: 8,
          paddingLeft: 12,

          '&::placeholder': {
            color: theme.palette.text.secondary,
            opacity: 1,
          },
        },
        inputMultiline: {
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        },
      },
    },
  };
};
