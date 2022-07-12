import { ModuleList } from '~/components/module-list';
import {
  EditorModuleListItem,
  EditorModuleListItemData,
  EditorModuleListItemProps,
} from './editor-module-list-item';

export interface EditorModuleListProps {
  items?: EditorModuleListItemData[];
  loading?: boolean;
  onDelete?: EditorModuleListItemProps['onDelete'];
}

export const EditorModuleList = (props: EditorModuleListProps) => {
  const { items = [], loading, onDelete } = props;

  if (loading) {
    return null;
  }

  return (
    <ModuleList>
      {items.map((item) => {
        return (
          <EditorModuleListItem
            key={item.id}
            to={`/editor/new`}
            data={item}
            onDelete={onDelete}
          />
        );
      })}
    </ModuleList>
  );
};
