import Button from '@mui/material/Button';

import { ThemeProvider } from '../theme';
import { EmotionButtonStyled } from '../_emotion/emotion-button-styled';

export interface AppProps {}

export const App = (props: AppProps) => {
  return (
    <ThemeProvider>
      <div>Quiz Demo App</div>
      <Button variant="contained" color="primary" size="medium">
        Editor
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Explorer
      </Button>
      <EmotionButtonStyled />
    </ThemeProvider>
  );
};
