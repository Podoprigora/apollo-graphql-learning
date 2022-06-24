import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';

import { Logo } from '~/components/logo';
import { MainAside } from './main-aside';
import { MainTopBar } from './main-top-bar';
import {
  MainUserProfileLink,
  MainUserProfileLinkProps,
} from './main-user-profile-link';
import { MainNavListItem } from './main-nav-list-item';

// Interfaces
export interface MainLayoutProps {
  userProfileData: MainUserProfileLinkProps['data'];
}

// Styles
const RootStyles = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  width: '100%',
  height: '100%',
});

const MainStyles = styled('main')({
  flex: 1,
  position: 'relative',
});

const ContentStyles = styled('section')(({ theme }) => {
  return {
    padding: theme.spacing(7.5, 1),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 0),
    },
  };
});

const AsideHeaderStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(3),
  };
});

const AsideUserProfileStyles = styled('div')(({ theme }) => {
  return {
    padding: theme.spacing(1),
  };
});

const AsideNavListStyles = styled(List)(({ theme }) => {
  return {
    padding: theme.spacing(1),
  };
});

// Component
export const MainLayout = (props: MainLayoutProps) => {
  const { userProfileData } = props;

  return (
    <RootStyles>
      <MainAside>
        <AsideHeaderStyles sx={{ display: { xs: 'none', md: 'block' } }}>
          <Logo size="large" to="/" />
        </AsideHeaderStyles>
        <Divider />
        <AsideUserProfileStyles>
          <MainUserProfileLink data={userProfileData} />
        </AsideUserProfileStyles>
        <Divider />
        <AsideNavListStyles>
          <MainNavListItem
            primaryText="Explorer"
            secondaryText="Passing quiz modules"
            to="/explorer"
            icon={<FolderCopyOutlinedIcon />}
          />
          <MainNavListItem
            primaryText="Editor"
            secondaryText="Creating and modify modules"
            to="/editor"
            icon={<ModeEditOutlineOutlinedIcon />}
          />
        </AsideNavListStyles>
      </MainAside>

      <MainStyles>
        <MainTopBar />
        <Container>
          <ContentStyles>
            <Toolbar sx={{ display: { md: 'none' } }} />
            <Outlet />
          </ContentStyles>
        </Container>
      </MainStyles>
    </RootStyles>
  );
};
