import { memo, useCallback } from 'react';

import { FastField, FieldArray } from 'formik';
import {
  TextField as FormikTextField,
  Checkbox as FormikCheckbox,
} from 'formik-mui';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

import { PageSection, PageSectionPaperStyles } from '~/components/page-section';
import { FieldContainer } from '~/components/field-container';
import { EditorModuleFormOptionFieldArray } from './editor-module-form-option-field-array';

// Interface

export interface EditorModuleFormQuestionProps {
  index: number;
  autoFocus?: boolean;
  onDelete?: (index: number) => void;
}

// Styles

const QuestionSectionStyles = styled(PageSection)(({ theme }) => {
  return {
    margin: theme.spacing(3, 0),

    '& + &': {
      marginTop: 0,
    },

    [String(PageSectionPaperStyles)]: {
      padding: theme.spacing(2, 3),
    },
  };
});

const QuestionTbarStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  };
});

const IndexStyles = styled('h6')(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    color: grey['500'],
    margin: 0,
  };
});

const QuestionTbarActionsStyles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'min-content',
    gridGap: theme.spacing(0.5),
    marginLeft: 'auto',
  };
});

// Component
const EditorModuleFormQuestionInner = (
  props: EditorModuleFormQuestionProps
) => {
  const { index, autoFocus, onDelete } = props;

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(index);
    }
  }, [index, onDelete]);

  return (
    <QuestionSectionStyles {...(index === 0 && { title: 'Questions' })}>
      <QuestionTbarStyles>
        <IndexStyles>{index + 1}.</IndexStyles>
        <QuestionTbarActionsStyles>
          <IconButton size="medium" disabled>
            <DragHandleRoundedIcon />
          </IconButton>
          <IconButton size="medium" edge="end" onClick={handleDelete}>
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </QuestionTbarActionsStyles>
      </QuestionTbarStyles>

      <FieldContainer>
        <FastField
          name={`questions[${index}].title`}
          component={FormikTextField}
          label="Title"
          required
          autoFocus={autoFocus}
          fullWidth
          multiline
          minRows={1}
        />
        <FormControlLabel
          control={
            <FastField
              name={`questions[${index}].multipleChoice`}
              type="checkbox"
              component={FormikCheckbox}
            />
          }
          label="Multiple choice question"
        />
        <FieldArray name={`questions[${index}].options`}>
          {(arrayHelpers) => {
            return (
              <EditorModuleFormOptionFieldArray
                index={index}
                {...arrayHelpers}
              />
            );
          }}
        </FieldArray>
      </FieldContainer>
    </QuestionSectionStyles>
  );
};

export const EditorModuleFormQuestion = memo(EditorModuleFormQuestionInner);
