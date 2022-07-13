import { useCallback, useEffect, useMemo } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { EditorModuleForm } from '../components/editor-module-form';
import { EditorModuleFormValues } from '../components/editor-module-form/editor-module-form.helpers';
import { useSaveModuleMutation } from '../editor.mutations';
import { useGetModuleByIdQuery } from '../editor.queries';
import { getEditorModuleListUrl } from '../editor.urls';

export const EditorModulePage = () => {
  const [getModule, { data, loading }] = useGetModuleByIdQuery();
  const [saveModule] = useSaveModuleMutation();
  const navigate = useNavigate();
  const routeParams = useParams();

  // Handlers
  const handleSubmit = useCallback(
    async (values: EditorModuleFormValues) => {
      try {
        await saveModule({
          variables: {
            params: values,
          },
        });
        navigate(getEditorModuleListUrl());
      } catch (e) {
        return Promise.reject(e);
      }
    },
    [saveModule, navigate]
  );

  const handleCancel = useCallback(() => {
    navigate(getEditorModuleListUrl());
  }, [navigate]);

  // Effects
  useEffect(() => {
    if (routeParams.id) {
      getModule({
        variables: {
          id: routeParams.id,
        },
      });
    }
  }, [routeParams.id, getModule]);

  // Render
  const initialData = useMemo(() => {
    if (!loading && data) {
      return data.module;
    }

    return undefined;
  }, [loading, data]);

  return (
    <EditorModuleForm
      title={initialData?.title || '...'}
      initialData={initialData}
      loading={loading}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};
