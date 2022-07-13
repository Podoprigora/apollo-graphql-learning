import { gql, useLazyQuery, useQuery } from '@apollo/client';

// GetAllModules
export interface Module {
  id: string;
  title: string;
  description: string;
  userInfo?: {
    fullName: string;
    pictureUrl?: string;
  };
}

interface GetAllModulesData {
  modules: Array<Module>;
}

const allModulesQuery = gql`
  query GetModules($pagination: PaginationInput) {
    modules(pagination: $pagination) {
      id
      title
      description
      userInfo {
        fullName
        pictureUrl
      }
    }
  }
`;

export const useGetAllModulesQuery = () => {
  return useQuery<GetAllModulesData>(allModulesQuery, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });
};

// GetModuleById
export interface ModuleProfile {
  id: string;
  title: string;
  description: string;
  questions: Array<{
    id: string;
    title: string;
    multipleChoice: boolean;
    options: Array<{
      id: string;
      title: string;
      isAnswer: boolean;
    }>;
  }>;
}

interface GetModuleByIdData {
  module: ModuleProfile;
}

interface GetModuleByIdVars {
  id: string;
}

const moduleByIdQuery = gql`
  query GetModuleById($id: ID!) {
    module(id: $id) {
      id
      title
      description
      questions {
        id
        title
        multipleChoice
        options {
          id
          title
          isAnswer
        }
      }
    }
  }
`;

export const useGetModuleByIdQuery = () => {
  return useLazyQuery<GetModuleByIdData, GetModuleByIdVars>(moduleByIdQuery, {
    fetchPolicy: 'network-only',
  });
};
