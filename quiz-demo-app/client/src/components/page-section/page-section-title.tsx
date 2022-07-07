import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

// Interfaces
export interface PageSctionTitleProps extends TypographyProps {}

// Styles
export const PageSectionTitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" noWrap {...props} />
))(({ theme }) => {
  return {
    marginBottom: theme.spacing(3),
    lineHeight: 1,
  };
});

// Component
export const PageSectionTitle = (props: PageSctionTitleProps) => {
  return <PageSectionTitleStyles {...props} />;
};
