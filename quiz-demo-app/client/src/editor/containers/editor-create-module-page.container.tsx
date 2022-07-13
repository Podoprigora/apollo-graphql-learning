import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { EditorModuleForm } from '../components/editor-module-form';
import { EditorModuleFormValues } from '../components/editor-module-form/editor-module-form.helpers';
import { useSaveModuleMutation } from '../editor.mutations';

// Interfaces
export interface EditorCreateModulePageProps {}

// Component
export const EditorCreateModulePage = (props: EditorCreateModulePageProps) => {
  const [saveModule] = useSaveModuleMutation();
  const navigate = useNavigate();

  // Handlers
  const handleSubmit = useCallback(
    async (values: EditorModuleFormValues) => {
      try {
        await saveModule({
          variables: {
            params: values,
          },
        });
        navigate('/editor');
      } catch (e) {
        return Promise.reject(e);
      }
    },
    [saveModule, navigate]
  );

  const handleCancel = useCallback(() => {
    navigate('/editor');
  }, [navigate]);

  // Render
  return <EditorModuleForm title="Create a new module" onSubmit={handleSubmit} onCancel={handleCancel} />;
};
