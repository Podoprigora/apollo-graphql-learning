import { useMemo, useState, useCallback, useEffect } from 'react';

import _debounce from 'lodash/debounce';

import { useAuth } from '~/auth/auth-context';
import { MainLayoutContext, MainLayoutContextValue } from './main-layout-context';
import { MainLayout as MainLayoutView } from './components/main-layout';
import { MainUserProfileLinkData } from './components/main-user-profile-link';
import { MainScreenMask } from './components/main-screen-mask';

export const MainLayout = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const { loading, userInfo } = useAuth();
  const [isOpenedScreenMask, setIsOpenedScreenMaks] = useState(true);

  // Handlers
  const handleOpenMobileNav = useCallback(() => {
    setOpenMobileNav(true);
  }, []);

  const handleCloseMobileNav = useCallback(() => {
    setOpenMobileNav(false);
  }, []);

  const updateIsOpenedScreenMask = useMemo(() => {
    return _debounce(
      (loading: boolean) => {
        setIsOpenedScreenMaks(loading);
      },
      1200,
      { leading: true, trailing: true }
    );
  }, []);

  useEffect(() => {
    updateIsOpenedScreenMask(loading);
  }, [updateIsOpenedScreenMask, loading]);

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

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <MainScreenMask open={isOpenedScreenMask} />
      {!isOpenedScreenMask && <MainLayoutView userProfileData={userProfileData} />}
    </MainLayoutContext.Provider>
  );
};
