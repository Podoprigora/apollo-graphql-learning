import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

// Interfaces
export interface ModuleListProps {
  children?: React.ReactNode;
  loading?: boolean;
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

const CircularProgressContainerStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6, 0),
  };
});

// Component
export const ModuleList = (props: ModuleListProps) => {
  const { children, loading } = props;

  if (loading) {
    return (
      <CircularProgressContainerStyles>
        <CircularProgress color="primary" size={42} thickness={2.8} />
      </CircularProgressContainerStyles>
    );
  }

  return <ModuleListStyles>{children}</ModuleListStyles>;
};
