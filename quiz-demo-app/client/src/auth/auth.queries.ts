import { useQuery, gql } from '@apollo/client';

// UserInfo
export interface AuthUserInfo {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  pictureUrl: string;
}

interface GetAuthUserInfoData {
  userInfo?: AuthUserInfo;
}

const userInfoQuery = gql`
  query GetUserInfo {
    userInfo {
      id
      firstName
      lastName
      fullName
      email
      pictureUrl
    }
  }
`;

export const useGetAuthUserInfoQuery = () => {
  return useQuery<GetAuthUserInfoData>(userInfoQuery, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });
};
