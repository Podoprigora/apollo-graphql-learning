import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

// Interfaces
export interface MainContentProps {
  children?: React.ReactNode;
}

// Styles
const ContentStyles = styled('section')(({ theme }) => {
  return {
    padding: theme.spacing(4, 1),
  };
});

// Component
export const MainContent = (props: MainContentProps) => {
  const { children } = props;

  return (
    <Container>
      <ContentStyles>
        <Toolbar sx={{ display: { lg: 'none' } }} />
        {children}
      </ContentStyles>
    </Container>
  );
};
