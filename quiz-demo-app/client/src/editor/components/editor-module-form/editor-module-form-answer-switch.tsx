import { useCallback, useEffect, useMemo, useRef } from 'react';

import { useFormikContext } from 'formik';
import Switch from '@mui/material/Switch';
import { useEventCallback } from '@mui/material';

import { EditorModuleFormValues } from './editor-module-form.helpers';

// Interface
export interface EditorModuleFormAnswerSwitchProps {
  index: number;
  parentIndex: number;
}

// Component
export const EditorModuleFormAnswerSwitch = (props: EditorModuleFormAnswerSwitchProps) => {
  const { index, parentIndex } = props;
  const shouldResetRef = useRef(false);

  const getBaseName = useCallback(
    (optionIndex: number) => {
      return `questions[${parentIndex}].options[${optionIndex}]`;
    },
    [parentIndex]
  );

  const { values, setFieldValue } = useFormikContext<EditorModuleFormValues>();

  const parentQuestion = values.questions[parentIndex];
  const currentOption = parentQuestion.options[index];

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
    if (shouldResetRef.current) {
      setFieldValue(`${getBaseName(index)}.isAnswer`, false, false);
    }

    return () => {
      shouldResetRef.current = true;
    };
  }, [parentQuestion.multipleChoice, getBaseName, setFieldValue, index]);

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
