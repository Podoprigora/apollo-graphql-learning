import { Palette } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

export const palette: Partial<Palette> = {
  primary: {
    light: '#aed581',
    main: '#689f38',
    dark: '#387002',
    contrastText: '#fff',
  },

  text: {
    primary: grey[900],
    secondary: grey[600],
    disabled: '',
  },

  background: {
    default: '#f6f7fb',
    paper: '#fff',
  },

  divider: '#e1e3e5',
};
