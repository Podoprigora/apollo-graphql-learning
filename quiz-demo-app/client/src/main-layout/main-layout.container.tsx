import { useMemo, useState, useCallback } from 'react';

import { MainLayoutContext, MainLayoutContextValue } from './main-layout-context';
import { MainLayout as MainLayoutView } from './components/main-layout';
import { MainUserProfileLinkData } from './components/main-user-profile-link';
import { useAuth } from '~/auth/auth-context';

export const MainLayout = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { loading, userInfo } = useAuth();

  // Handlers
  const handleOpenMobileNav = useCallback(() => {
    setOpenMobileNav(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setOpenMobileNav(false);
  }, []);

  // Render
  const contextValue = useMemo<MainLayoutContextValue>(() => {
    return {
      isOpenedMobileNav: openMobileNav,
      openMobileNav: handleOpenMobileNav,
      closeMobileNav: handleCloseMobileNav,
    };
  }, [openMobileNav, handleCloseMobileNav, handleOpenMobileNav]);

  const userProfileData = useMemo<MainUserProfileLinkData>(() => {
    return {
      id: userInfo?.id || '',
      primaryText: userInfo?.fullName || '',
      secondaryText: userInfo?.email,
      avatarUrl: userInfo?.pictureUrl,
    };
  }, [userInfo]);

  if (loading) {
    return null;
  }

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <MainLayoutView userProfileData={userProfileData} />
    </MainLayoutContext.Provider>
  );
};
