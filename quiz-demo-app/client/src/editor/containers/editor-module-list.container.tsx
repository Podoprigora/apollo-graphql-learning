import { EditorModuleList as EditorModuleListView } from '../components/editor-module-list';
import { EditorModuleListItemsFixture } from '~/fixutures';

export const EditorModuleList = () => {
  return <EditorModuleListView items={EditorModuleListItemsFixture} />;
};
