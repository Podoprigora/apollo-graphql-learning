import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Interfaces
export interface PageMaskProps {
  open: boolean;
  disableProgress?: boolean;
}

const BackdropStyles = styled(Backdrop)(({ theme }) => {
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255, .2)',
    cursor: 'wait',
    zIndex: theme.zIndex.drawer + 1,
  };
});

// Component
export const PageMask = (props: PageMaskProps) => {
  const { open, disableProgress } = props;

  return (
    <BackdropStyles open={open}>
      {!disableProgress && <CircularProgress color="primary" size={48} thickness={2.8} />}
    </BackdropStyles>
  );
};
