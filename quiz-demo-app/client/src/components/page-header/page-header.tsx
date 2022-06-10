import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Interfaces
export interface PageHeaderProps
  extends React.ComponentPropsWithoutRef<'header'> {
  title?: string;
  action?: React.ReactElement;
}

// Styles
const HeaderStyles = styled('header')(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: '1fr max-content',
    gridGap: theme.spacing(2),
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  };
});

// Component
export const PageHeader = (props: PageHeaderProps) => {
  const { title, action, ...other } = props;

  return (
    <HeaderStyles {...other}>
      {title && (
        <Typography variant="h5" noWrap>
          {title}
        </Typography>
      )}
      {action}
    </HeaderStyles>
  );
};
