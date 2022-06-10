import { Shape } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Shape {
    borderRadius: number | string;
    borderRadiusSmall?: number | string;
    borderRadiusLarge?: number | string;
  }

  interface Theme {
    shape: Shape;
  }

  interface ThemeOptions {
    shape?: Shape;
  }
}

export const shape: Shape = {
  borderRadiusSmall: 2,
  borderRadius: 4,
  borderRadiusLarge: 10,
};
