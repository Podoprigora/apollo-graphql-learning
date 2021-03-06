import React, { useCallback } from 'react';

import { ModuleCard, ModuleCardActionBar, ModuleCardBody, ModuleCardHeader } from '~/components/module-card';
import { EditorModuleListItemActions } from './editor-module-list-item-actions';

// Interfaces
export interface EditorModuleListItemData {
  id: string | number;
  title: string;
  description?: string | null;
  questionsTotal?: number | null;
  userInfo?: {
    fullName?: string | null;
    pictureUrl?: string | null;
  } | null;
}

export interface EditorModuleListItemProps {
  data: EditorModuleListItemData;
  to?: string;
  onDelete?: (ev: React.MouseEvent<HTMLButtonElement>, data: EditorModuleListItemData) => void;
}

const getQuestionText = (count = 0) => {
  if (!count) {
    return '';
  }

  return count > 1 ? `${count} questions` : `${count} question`;
};

// Component
export const EditorModuleListItem = (props: EditorModuleListItemProps) => {
  const { data, to, onDelete } = props;
  const { title, description, questionsTotal, userInfo = {} } = data;

  const handleDelete = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      if (onDelete) {
        onDelete(ev, data);
      }
    },
    [data, onDelete]
  );

  // Render
  const questionText = getQuestionText(questionsTotal || 0);

  return (
    <ModuleCard to={to}>
      <ModuleCardHeader title={title} subtitle={questionText} />
      {description && <ModuleCardBody maxLength={160}>{description}</ModuleCardBody>}
      <ModuleCardActionBar
        title={userInfo?.fullName || ''}
        avatarUrl={userInfo?.pictureUrl || ''}
        action={<EditorModuleListItemActions onDelete={handleDelete} />}
      />
    </ModuleCard>
  );
};
