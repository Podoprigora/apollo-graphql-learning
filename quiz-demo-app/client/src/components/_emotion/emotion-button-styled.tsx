import { useEffect, useRef } from 'react';

import { styled, css } from '@mui/material/styles';

interface RootStyleProps {
  ownerState?: {
    selected?: boolean;
  };
}

interface WrapStyleProps {
  ownerState?: {
    focused?: boolean;
  };
}

const WrapStyle = styled('div')<WrapStyleProps>(({ ownerState }) => {
  const { focused } = ownerState || {};

  const focusedStyle =
    focused &&
    css({
      '&:focus': {
        border: '.1rem dashed red',
        outline: 'none',
      },
    });

  const baseStyle = css({
    color: 'green',
  });

  return [baseStyle, focusedStyle];
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
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.focus();
    }
  }, []);

  return (
    <RootStyle>
      <WrapStyle tabIndex={0} ownerState={{ focused: true }} ref={wrapRef}>
        Hover to change the color
      </WrapStyle>
    </RootStyle>
  );
};
