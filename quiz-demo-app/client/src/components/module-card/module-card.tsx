import React, { useCallback } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ModuleCardHeader } from './module-card-header';
import { ModuleCardBody } from './module-card-body';

// Interfaces
export interface ModuleCardData {
  id: string | number;
  title: string;
  description?: string;
}

export interface ModulCardProps {
  data?: ModuleCardData;
  to?: string;
}

// Styles
const ModuleCardRootStyles = styled((props: PaperProps) => {
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

const ModuleCardSubtitleStyles = styled((props: TypographyProps) => {
  return <Typography variant="subtitle2" {...props} />;
})(() => {
  return {
    color: grey['600'],
  };
});

const ModuleCardUserStyles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr min-content',
    alignItems: 'center',
    gridGap: theme.spacing(1.5),
    color: grey['600'],
  };
});

const ModuleCardActionStyles = styled((props: IconButtonProps) => {
  return <IconButton {...props} />;
})(({ theme }) => {
  return {};
});

export const ModuleCard = (props: ModulCardProps) => {
  const { to } = props;

  const handleActionClick = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      ev.preventDefault();
    },
    []
  );

  return (
    <ModuleCardRootStyles {...(to && { component: RouterLink, to })}>
      <ModuleCardHeader
        title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        subtitle="20 questions"
      />
      <ModuleCardBody maxLength={160}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi
        labore accusantium reiciendis culpa hic illum ratione commodi sequi
        consectetur perferendis temporibus quasi at nulla! Nisi aspernatur iusto
        incidunt nostrum!
      </ModuleCardBody>

      <ModuleCardUserStyles>
        <Avatar
          sx={{ width: 24, height: 24 }}
          variant="circular"
          src="https://randomuser.me/api/portraits/med/men/15.jpg"
        />
        <ModuleCardSubtitleStyles noWrap>Demo User</ModuleCardSubtitleStyles>
        <ModuleCardActionStyles onClick={handleActionClick}>
          <MoreVertIcon />
        </ModuleCardActionStyles>
      </ModuleCardUserStyles>
    </ModuleCardRootStyles>
  );
};
