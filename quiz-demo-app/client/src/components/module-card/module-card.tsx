import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';

// Interfaces
export interface ModulCardProps {
  children?: React.ReactNode;
  to?: string;
}

// Styles
const ModuleCardStyles = styled((props: PaperProps) => {
  return <Paper elevation={1} {...props} />;
})(({ theme }) => {
  return {
    position: 'relative',
    display: 'grid',
    gridAutoFlow: 'row',
    gridGap: theme.spacing(1.5),
    padding: theme.spacing(3),
    textDecoration: 'none',
    borderRadius: theme.shape.borderRadiusLarge,
    overflow: 'hidden',

    '&::after': {
      position: 'absolute',
      content: '" "',
      left: 0,
      right: 0,
      top: 0,
      height: 5,
      backgroundColor: theme.palette.primary.main,
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
      }),
    },

    '&:hover, &:focus': {
      outline: 0,

      '&::after': {
        opacity: 1,
      },
    },
  };
}) as typeof Paper;

export const ModuleCard = (props: ModulCardProps) => {
  const { to, children } = props;

  return (
    <ModuleCardStyles {...(to && { component: RouterLink, to })}>
      {children}
    </ModuleCardStyles>
  );
};
