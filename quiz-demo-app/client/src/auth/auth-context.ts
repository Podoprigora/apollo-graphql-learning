import { createCtx } from '~/components/utils';

export type Auth = {
  authenticated: boolean;
  loading: boolean;
  userInfo?: {
    id: string;
    firstName: string;
    lastName?: string | null;
    fullName: string;
    email?: string | null;
    pictureUrl?: string | null;
  };
};

export const AuthContext = createCtx<Auth>();
export const useAuth = AuthContext.useContext;
