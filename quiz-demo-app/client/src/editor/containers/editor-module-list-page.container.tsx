import { useCallback } from 'react';

import { PageHeader } from '~/components/page-header';
import { RouterButton } from '~/components/router-button';
import { EditorModuleList, EditorModuleListItemData } from '../components/editor-module-list';
import { useDeleteModuleMutation } from '../editor.mutations';
import { useGetAllModulesQuery } from '../editor.queries';
import { getEditorCreateModuleUrl } from '../editor.urls';

export const EditorModuleListPage = () => {
  const { data, loading, refetch } = useGetAllModulesQuery();
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

  return (
    <>
      <PageHeader
        title="Editor of modules"
        action={
          <RouterButton variant="contained" color="primary" LinkProps={{ to: getEditorCreateModuleUrl() }}>
            Create Module
          </RouterButton>
        }
      />
      <EditorModuleList items={data?.modules} loading={loading} onDelete={handleDelete} />
    </>
  );
};
