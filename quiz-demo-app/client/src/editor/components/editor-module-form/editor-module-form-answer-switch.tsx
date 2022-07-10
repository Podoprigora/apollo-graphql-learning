import { useCallback, useEffect, useMemo } from 'react';

import { useFormikContext, getIn } from 'formik';
import Switch from '@mui/material/Switch';
import { useEventCallback } from '@mui/material';

import { EditorModuleFormValues } from './editor-module-form.helpers';

// Interface
export interface EditorModuleFormAnswerSwitchProps {
  index: number;
  parentIndex: number;
}

// Component
export const EditorModuleFormAnswerSwitch = (
  props: EditorModuleFormAnswerSwitchProps
) => {
  const { index, parentIndex } = props;

  const getBaseName = useCallback(
    (optionIndex: number) => {
      return `questions[${parentIndex}].options[${optionIndex}]`;
    },
    [parentIndex]
  );

  const { values, initialValues, setFieldValue, touched } =
    useFormikContext<EditorModuleFormValues>();

  const parentQuestion = values.questions[parentIndex];
  const currentOption = parentQuestion.options[index];
  const isTouchedMultipleChoice = getIn(
    touched,
    `questions[${parentIndex}].multipleChoice`
  );
  const isChangedMultipleChoice =
    getIn(initialValues, `questions[${parentIndex}].multipleChoice`) !==
    getIn(values, `questions[${parentIndex}].multipleChoice`);
  const shouldReset = isChangedMultipleChoice || isTouchedMultipleChoice;

  // Handlers
  const resetSwitches = (omitIndex?: number) => {
    parentQuestion.options.forEach((_, i) => {
      if (i !== omitIndex) {
        setFieldValue(`${getBaseName(i)}.isAnswer`, false, false);
      }
    });
  };

  const handleChangeIsAnswer = useEventCallback(
    (ev: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setFieldValue(`${getBaseName(index)}.isAnswer`, checked, false);

      if (!parentQuestion.multipleChoice) {
        resetSwitches(index);
      }
    }
  );

  // Effects
  useEffect(() => {
    if (shouldReset) {
      setFieldValue(`${getBaseName(index)}.isAnswer`, false, false);
    }
  }, [
    shouldReset,
    parentQuestion.multipleChoice,
    getBaseName,
    setFieldValue,
    index,
  ]);

  // Render
  return useMemo(() => {
    return (
      <Switch
        type="checkbox"
        color="primary"
        checked={currentOption.isAnswer}
        onChange={handleChangeIsAnswer}
      />
    );
  }, [currentOption.isAnswer, handleChangeIsAnswer]);
};
