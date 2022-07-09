import { useCallback, useMemo, useState } from 'react';

import { FieldArrayRenderProps } from 'formik';

import { PageSection } from '~/components/page-section';
import {
  EditorModuleFormValues,
  newQuestionPlaceholderData,
} from './editor-module-form.helpers';
import { EditorModuleFormAddQuestionButton } from './editor-module-form-add-question-button';
import { EditorModuleFormQuestion } from './editor-module-form-question';
import { EditorModuleFormErrorMessage } from './editor-module-form-error-message';

export const EditorModuleFormQuestionFieldArray = (
  props: FieldArrayRenderProps
) => {
  const { push, remove, form } = props;
  const [addedManually, setAddedManually] = useState(false);

  const handleAddQuestion = useCallback(() => {
    push(newQuestionPlaceholderData);

    setAddedManually(true);

    setTimeout(() => {
      document.documentElement.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 250);
  }, [push]);

  const handleDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const items = useMemo(() => {
    return (form.values as EditorModuleFormValues).questions;
  }, [form.values]);

  return (
    <>
      {items.map((_, index) => {
        return (
          <EditorModuleFormQuestion
            key={index}
            index={index}
            autoFocus={addedManually && index === items.length - 1}
            onDelete={handleDelete}
          />
        );
      })}
      <EditorModuleFormErrorMessage
        name="questions"
        containerComponent={PageSection}
      />
      <EditorModuleFormAddQuestionButton onClick={handleAddQuestion} />
    </>
  );
};
