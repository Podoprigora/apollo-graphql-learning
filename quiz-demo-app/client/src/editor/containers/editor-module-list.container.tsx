import React, { useCallback } from 'react';

import {
  EditorModuleList as EditorModuleListView,
  EditorModuleListItemData,
} from '../components/editor-module-list';
import { EditorModuleListItemsFixture } from '~/fixutures';

export const EditorModuleList = () => {
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
      items={EditorModuleListItemsFixture}
      onDelete={handleDelete}
    />
  );
};
