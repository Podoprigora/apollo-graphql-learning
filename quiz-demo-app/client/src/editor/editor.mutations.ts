import { gql, useMutation } from '@apollo/client';

// SaveModule
export interface SaveModuleVars {
  params: {
    title: string;
    description: string;
    questions: Array<{
      title: string;
      multipleChoice: boolean;
      options: Array<{
        title: string;
        isAnswer: boolean;
      }>;
    }>;
  };
}

export interface ModuleMutationResults {
  results: {
    id: string;
  };
}

const saveModuleMutation = gql`
  mutation SaveModule($params: ModuleInput!) {
    results: saveModule(params: $params) {
      id
    }
  }
`;

export const useSaveModuleMutation = () => {
  return useMutation<ModuleMutationResults, SaveModuleVars>(saveModuleMutation);
};

// Delete Module
export interface DeleteModuleVars {
  id: string;
}

const deleteModuleMutation = gql`
  mutation DeleteModule($id: ID!) {
    results: deleteModule(id: $id) {
      id
    }
  }
`;

export const useDeleteModuleMutation = () => {
  return useMutation<ModuleMutationResults, DeleteModuleVars>(deleteModuleMutation);
};
