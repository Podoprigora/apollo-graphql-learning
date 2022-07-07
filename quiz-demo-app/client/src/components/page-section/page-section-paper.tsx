import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

// Interfaces
export interface PageSectionPaperProps extends PaperProps {
  dense?: boolean;
  transparent?: boolean;
}

// Styles
export const PageSectionPaperStyles = styled((props: PageSectionPaperProps) => {
  const { dense, transparent, ...other } = props;

  return <Paper elevation={0} {...other} />;
})(({ theme, dense = false, transparent = false }) => {
  return {
    padding: theme.spacing(dense ? 2 : 3),
    borderRadius: theme.shape.borderRadiusLarge,

    ...(transparent && { backgroundColor: 'transparent' }),
  };
});

// Component
export const PageSectionPaper = (props: PageSectionPaperProps) => {
  return <PageSectionPaperStyles {...props} />;
};
