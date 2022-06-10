import { styled, alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

// Interfaces

export interface MainNavListProps {}

// Styles

const ListStyles = styled(List)(({ theme }) => {
  return {
    padding: theme.spacing(1),

    '.MuiListItemButton-root': {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridAutoFlow: 'column',
      padding: theme.spacing(0.5, 2),
      borderRadius: theme.shape.borderRadiusLarge,

      '&:not(:last-of-type)': {
        marginBottom: theme.spacing(1),
      },

      '&.Mui-selected': {
        '.MuiAvatar-root': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
          color: theme.palette.primary.main,
        },
        '.MuiListItemText-root': {
          color: theme.palette.primary.main,
        },
      },
    },

    '.MuiListItemIcon-root, .MuiListItemAvatar-root': {
      minWidth: 'auto',
    },

    '.MuiListItemText-secondary': {
      fontSize: theme.typography.pxToRem(13),
      lineHeight: 1.2,
    },
  };
});

// Component

export const MainNavList = (props: MainNavListProps) => {
  return (
    <ListStyles>
      <ListItemButton selected>
        <ListItemAvatar>
          <Avatar color="primary">
            <FolderCopyOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Explorer" secondary="Passing quiz modules" />
      </ListItemButton>

      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <ModeEditOutlineOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Editor"
          secondary="Creating and modify modules"
        />
      </ListItemButton>
    </ListStyles>
  );
};
