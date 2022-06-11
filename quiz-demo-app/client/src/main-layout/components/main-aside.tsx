import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

import { useMainLayout } from '../main-layout-context';

// Interfaces

export interface MainAsideProps {
  children?: React.ReactNode;
}

// Styles

const DrawerStyles = styled(Drawer)(({ theme }) => {
  return {
    flexShrink: 0,
    width: 300,

    '.MuiPaper-root': {
      backgroundColor: theme.palette.background.default,
      borderRight: `1px solid ${theme.palette.divider}`,
      opacity: 1,
    },
  };
});

// Component

export const MainAside = (props: MainAsideProps) => {
  const { children } = props;
  const { isOpenedMobileNav, closeMobileNav } = useMainLayout();
  const container = window.document.body;

  return (
    <>
      <DrawerStyles
        open={isOpenedMobileNav}
        variant="temporary"
        container={container}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', lg: 'none' } }}
        onClose={closeMobileNav}
      >
        {children}
      </DrawerStyles>
      <DrawerStyles
        open
        variant="permanent"
        anchor="left"
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        {children}
      </DrawerStyles>
    </>
  );
};
