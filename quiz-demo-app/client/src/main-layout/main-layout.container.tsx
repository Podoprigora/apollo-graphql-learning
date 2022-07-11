import { useMemo, useState, useCallback } from 'react';

import { useGetUserInfoQuery } from './queries';
import {
  MainLayoutContext,
  MainLayoutContextValue,
} from './main-layout-context';
import { MainLayout as MainLayoutView } from './components/main-layout';
import { MainUserProfileLinkData } from './components/main-user-profile-link';

export const MainLayout = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { data, loading } = useGetUserInfoQuery();

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
      id: data?.userInfo?.id || '',
      primaryText: data?.userInfo?.fullName || '',
      secondaryText: data?.userInfo?.email,
      avatarUrl: data?.userInfo?.pictureUrl,
    };
  }, [data]);

  if (loading) {
    return null;
  }

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <MainLayoutView userProfileData={userProfileData} />
    </MainLayoutContext.Provider>
  );
};
