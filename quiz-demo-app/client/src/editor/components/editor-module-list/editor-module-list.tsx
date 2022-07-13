import { Empty } from '~/components/empty';
import { ModuleList } from '~/components/module-list';
import { getEditorModuleUrl } from '~/editor/editor.urls';
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

  return (
    <>
      {items.length === 0 && !loading && <Empty title="No items" />}
      <ModuleList loading={loading}>
        {items.map((item) => {
          return (
            <EditorModuleListItem
              key={item.id}
              to={getEditorModuleUrl(item.id)}
              data={item}
              onDelete={onDelete}
            />
          );
        })}
      </ModuleList>
    </>
  );
};
