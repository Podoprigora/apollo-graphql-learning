import React, { useCallback } from 'react';

import {
  EditorModuleList as EditorModuleListView,
  EditorModuleListItemData,
} from '../components/editor-module-list';
import { useDeleteModuleMutation } from '../editor.mutations';
import { useGetModulesQuery } from '../editor.queries';

export const EditorModuleList = () => {
  const { data, loading, refetch } = useGetModulesQuery();
  const [deleteModule] = useDeleteModuleMutation();

  const handleDelete = useCallback(
    async (ev: React.MouseEvent<HTMLButtonElement>, data: EditorModuleListItemData) => {
      try {
        await deleteModule({
          variables: {
            id: String(data.id),
          },
        });

        await refetch();
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    },
    [deleteModule, refetch]
  );

  return <EditorModuleListView items={data?.modules} loading={loading} onDelete={handleDelete} />;
};
