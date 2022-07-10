import { Theme, Components, alpha } from '@mui/material/styles';

export const Switch = (theme: Theme): Components => {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {},
        track: {
          backgroundColor: '#ddd',
          boxShadow: 'inset 0 0.1rem 0.4rem -0.1rem rgba(0,0,0, 0.22)',
          opacity: 1,
        },
        thumb: {},
        switchBase: {
          color: theme.palette.common.white,
        },
        sizeMedium: {
          padding: 0,
          width: 50,
          height: 28,

          '& .MuiSwitch-switchBase': {
            padding: 4,

            '&.Mui-checked': {
              transform: 'translateX(22px)',
            },
          },

          '& .MuiSwitch-thumb': {
            width: 20,
            height: 20,
          },

          '& .MuiSwitch-track': {
            borderRadius: 14,
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: theme.palette.common.white,

            '& + .MuiSwitch-track': {
              backgroundColor: alpha(theme.palette.primary.main, 0.85),
              opacity: 1,
            },
          },
        },
      },
    },
  };
};
