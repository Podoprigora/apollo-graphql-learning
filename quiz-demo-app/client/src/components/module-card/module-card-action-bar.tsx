import React, { useCallback } from 'react';

import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { ModuleCardSubtitle } from './module-card-subtitle';

// Interfaces
export interface ModuleCardActionBarProps {
  title: string;
  avatarUrl?: string;
  action?: React.ReactElement;
}

interface ModuleCardActionBarActionsStylesComponent
  extends React.FC<{ component?: React.ReactElement }> {}

// Styles
const ModuleCardActionBarStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    color: grey['600'],
    overflow: 'hidden',
  };
});

const ModuleCardActionBarAvatarStyles = styled((props: AvatarProps) => {
  return <Avatar variant="circular" {...props} />;
})(({ theme }) => {
  return {
    width: 24,
    height: 24,
    marginRight: theme.spacing(1.5),
  };
});

const ModuleCardActionBarTitleStyles = styled(ModuleCardSubtitle)(() => {
  return {
    flex: 1,
  };
});

const ModuleCardActionBarActionStyles =
  styled<ModuleCardActionBarActionsStylesComponent>((props) => {
    const { component } = props;

    return component || null;
  })(({ theme }) => {
    return {
      flex: 'none',
      marginLeft: theme.spacing(1.5),
    };
  });

// Component
export const ModuleCardActionBar = (props: ModuleCardActionBarProps) => {
  const { avatarUrl, title, action } = props;

  const handleActionClick = useCallback(
    (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      if (action?.props.onClick) {
        action.props.onClick(ev);
      }
    },
    [action]
  );

  const actionElement = React.isValidElement(action)
    ? React.cloneElement(action, {
        onClick: handleActionClick,
      })
    : undefined;

  return (
    <ModuleCardActionBarStyles>
      {avatarUrl && <ModuleCardActionBarAvatarStyles src={avatarUrl} />}
      <ModuleCardActionBarTitleStyles noWrap>
        {title}
      </ModuleCardActionBarTitleStyles>
      <ModuleCardActionBarActionStyles component={actionElement} />
    </ModuleCardActionBarStyles>
  );
};
