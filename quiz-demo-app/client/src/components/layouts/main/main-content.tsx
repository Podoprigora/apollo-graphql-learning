import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export interface MainContentProps {
  children?: React.ReactNode;
}

export const MainContnent = (props: MainContentProps) => {
  const { children } = props;

  return (
    <Container>
      <>
        <Toolbar sx={{ display: { lg: 'none' } }} />
        {children}
      </>
    </Container>
  );
};
