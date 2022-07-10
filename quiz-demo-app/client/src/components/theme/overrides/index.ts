import { Theme, Components } from '@mui/material/styles';

import { CssBaseline } from './css-base-line';
import { Typography } from './typography';
import { Avatar } from './avatar';
import { Backdrop } from './backdrop';
import { TextField } from './text-field';
import { FormHelperText } from './form-helper-text';
import { Input } from './input';
import { InputLabel } from './input-label';
import { FormLabel } from './form-label';
import { Switch } from './switch';

export const ComponentsOverrides = (theme: Theme): Components => {
  return Object.assign(
    CssBaseline(theme),
    Typography(theme),
    Avatar(theme),
    Backdrop(theme),
    Input(theme),
    FormLabel(theme),
    InputLabel(theme),
    TextField(theme),
    Switch(theme),
    FormHelperText(theme)
  );
};
