import { useCallback, useMemo } from 'react';

import { FieldArrayRenderProps } from 'formik';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { FieldContainer } from '~/components/field-container';
import { PageSectionSubtitle } from '~/components/page-section';

import { Values } from './editor-module-form';
import { EditorModuleFormOption } from './editor-module-form-option';

// Interface
export interface EditorModuleFormOptionFieldArrayProps
  extends FieldArrayRenderProps {
  index: number;
}

// Component
export const EditorModuleFormOptionFieldArray = (
  props: EditorModuleFormOptionFieldArrayProps
) => {
  const { form, index, push } = props;

  const handleAdd = useCallback(() => {
    push({
      title: '',
    });
  }, [push]);

  const items = useMemo(() => {
    return (form.values as Values).questions[index].options || [];
  }, [form.values, index]);

  return (
    <>
      {items.length > 0 && <PageSectionSubtitle>Options</PageSectionSubtitle>}
      {items.map((_, i) => {
        return <EditorModuleFormOption key={i} index={i} />;
      })}

      <FieldContainer>
        <Button
          variant="text"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ alignSelf: 'center' }}
          onClick={handleAdd}
        >
          Add Option
        </Button>
      </FieldContainer>
    </>
  );
};
