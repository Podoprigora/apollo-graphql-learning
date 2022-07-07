import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

// Interfaces
export interface FieldContainerProps extends StackProps {}

// Styles
export const FieldContainerStyles = styled((props: FieldContainerProps) => (
  <Stack direction="column" gap={2} {...props} />
))(({ theme }) => {
  return {};
});

// Component
export const FieldContainer = (props: FieldContainerProps) => {
  return <FieldContainerStyles {...props} />;
};
