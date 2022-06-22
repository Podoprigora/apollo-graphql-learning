import { styled } from '@mui/material/styles';

import { ModuleCard } from '../module-card';

// Interfaces
export interface ModuleListProps {}

// Styles
const ModuleListRootStyles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gridGap: theme.spacing(2),
  };
});

export const ModuleList = (props: ModuleListProps) => {
  const testTo = '/editor/new';

  return (
    <ModuleListRootStyles>
      <ModuleCard to={testTo} />
      <ModuleCard to={testTo} />
      <ModuleCard to={testTo} />
      <ModuleCard to={testTo} />
    </ModuleListRootStyles>
  );
};
