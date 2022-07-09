import { memo, useCallback, useEffect, useRef } from 'react';

import { FastField } from 'formik';
import { TextField as FormikTextField } from 'formik-mui';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { FieldContainer } from '~/components/field-container';
import { EditorModuleFormAnswerSwitch } from './editor-module-form-answer-switch';

// Interfaces
export interface EditorModuleFormOptionProps {
  index: number;
  parentIndex: number;
  autoFocus?: boolean;
  onDelete?: (index: number) => void;
}

// Styles
const IndexStyles = styled('h6')(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    color: grey['500'],
    margin: 0,
    minWidth: 20,
  };
});

// Component
const EditorModuleFormOptionInner = (props: EditorModuleFormOptionProps) => {
  const { index, parentIndex, autoFocus = false, onDelete } = props;
  const titleNodeRef = useRef<HTMLDivElement>(null);

  // Handlers
  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete(index);
    }
  }, [index, onDelete]);

  // Effects
  useEffect(() => {
    if (titleNodeRef.current && autoFocus) {
      titleNodeRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [autoFocus]);

  // Render
  return (
    <FieldContainer direction="row" alignItems="center">
      <IndexStyles>{index + 1}.</IndexStyles>
      <FastField
        component={FormikTextField}
        name={`questions[${parentIndex}].options[${index}].title`}
        autoFocus={autoFocus}
        label="title"
        required
        fullWidth
        multiline
        minRows={1}
        inputRef={titleNodeRef}
      />

      <EditorModuleFormAnswerSwitch index={index} parentIndex={parentIndex} />

      <Stack direction="row" alignItems="center" spacing={0}>
        <IconButton size="medium" disabled sx={{ mr: 0.5 }}>
          <DragHandleRoundedIcon />
        </IconButton>
        <IconButton size="medium" edge="end" onClick={handleDelete}>
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </Stack>
    </FieldContainer>
  );
};

export const EditorModuleFormOption = memo(EditorModuleFormOptionInner);
