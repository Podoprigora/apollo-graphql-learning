import { useMemo, useState, useCallback } from 'react';

import {
  MainLayoutContext,
  MainLayoutContextValue,
} from './main-layout-context';
import { MainLayout as MainLayoutView } from './components/main-layout';
import { userProfileFixture } from '~/fixutures';

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
      <MainLayoutView userProfileData={userProfileFixture} />
    </MainLayoutContext.Provider>
  );
};
