import { styled, css } from '@mui/material/styles';

interface RootStyleProps {
  ownerState?: {
    selected: boolean;
  };
}

const WrapStyle = styled('div')({
  color: 'green',
});

const RootStyle = styled('div')<RootStyleProps>(({ theme, ownerState }) => {
  const { selected } = ownerState || {};

  const selectedStyles =
    selected &&
    css({
      backgroundColor: 'blue',
      color: '#fff',

      '&:hover': {
        opacity: 0.4,
      },

      [String(WrapStyle)]: {
        color: 'inherit',
      },
    });

  const baseStyles = css({
    display: 'inline-block',
    padding: '.4rem',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#dedede',
    borderRadius: '.5rem',
    cursor: 'pointer',

    '&:hover': {
      color: '#fff',

      [String(WrapStyle)]: {
        color: 'inherit',
      },
    },
  });

  return [baseStyles, selectedStyles];
});

export const EmotionButtonStyled = () => {
  return (
    <RootStyle ownerState={{ selected: true }}>
      <WrapStyle>Hover to change the color</WrapStyle>
    </RootStyle>
  );
};
