import { useGetUserInfoQueryGenerated } from '~/graphql/generated';

export const useGetAuthUserInfoQuery = () => {
  return useGetUserInfoQueryGenerated({
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });
};
