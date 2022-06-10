import { useMemo, useState, useCallback } from 'react';

import { styled } from '@mui/material/styles';

import { MainAside } from './main-aside';
import { MainTopBar } from './main-top-bar';
import { MainContnent } from './main-content';
import { MainLayoutContext, MainLayoutContextValue } from './main-context';

export interface MainProps {
  children?: React.ReactNode;
}

const RootStyles = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  width: '100%',
  height: '100%',
});

const MainStyles = styled('main')({
  flex: 1,
  position: 'relative',
});

export const MainLayout = (props: MainProps) => {
  const { children } = props;

  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleOpenMobileNav = useCallback(() => {
    setOpenMobileNav(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setOpenMobileNav(false);
  }, []);

  const contextValue = useMemo<MainLayoutContextValue>(() => {
    return {
      isOpenedMobileNav: openMobileNav,
      openMobileNav: handleOpenMobileNav,
      closeMobileNav: handleCloseMobileNav,
    };
  }, [openMobileNav, handleCloseMobileNav, handleOpenMobileNav]);

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <RootStyles>
        <MainAside />
        <MainStyles>
          <MainTopBar />
          <MainContnent>{children}</MainContnent>
        </MainStyles>
      </RootStyles>
    </MainLayoutContext.Provider>
  );
};
