import { ErrorMessage } from 'formik';
import { styled } from '@mui/material/styles';
import FormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';

// Interface
export interface EditorModuleFormErrorMessageProps {
  name: string;
  containerComponent?: React.ElementType;
}

// Styles
export const HelperTextStyles = styled((props: FormHelperTextProps) => (
  <FormHelperText error {...props} />
))(() => {
  return {
    marginTop: 0,
  };
});

// Component
export const EditorModuleFormErrorMessage = (
  props: EditorModuleFormErrorMessageProps
) => {
  const { name, containerComponent: Container } = props;

  return (
    <ErrorMessage name={name}>
      {(errorMessage: string) => {
        if (typeof errorMessage === 'string') {
          const textElement = (
            <HelperTextStyles>{errorMessage}</HelperTextStyles>
          );

          return Container ? <Container>{textElement}</Container> : textElement;
        }

        return null;
      }}
    </ErrorMessage>
  );
};
