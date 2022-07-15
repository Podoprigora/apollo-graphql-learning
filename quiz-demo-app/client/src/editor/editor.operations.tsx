import {
  useDeleteModuleMutationGenerated,
  useGetModuleByIdLazyQueryGenerated,
  useGetModulesQueryGenerated,
  useSaveModuleMutationGenerated,
} from '~/graphql/generated';

export const useGetAllModulesQuery = () => {
  return useGetModulesQueryGenerated({
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
    notifyOnNetworkStatusChange: true,
  });
};

export const useGetModuleByIdQuery = () => {
  return useGetModuleByIdLazyQueryGenerated({
    fetchPolicy: 'network-only',
  });
};

// Mutations

export const useSaveModuleMutation = () => {
  return useSaveModuleMutationGenerated();
};

export const useDeleteModuleMutation = () => {
  return useDeleteModuleMutationGenerated();
};
