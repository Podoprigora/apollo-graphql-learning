import React, { useCallback } from 'react';

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

// Interfaces
export interface EditorModuleListItemActionsProps {
  onDelete?: (ev: React.SyntheticEvent) => void;
}

// Component
export const EditorModuleListItemActions = (props: any) => {
  const { onDelete } = props;

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'EditorModuleListItemActionsMenu',
  });

  const handleMenuClose = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      popupState.close();
    },
    [popupState]
  );

  const handleDelete = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      if (onDelete) {
        onDelete(ev);
      }
    },
    [onDelete]
  );

  const handleAnchorClick = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      popupState.open(ev);
    },
    [popupState]
  );

  return (
    <>
      <IconButton
        {...bindTrigger(popupState)}
        onClick={handleAnchorClick}
        onTouchStart={handleAnchorClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        {...bindMenu(popupState)}
        hideBackdrop
        PaperProps={{
          elevation: 4,
          sx: { width: 220 },
        }}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
      >
        <MenuItem sx={{ color: 'error.light' }} onClick={handleDelete}>
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DeleteOutlineRoundedIcon />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
