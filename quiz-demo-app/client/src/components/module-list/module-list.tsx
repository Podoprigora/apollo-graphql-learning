import { styled } from '@mui/material/styles';

// Interfaces
export interface ModuleListProps {
  children?: React.ReactNode;
}

// Styles
const ModuleListStyles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(370px, 100%), 1fr))',
    gridGap: theme.spacing(2),

    '& > :only-child': {
      maxWidth: 450,
    },
  };
});

export const ModuleList = (props: ModuleListProps) => {
  const { children } = props;

  return <ModuleListStyles>{children}</ModuleListStyles>;
};
