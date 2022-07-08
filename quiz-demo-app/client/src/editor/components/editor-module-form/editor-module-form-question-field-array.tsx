import { useCallback, useMemo, useState } from 'react';

import { FieldArrayRenderProps } from 'formik';

import type { Values } from './editor-module-form';
import { EditorModuleFormAddQuestionButton } from './editor-module-form-add-question-button';
import { EditorModuleFormQuestion } from './editor-module-form-question';

export const EditorModuleFormQuestionFieldArray = (
  props: FieldArrayRenderProps
) => {
  const { push, remove, form } = props;
  const [addedManually, setAddedManually] = useState(false);

  const handleAddQuestion = useCallback(() => {
    push({
      title: '',
      multipleChoice: true,
      options: [],
    });

    setAddedManually(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 166);
  }, [push]);

  const handleDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const items = useMemo(() => {
    return (form.values as Values).questions;
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

      <EditorModuleFormAddQuestionButton onClick={handleAddQuestion} />
    </>
  );
};
