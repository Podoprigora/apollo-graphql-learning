import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { FieldContainer } from '~/components/field-container';

// Interfaces
export interface EditorModuleFormOptionProps {
  index: number;
}

// Styles
const IndexStyles = styled('h6')(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    color: grey['500'],
    margin: 0,
  };
});

const ActionsStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  };
});

// Component
export const EditorModuleFormOption = (props: EditorModuleFormOptionProps) => {
  const { index } = props;

  return (
    <FieldContainer direction="row" alignItems="center">
      <IndexStyles>{index + 1}.</IndexStyles>

      <TextField label="Title" required fullWidth multiline minRows={1} />
      <Switch color="primary" defaultChecked />

      <ActionsStyles>
        <IconButton size="medium" disabled>
          <DragHandleRoundedIcon />
        </IconButton>
        <IconButton size="medium" edge="end">
          <DeleteOutlineRoundedIcon />
        </IconButton>
      </ActionsStyles>
    </FieldContainer>
  );
};
