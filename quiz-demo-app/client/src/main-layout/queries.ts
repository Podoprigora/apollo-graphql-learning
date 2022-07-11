import { useQuery, gql } from '@apollo/client';

// @TODO: generate automatically

// UserInfo
export interface UserInfo {
  id?: string;
  fullName?: string;
  email?: string;
  pictureUrl?: string;
}

interface GetUserInfoQuery {
  userInfo?: UserInfo;
}

const userInfoQuery = gql`
  query GetUserInfo {
    userInfo {
      id
      fullName
      email
      pictureUrl
    }
  }
`;

export const useGetUserInfoQuery = () => {
  return useQuery<GetUserInfoQuery>(userInfoQuery);
};
