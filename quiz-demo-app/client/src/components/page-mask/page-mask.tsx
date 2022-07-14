import { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { unstable_getScrollbarSize } from '@mui/utils';
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

  useEffect(() => {
    if (open) {
      const container = document.body;
      const paddingRight = unstable_getScrollbarSize(document);

      document.documentElement.scrollTop = 0;
      container.style.setProperty('overflow', 'hidden');
      container.style.setProperty('padding-right', `${paddingRight}px`);

      return () => {
        container.style.removeProperty('overflow');
        container.style.removeProperty('padding-right');
      };
    }
  }, [open]);

  return (
    <BackdropStyles open={open} timeout={500} unmountOnExit>
      {!disableProgress && <CircularProgress color="primary" size={48} thickness={2.8} />}
    </BackdropStyles>
  );
};
