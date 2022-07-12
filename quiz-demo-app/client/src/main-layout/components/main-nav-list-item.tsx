import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
  useResolvedPath,
  matchPath,
} from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// Interfaces

export interface MainNavListItemProps {
  primaryText: string;
  to: RouterLinkProps['to'];
  secondaryText?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
}

// Styles
const RootStyles = styled(ListItemButton)(({ theme }) => {
  return {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridAutoFlow: 'column',
    padding: theme.spacing(0.5, 2),
    borderRadius: theme.shape.borderRadiusLarge,

    '&:not(:last-of-type)': {
      marginBottom: theme.spacing(1),
    },

    '&.Mui-selected': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),

      '.MuiAvatar-root': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
      '.MuiListItemText-primary': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
    },

    '.MuiListItemIcon-root, .MuiListItemAvatar-root': {
      minWidth: 'auto',
    },

    '.MuiListItemText-secondary': {
      fontSize: theme.typography.pxToRem(13),
      lineHeight: 1.2,
      marginTop: theme.spacing(0.25),
    },
  };
}) as typeof ListItemButton;

// Component
export const MainNavListItem = (props: MainNavListItemProps) => {
  const { primaryText, secondaryText, icon, to, ...other } = props;

  const toPath = useResolvedPath(to);
  const location = useLocation();

  const selected = !!matchPath(
    {
      path: toPath.pathname,
      end: false,
    },
    location.pathname
  );

  return (
    <RootStyles component={RouterLink} to={to} selected={selected} {...other}>
      {icon && (
        <ListItemAvatar>
          <Avatar color="primary">{icon}</Avatar>
        </ListItemAvatar>
      )}
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </RootStyles>
  );
};
