import { useCallback, useState } from 'react';

import DialogContent from '@mui/material/DialogContent';

import { ActionDialog } from '~/components/action-dialog';
import { PageHeader } from '~/components/page-header';
import { RouterButton } from '~/components/router-button';
import { EditorModuleList, EditorModuleListItemData } from '../components/editor-module-list';
import { useDeleteModuleMutation } from '../editor.mutations';
import { useGetAllModulesQuery } from '../editor.queries';
import { getEditorCreateModuleUrl } from '../editor.urls';

export const EditorModuleListPage = () => {
  const { data, loading, refetch } = useGetAllModulesQuery();
  const [deleteModule] = useDeleteModuleMutation();
  const [isOpenedConfirmDialog, setIsOpenedConfirmDialog] = useState(false);
  const [selectedModule, setSelectedModule] = useState<EditorModuleListItemData | undefined>();

  const handleDelete = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>, data: EditorModuleListItemData) => {
      setSelectedModule(data);
      setIsOpenedConfirmDialog(true);
    },
    []
  );

  const handleConfirmDeletion = useCallback(async () => {
    if (!selectedModule) {
      return undefined;
    }

    try {
      await deleteModule({
        variables: {
          id: String(selectedModule.id),
        },
      });
      setIsOpenedConfirmDialog(false);
      refetch();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    } finally {
      setSelectedModule(undefined);
    }
  }, [selectedModule, deleteModule, refetch]);

  const handleCloseConfirmDialog = useCallback(() => {
    setIsOpenedConfirmDialog(false);
  }, []);

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

      <ActionDialog
        open={isOpenedConfirmDialog}
        variant="delete"
        title="Delete module"
        confirmBtnText="Delete"
        onCancel={handleCloseConfirmDialog}
        onConfirm={handleConfirmDeletion}
      >
        <DialogContent>Are you sure you want to delete selected module?</DialogContent>
      </ActionDialog>
    </>
  );
};
