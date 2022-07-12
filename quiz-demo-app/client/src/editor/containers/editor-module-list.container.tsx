import React, { useCallback } from 'react';

import {
  EditorModuleList as EditorModuleListView,
  EditorModuleListItemData,
} from '../components/editor-module-list';
import { useGetModulesQuery } from '../editor.queries';

export const EditorModuleList = () => {
  const { data, loading } = useGetModulesQuery();

  const handleDelete = useCallback(
    (
      ev: React.MouseEvent<HTMLButtonElement>,
      data: EditorModuleListItemData
    ) => {
      console.log('Delete:', data);
    },
    []
  );

  return (
    <EditorModuleListView
      items={data?.modules}
      loading={loading}
      onDelete={handleDelete}
    />
  );
};
