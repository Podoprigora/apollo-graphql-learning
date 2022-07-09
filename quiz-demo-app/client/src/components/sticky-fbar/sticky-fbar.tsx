import { useEffect, useRef, useState } from 'react';

import _throttle from 'lodash/throttle';
import { styled, Theme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// Interfaces
export interface StickyFbarProps extends StackProps {}

interface StickyFbarStylesProps {
  ownerState: {
    sticky: boolean;
  };
}

// Styles
const StickyFbarStyles = styled('div')<StickyFbarStylesProps>(
  ({ theme, ownerState }) => {
    const { sticky } = ownerState;

    return {
      position: 'sticky',
      bottom: 0,
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(-1.5),
      padding: theme.spacing(3, 0),
      backgroundColor: theme.palette.background.default,

      ...(sticky && {
        boxShadow: '0 -4px 3px -2px rgba(0,0,0, 0.12)',
        zIndex: theme.zIndex.appBar,
      }),
    };
  }
);

const target = typeof window !== 'undefined' ? window : null;

// Component
export const StickyFbar = (props: StickyFbarProps) => {
  const { children, ...other } = props;

  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isPhone = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.down('sm');
  });

  useEffect(() => {
    const handleScroll = _throttle(() => {
      if (nodeRef.current) {
        const { bottom } = nodeRef.current?.getBoundingClientRect();

        setScrolledToBottom(target?.innerHeight === bottom);
      }
    }, 166);

    handleScroll();

    target?.addEventListener('scroll', handleScroll);

    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StickyFbarStyles ref={nodeRef} ownerState={{ sticky: scrolledToBottom }}>
      <Stack
        {...(isPhone
          ? {
              gap: 1,
              direction: 'column-reverse',
              justifyContent: 'stretch',
            }
          : {
              gap: 3,
              direction: 'row',
              justifyContent: 'flex-end',
            })}
        {...other}
      >
        {children}
      </Stack>
    </StickyFbarStyles>
  );
};
