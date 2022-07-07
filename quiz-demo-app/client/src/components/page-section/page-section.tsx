import React from 'react';

import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { PageSectionPaper, PageSectionPaperProps } from './page-section-paper';
import { PageSectionTitle } from './page-section-title';

// Interfaces
export interface PageSectionProps extends BoxProps {
  title?: string;
  PaperProps?: PageSectionPaperProps;
  children?: React.ReactNode;
}

// Styles
export const PageSectionStyles = styled(Box)(({ theme }) => {
  return {
    '& + &': {
      marginTop: theme.spacing(3),
    },
  };
});

// Component
export const PageSection = (props: PageSectionProps) => {
  const { title, PaperProps, children, ...other } = props;

  return (
    <PageSectionStyles {...other}>
      {title && <PageSectionTitle>{title}</PageSectionTitle>}
      {children && (
        <PageSectionPaper {...PaperProps}>{children}</PageSectionPaper>
      )}
    </PageSectionStyles>
  );
};
