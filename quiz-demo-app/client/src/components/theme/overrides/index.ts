import { Theme, Components } from '@mui/material/styles';

import { CssBaseline } from './css-base-line';
import { Typography } from './typography';
import { Avatar } from './avatar';
import { Backdrop } from './backdrop';
import { TextField } from './text-field';

export const ComponentsOverrides = (theme: Theme): Components => {
  return Object.assign(
    CssBaseline(theme),
    Typography(theme),
    Avatar(theme),
    Backdrop(theme),
    TextField(theme)
  );
};
