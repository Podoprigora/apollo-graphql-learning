import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

// Interfaces

export interface MainUserProfileLinkData {
  id: string;
  primaryText: string;
  secondaryText?: string;
  avatarUrl?: string;
}

export interface MainUserProfileLinkProps {
  data?: MainUserProfileLinkData;
}

// Styles

const RootStyles = styled(Button)(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridAutoFlow: 'column',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    textDecoration: 'none',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadiusLarge,
    pointerEvents: 'none',
  };
}) as typeof Button;

const AvatarStyles = styled(Avatar)(({ theme }) => {
  return {
    width: 40,
    height: 40,
  };
});

const TextContainterStyles = styled('div')(({ theme }) => {
  return {
    gridColumn: 2,
    overflow: 'hidden',
  };
});

const PrimaryTextStyles = styled(Typography)(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1,
  };
}) as typeof Typography;

const SecondaryTextStyles = styled(Typography)(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5),
  };
}) as typeof Typography;

// Component
export const MainUserProfileLink = (props: MainUserProfileLinkProps) => {
  const { data } = props;
  const { avatarUrl, primaryText, secondaryText } = data || {};

  return (
    <RootStyles component="a">
      {avatarUrl && <AvatarStyles src={avatarUrl} variant="circular" />}
      <TextContainterStyles>
        <PrimaryTextStyles component="div" noWrap>
          {primaryText}
        </PrimaryTextStyles>
        {secondaryText && (
          <SecondaryTextStyles component="div" noWrap>
            demo-user@mail.com
          </SecondaryTextStyles>
        )}
      </TextContainterStyles>
    </RootStyles>
  );
};
