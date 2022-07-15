import { useMemo, useState } from 'react';

import { Auth, AuthContext } from './auth-context';
import { useGetAuthUserInfoQuery } from './auth.operations';

export interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const { data, loading } = useGetAuthUserInfoQuery();
  const [authenticated] = useState(false);

  const contextValue = useMemo<Auth>(() => {
    return {
      authenticated,
      loading,
      userInfo: data?.userInfo,
    };
  }, [authenticated, data, loading]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
