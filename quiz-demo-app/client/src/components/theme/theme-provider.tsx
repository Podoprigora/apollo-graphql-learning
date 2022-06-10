import { useMemo } from 'react';

import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ComponentsOverrides } from './overrides';
import { typography } from './typography';
import { palette } from './palette';
import { shape } from './shape';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const themeValues = useMemo<ThemeOptions>(
    () => ({
      typography,
      palette,
      shape,
    }),
    []
  );

  themeValues.components = ComponentsOverrides(themeValues as Theme);

  const theme = createTheme(themeValues);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
