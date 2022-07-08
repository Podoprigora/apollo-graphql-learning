import { useCallback, useMemo } from 'react';

import {
  useFormik,
  FormikProvider,
  Formik,
  Field,
  FastField,
  FieldArray,
} from 'formik';
import { TextField as FormikTextField } from 'formik-mui';
import Button from '@mui/material/Button';

import { PageHeader } from '~/components/page-header';
import { StickyFbar } from '~/components/sticky-fbar';
import { PageSection } from '~/components/page-section';
import { FieldContainer } from '~/components/field-container';
import { EditorModuleFormQuestionFieldArray } from './editor-module-form-question-field-array';

// Interfaces
export interface EditorModuleFormProps {
  title?: string;
  initialData?: Record<string, unknown>;
}

// Component
const initialValues = {
  title: '',
  description: '',
  questions: [{ title: '', multipleChoice: true, options: [] }],
};

export type Values = typeof initialValues;

export const EditorModuleForm = (props: EditorModuleFormProps) => {
  const { title } = props;

  const handleSubmit = useCallback((values: Values) => {
    console.log({ values });
  }, []);

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  const handleSaveClick = useCallback(() => {
    formik.handleSubmit();
    formik.setSubmitting(false);
  }, [formik]);

  return (
    <FormikProvider value={formik}>
      {title && <PageHeader title={title} />}

      <PageSection>
        <FieldContainer>
          <FastField
            component={FormikTextField}
            name="title"
            label="Title"
            required
            fullWidth
          />
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
        <Button variant="text" color="inherit">
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save Changes
        </Button>
      </StickyFbar>
    </FormikProvider>
  );
};
