import { createCtx } from '~/components/utils';

export type Auth = {
  authenticated: boolean;
  loading: boolean;
  userInfo?: {
    id: string;
    firstName: string;
    lastName?: string;
    fullName: string;
    email?: string;
    pictureUrl?: string;
  };
};

export const AuthContext = createCtx<Auth>();
export const useAuth = AuthContext.useContext;
