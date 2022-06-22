import _truncate from 'lodash/truncate';
import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface ModuleCardBodyProps extends TypographyProps {
  children?: string;
  maxLength?: number;
}

export const ModuleCardBodyStyles = styled((props: TypographyProps) => {
  return <Typography variant="body2" {...props} />;
})(() => {
  return {
    lineHeight: 1.35,
  };
});

export const ModuleCardBody = (props: ModuleCardBodyProps) => {
  const { children, maxLength, ...other } = props;

  const trimmedContent = maxLength
    ? _truncate(children, {
        length: maxLength,
        separator: ' ',
        omission: ' ...',
      })
    : children;

  return (
    <ModuleCardBodyStyles {...other}>{trimmedContent}</ModuleCardBodyStyles>
  );
};
