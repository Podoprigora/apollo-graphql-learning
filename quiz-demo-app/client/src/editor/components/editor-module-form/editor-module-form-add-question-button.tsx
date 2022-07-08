import Button, { ButtonProps } from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import { FieldContainer } from '~/components/field-container';
import { PageSection } from '~/components/page-section';

// Interface
export interface EditorModuleFormAddQuestionButtonProps extends ButtonProps {}

export const EditorModuleFormAddQuestionButton = (
  props: EditorModuleFormAddQuestionButtonProps
) => {
  return (
    <PageSection PaperProps={{ dense: true }}>
      <FieldContainer direction="row" justifyContent="center">
        <Button
          variant="text"
          color="primary"
          startIcon={<AddIcon />}
          {...props}
        >
          Add Question
        </Button>
      </FieldContainer>
    </PageSection>
  );
};
