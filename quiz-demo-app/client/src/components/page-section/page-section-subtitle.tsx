import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Interface
export interface PageSectionSubtitleProps extends TypographyProps {}

// Styles
export const PageSectionSubtitleStyles = styled((props: TypographyProps) => (
  <Typography variant="subtitle1" noWrap {...props} />
))(({ theme }) => {
  return {
    color: grey['500'],
    margin: theme.spacing(2, 0),
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
  };
});

// Component
export const PageSectionSubtitle = (props: PageSectionSubtitleProps) => {
  return <PageSectionSubtitleStyles {...props} />;
};
