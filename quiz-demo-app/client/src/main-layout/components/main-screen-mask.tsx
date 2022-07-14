import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import { Logo } from '~/components/logo';

// Interfaces
export interface MainScreenMaskProps {
  open: boolean;
}

const BackdropStyles = styled(Backdrop)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    opacity: 1,
    zIndex: theme.zIndex.modal + 1,
  };
});

// Component
export const MainScreenMask = (props: MainScreenMaskProps) => {
  const { open } = props;

  return (
    <BackdropStyles open={open} unmountOnExit>
      <Stack direction="column" alignItems="center" gap={6}>
        <Logo />
        <CircularProgress color="primary" size={72} thickness={2.4} />
      </Stack>
    </BackdropStyles>
  );
};
