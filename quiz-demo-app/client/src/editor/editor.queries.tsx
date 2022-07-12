import { gql, useQuery } from '@apollo/client';

export interface Module {
  id: string;
  title: string;
  description: string;
}

interface GetModulesData {
  modules: Array<Module>;
}

const modulesQuery = gql`
  query GetModules($pagination: PaginationInput) {
    modules(pagination: $pagination) {
      id
      title
      description
    }
  }
`;

export const useGetModulesQuery = () => {
  return useQuery<GetModulesData>(modulesQuery, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });
};
