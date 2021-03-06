import { Palette } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

export const palette: Partial<Palette> = {
  primary: {
    light: '#aed581',
    main: '#689f38',
    dark: '#387002',
    contrastText: '#fff',
  },

  text: {
    primary: grey[900],
    secondary: grey[500],
    disabled: '',
  },

  error: {
    main: '#d50000',
    light: '#ea4d4d',
    dark: red[700],
    contrastText: '#fff',
  },

  background: {
    default: '#f6f7fb',
    paper: '#fff',
  },

  divider: '#e1e3e5',
};
