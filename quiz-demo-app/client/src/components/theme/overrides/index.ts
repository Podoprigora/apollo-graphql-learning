import { ThemeOptions, Components } from '@mui/material/styles';

import { CssBaseline } from './css-base-line';

export const ComponentsOverrides = (theme: ThemeOptions): Components => {
  return Object.assign(CssBaseline(theme));
};
