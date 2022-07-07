import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import AddIcon from '@mui/icons-material/Add';

import { PageHeader } from '~/components/page-header';
import { StickyFbar } from '~/components/sticky-fbar';
import { PageSection, PageSectionSubtitle } from '~/components/page-section';
import { FieldContainer } from '~/components/field-container';

// Interfaces
export interface EditorModuleFormProps {
  title?: string;
  initialData?: Record<string, unknown>;
}

// Styles
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
export const EditorModuleForm = (props: EditorModuleFormProps) => {
  const { title } = props;

  return (
    <>
      {title && <PageHeader title={title} />}

      <PageSection>
        <FieldContainer>
          <TextField label="Title" required fullWidth />
          <TextField label="Description" fullWidth multiline minRows={4} />
        </FieldContainer>
      </PageSection>

      <PageSection title="Questions">
        <QuestionTbarStyles>
          <IndexStyles>1.</IndexStyles>
          <QuestionTbarActionsStyles>
            <IconButton size="medium" disabled>
              <DragHandleRoundedIcon />
            </IconButton>
            <IconButton size="medium" edge="end">
              <DeleteOutlineRoundedIcon />
            </IconButton>
          </QuestionTbarActionsStyles>
        </QuestionTbarStyles>

        <FieldContainer>
          <TextField label="Title" required fullWidth multiline minRows={1} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Multiple choice question"
          />
        </FieldContainer>

        <PageSectionSubtitle>Options</PageSectionSubtitle>

        <FieldContainer>
          <FieldContainer direction="row" alignItems="center">
            <IndexStyles>1.</IndexStyles>
            <TextField label="Title" required fullWidth multiline minRows={1} />
            <Switch color="primary" defaultChecked />

            <QuestionTbarActionsStyles>
              <IconButton size="medium" disabled>
                <DragHandleRoundedIcon />
              </IconButton>
              <IconButton size="medium" edge="end">
                <DeleteOutlineRoundedIcon />
              </IconButton>
            </QuestionTbarActionsStyles>
          </FieldContainer>
          <Button
            variant="text"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ alignSelf: 'center' }}
          >
            Add Option
          </Button>
        </FieldContainer>
      </PageSection>

      <PageSection PaperProps={{ dense: true }}>
        <FieldContainer direction="row" justifyContent="center">
          <Button variant="text" color="primary" startIcon={<AddIcon />}>
            Add Question
          </Button>
        </FieldContainer>
      </PageSection>

      <StickyFbar>
        <Button variant="text" color="inherit">
          Back
        </Button>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </StickyFbar>
    </>
  );
};
