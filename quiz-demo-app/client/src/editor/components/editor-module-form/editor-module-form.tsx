import { useCallback } from 'react';

import { useFormik, FormikProvider, FastField, FieldArray, FormikHelpers } from 'formik';
import { TextField as FormikTextField } from 'formik-mui';
import Button from '@mui/material/Button';

import { PageHeader } from '~/components/page-header';
import { StickyFbar } from '~/components/sticky-fbar';
import { PageSection } from '~/components/page-section';
import { FieldContainer } from '~/components/field-container';
import { initialValues, validationSchema, EditorModuleFormValues } from './editor-module-form.helpers';
import { EditorModuleFormQuestionFieldArray } from './editor-module-form-question-field-array';

// Interfaces
export interface EditorModuleFormProps {
  title?: string;
  initialData?: EditorModuleFormValues;
  onSubmit?: (values: EditorModuleFormValues) => Promise<unknown>;
  onCancel?: () => void;
}

// Component
export const EditorModuleForm = (props: EditorModuleFormProps) => {
  const { title, initialData, onSubmit, onCancel } = props;

  // Handlers
  const handleSubmit = useCallback(
    async (values: EditorModuleFormValues, formikHelpers: FormikHelpers<EditorModuleFormValues>) => {
      if (!onSubmit) {
        formikHelpers.setSubmitting(false);
        return undefined;
      }

      try {
        await onSubmit(values);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      } finally {
        formikHelpers.setSubmitting(false);
      }
    },
    [onSubmit]
  );

  const formik = useFormik({
    initialValues: initialData || initialValues,
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  const handleSaveClick = useCallback(() => {
    formik.handleSubmit();
  }, [formik]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
  }, [onCancel]);

  // Render
  return (
    <FormikProvider value={formik}>
      {title && <PageHeader title={title} />}

      <PageSection>
        <FieldContainer>
          <FastField component={FormikTextField} name="title" label="Title" required fullWidth />
          <FastField
            component={FormikTextField}
            name="description"
            label="Description"
            required
            fullWidth
            multiline
            minRows={4}
          />
        </FieldContainer>
      </PageSection>

      <FieldArray name="questions" validateOnChange={false}>
        {(arrayHelpers) => {
          return <EditorModuleFormQuestionFieldArray {...arrayHelpers} />;
        }}
      </FieldArray>

      <StickyFbar>
        <Button variant="text" color="inherit" onClick={handleCancel}>
          Back
        </Button>
        <Button variant="contained" color="primary" disabled={formik.isSubmitting} onClick={handleSaveClick}>
          Save Changes {formik.isSubmitting && '...'}
        </Button>
      </StickyFbar>
    </FormikProvider>
  );
};
