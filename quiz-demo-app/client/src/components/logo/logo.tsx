import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export interface LogoProps {
  size?: 'small' | 'large';
  to?: string;
}

const LinkStyles = styled(RouterLink)(({ theme }) => {
  return {
    textDecoration: 'none',
  };
});

const LogoStyles = styled('span')<LogoProps>(({ theme, size }) => {
  const fontSize =
    size === 'small'
      ? theme.typography.pxToRem(20)
      : theme.typography.pxToRem(30);

  return {
    fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    color: theme.palette.primary.main,
  };
});

export const Logo = (props: LogoProps) => {
  const { to, ...other } = props;

  const contentElement = <LogoStyles {...other}>Quiz Demo</LogoStyles>;
  const parsedTo = to?.trim();

  if (parsedTo && parsedTo.length > 0) {
    return <LinkStyles to={parsedTo}>{contentElement}</LinkStyles>;
  }

  return contentElement;
};
