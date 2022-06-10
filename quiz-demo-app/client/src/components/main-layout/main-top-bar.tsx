import { useMemo } from 'react';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { Logo } from '../logo';
import { useMainLayout } from './main-context';

// Interfaces
export interface MainTopBarProps {}

// Styles
const RootStyles = styled(AppBar)(({ theme, elevation }) => {
  return {
    backgroundColor: theme.palette.background.default,
    ...(!elevation && {
      borderBottom: `1px solid ${theme.palette.divider}`,
    }),
  };
});

const ToolbarStyles = styled(Toolbar)(({ theme }) => {
  return {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: theme.spacing(1.5),
    justifyContent: 'start',
  };
});

// Component
export const MainTopBar = (props: MainTopBarProps) => {
  const { openMobileNav } = useMainLayout();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const elevation = useMemo(() => {
    return scrollTrigger ? 4 : 0;
  }, [scrollTrigger]);

  return (
    <RootStyles elevation={elevation} sx={{ display: { lg: 'none' } }}>
      <ToolbarStyles>
        <IconButton edge="start" onClick={openMobileNav}>
          <MenuRoundedIcon />
        </IconButton>
        <Logo size="small" />
      </ToolbarStyles>
    </RootStyles>
  );
};
