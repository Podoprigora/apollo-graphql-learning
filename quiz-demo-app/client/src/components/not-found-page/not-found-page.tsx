import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterButton } from '../router-button';

// Styles
const RootStyles = styled('section')(({ theme }) => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

const ButtonStyles = styled(RouterButton)(({ theme }) => {
  return {
    marginTop: theme.spacing(2),
  };
}) as typeof RouterButton;

// Component
export const NotFoundPage = () => {
  return (
    <RootStyles>
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">
        Sorry this page isn&apos;t available!
      </Typography>
      <ButtonStyles LinkProps={{ to: '/' }}>Back to home</ButtonStyles>
    </RootStyles>
  );
};
