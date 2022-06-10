import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import { Logo } from '../logo';
import { MainUserProfileLink } from './main-user-profile-link';
import { MainNavList } from './main-nav-list';

// Interfaces
export interface MainAsideContentProps {}

// Styles
const HeaderStyles = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(3),
  };
});

const UserProfileStyles = styled('div')(({ theme }) => {
  return {
    padding: theme.spacing(1),
  };
});

// Component
export const MainAsideContent = (props: MainAsideContentProps) => {
  return (
    <>
      <HeaderStyles sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Logo size="large" />
      </HeaderStyles>
      <Divider />
      <UserProfileStyles>
        <MainUserProfileLink />
      </UserProfileStyles>
      <Divider />
      <MainNavList />
    </>
  );
};
