import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

// Interfaces
export interface EmptyProps {
  title: string;
  icon?: React.ReactElement;
  disableIcon?: boolean;
}

// Styles
const EmptyStyles = styled('div')(({ theme }) => {
  return {
    display: 'grid',
    gridAutoFlow: 'row',
    justifyItems: 'center',
    gridGap: theme.spacing(1),
    padding: theme.spacing(6, 0),
    color: theme.palette.text.secondary,
  };
});

const IconStyles = styled(Icon)(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(48),

    '& .MuiSvgIcon-root': {
      fontSize: 'inherit',
    },
  };
});

const TitleStyles = styled(Typography)(({ theme }) => {
  return {
    fontWeight: theme.typography.fontWeightBold,
  };
});

// Component
export const Empty = (props: EmptyProps) => {
  const { title, icon = <InboxOutlinedIcon />, disableIcon } = props;

  return (
    <EmptyStyles>
      {!disableIcon && <IconStyles>{icon}</IconStyles>}
      <TitleStyles>{title}</TitleStyles>
    </EmptyStyles>
  );
};
