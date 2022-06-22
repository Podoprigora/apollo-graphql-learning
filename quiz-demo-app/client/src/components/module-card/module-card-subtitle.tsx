import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Interfaces
export interface ModuleCardSubtitleProps extends TypographyProps {}

// Styles
export const ModuleCardSubtitleStyles = styled((props: TypographyProps) => {
  return <Typography variant="subtitle2" {...props} />;
})(() => {
  return {
    color: grey['600'],
  };
});

// Component
export const ModuleCardSubtitle = (props: ModuleCardSubtitleProps) => {
  return <ModuleCardSubtitleStyles {...props} />;
};
