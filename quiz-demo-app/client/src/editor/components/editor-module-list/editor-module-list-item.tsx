import React from 'react';

import {
  ModuleCard,
  ModuleCardActionBar,
  ModuleCardBody,
  ModuleCardHeader,
} from '~/components/module-card';

// Interfaces
export interface EditorModuleListItemData {
  id: string | number;
  title: string;
  description?: string;
  questionCount?: number;
  user?: {
    imageUrl?: string;
    firstName?: string;
    lastName?: string;
  };
}

export interface EditorModuleListItemProps {
  data: EditorModuleListItemData;
  to?: string;
  onDelete?: (
    ev: React.MouseEvent<HTMLButtonElement>,
    data: EditorModuleListItemData
  ) => void;
}

const getQuestionText = (count = 0) => {
  if (!count) {
    return '';
  }

  return count > 1 ? `${count} questions` : `{$count} question`;
};

// Component
export const EditorModuleListItem = (props: EditorModuleListItemProps) => {
  const { data, to } = props;
  const { title, description, questionCount, user } = data;

  const questionText = getQuestionText(questionCount);
  const userFullname = [user?.firstName, user?.lastName].join(' ');

  return (
    <ModuleCard to={to}>
      <ModuleCardHeader title={title} subtitle={questionText} />
      {description && (
        <ModuleCardBody maxLength={160}>{description}</ModuleCardBody>
      )}
      <ModuleCardActionBar title={userFullname} avatarUrl={user?.imageUrl} />
    </ModuleCard>
  );
};
