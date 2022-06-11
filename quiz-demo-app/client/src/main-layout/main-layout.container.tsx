import { useMemo, useState, useCallback } from 'react';

import {
  MainLayoutContext,
  MainLayoutContextValue,
} from './main-layout-context';
import { MainLayout as MainLayoutView } from './components/main-layout';

export const MainLayout = () => {
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
      <MainLayoutView
        userProfileData={{
          id: '1',
          primaryText: 'Demo User',
          secondaryText: 'demo-user@mail.com',
          avatarUrl: 'https://randomuser.me/api/portraits/med/men/15.jpg',
        }}
      />
    </MainLayoutContext.Provider>
  );
};
