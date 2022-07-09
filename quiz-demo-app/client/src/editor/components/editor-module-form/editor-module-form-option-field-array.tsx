import { useCallback, useMemo, useState } from 'react';

import { FieldArrayRenderProps } from 'formik';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { FieldContainer } from '~/components/field-container';
import { PageSectionSubtitle } from '~/components/page-section';
import {
  EditorModuleFormValues,
  newOptionPlaceholderData,
} from './editor-module-form.helpers';
import { EditorModuleFormOption } from './editor-module-form-option';
import { EditorModuleFormErrorMessage } from './editor-module-form-error-message';

// Interface
export interface EditorModuleFormOptionFieldArrayProps
  extends FieldArrayRenderProps {
  index: number;
}

// Styles
const TitleStyles = styled(PageSectionSubtitle)(({ theme }) => {
  return {
    margin: theme.spacing(0, 0, 1, 0),
  };
});

// Component
export const EditorModuleFormOptionFieldArray = (
  props: EditorModuleFormOptionFieldArrayProps
) => {
  const { form, index, push, remove } = props;
  const [addedManually, setAddedManually] = useState(false);

  const handleAdd = useCallback(() => {
    push(newOptionPlaceholderData);
    setAddedManually(true);
  }, [push]);

  const handleDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const items = useMemo(() => {
    return (
      (form.values as EditorModuleFormValues).questions[index].options || []
    );
  }, [form.values, index]);

  return (
    <>
      {items.length > 0 && <TitleStyles>Options</TitleStyles>}
      {items.map((_, i) => {
        return (
          <EditorModuleFormOption
            key={i}
            index={i}
            parentIndex={index}
            autoFocus={addedManually && i === items.length - 1}
            onDelete={handleDelete}
          />
        );
      })}

      <EditorModuleFormErrorMessage name={`questions[${index}].options`} />
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
