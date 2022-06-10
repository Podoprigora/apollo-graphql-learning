import { styled } from '@mui/material/styles';

export interface LogoProps {
  size?: 'small' | 'large';
}

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
  return <LogoStyles {...props}>Quiz Demo</LogoStyles>;
};
