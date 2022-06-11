import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button, { ButtonProps } from '@mui/material/Button';

export interface RouterButtonProps extends ButtonProps {
  LinkProps: RouterLinkProps;
}

export const RouterButton = (props: RouterButtonProps) => {
  const { LinkProps, children, ...other } = props;
  const { to, ...otherLinkProps } = LinkProps;

  return (
    <Button
      {...(other as object)}
      {...(otherLinkProps as object)}
      component={RouterLink}
      to={to}
    >
      {children}
    </Button>
  );
};
