import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

import { MainAsideContent } from './main-aside-content';
import { useMainLayout } from './main-context';

// Interfaces

export interface MainAsideProps {}

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
        <MainAsideContent />
      </DrawerStyles>
      <DrawerStyles
        open
        variant="permanent"
        anchor="left"
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        <MainAsideContent />
      </DrawerStyles>
    </>
  );
};
