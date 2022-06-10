import { createCtx } from '../../utils';

export type MainLayoutContextValue = {
  isOpenedMobileNav: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
};

export const MainLayoutContext = createCtx<MainLayoutContextValue>();
export const useMainLayout = MainLayoutContext.useContext;
