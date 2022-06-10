import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

// Interfaces
export interface PagePaperProps extends PaperProps {}

// Styles
const RootStyles = styled(Paper)(({ theme }) => {
  return {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadiusLarge,
  };
});

// Component
export const PagePaper = (props: PagePaperProps) => {
  const { children, ...other } = props;

  return (
    <RootStyles elevation={1} {...other}>
      {children}
    </RootStyles>
  );
};
