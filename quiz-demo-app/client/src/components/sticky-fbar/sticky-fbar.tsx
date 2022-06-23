import { useEffect, useRef, useState } from 'react';

import _throttle from 'lodash/throttle';
import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

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
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(-3),
      padding: theme.spacing(3, 0),
      backgroundColor: theme.palette.background.default,

      ...(sticky && { boxShadow: '0 -6px 4px -3px rgba(0,0,0, 0.12)' }),
    };
  }
);

const target = typeof window !== 'undefined' ? window : null;

// Component
export const StickyFbar = (props: StickyFbarProps) => {
  const { children, ...other } = props;
  const nodeRef = useRef<HTMLDivElement>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = _throttle(() => {
      if (nodeRef.current) {
        const { bottom } = nodeRef.current?.getBoundingClientRect();

        setScrolledToBottom(target?.innerHeight === bottom);
      }
    }, 200);

    handleScroll();

    target?.addEventListener('scroll', handleScroll);

    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StickyFbarStyles ref={nodeRef} ownerState={{ sticky: scrolledToBottom }}>
      <Stack
        gap={3}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        {...other}
      >
        {children}
      </Stack>
    </StickyFbarStyles>
  );
};
