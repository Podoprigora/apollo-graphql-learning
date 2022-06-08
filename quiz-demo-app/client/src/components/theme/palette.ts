import { Palette, alpha } from '@mui/material/styles';
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
    secondary: grey['A700'],
    disabled: '',
  },

  background: {
    default: alpha('#efebeb', 0.65),
    paper: '#fff',
  },

  divider: alpha('#d7ccc8', 0.6),
};
