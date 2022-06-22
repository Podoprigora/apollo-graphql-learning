import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

import {
  ModuleCardSubtitle,
  ModuleCardSubtitleStyles,
} from './module-card-subtitle';

// Interfaces
export interface ModuleCardHeaderProps {
  title: string;
  subtitle?: string;
  noWrap?: boolean;
}

// Styles
const ModuleCardHeaderStyles = styled('header')<Partial<ModuleCardHeaderProps>>(
  ({ theme, noWrap }) => {
    return {
      ...(noWrap && { overflow: 'hidden' }),

      [String(ModuleCardSubtitleStyles)]: {
        marginTop: theme.spacing(1.5),
      },
    };
  }
);

const ModuleCardTitleStyles = styled((props: TypographyProps) => {
  return <Typography variant="h6" {...props} />;
})(() => {
  return {
    lineHeight: 1.2,
  };
});

// Component
export const ModuleCardHeader = (props: ModuleCardHeaderProps) => {
  const { title, subtitle, noWrap = false } = props;

  return (
    <ModuleCardHeaderStyles noWrap={noWrap}>
      <ModuleCardTitleStyles noWrap={noWrap}>{title}</ModuleCardTitleStyles>
      {subtitle && <ModuleCardSubtitle>{subtitle}</ModuleCardSubtitle>}
    </ModuleCardHeaderStyles>
  );
};
