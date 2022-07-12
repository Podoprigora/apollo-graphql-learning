import { Routes, Route } from 'react-router-dom';

import { EditorCreateModulePage } from './containers/editor-create-module-page.container';
import { EditorModuleListPage } from './components/editor-module-list-page';

export const EditorRoutes = () => {
  return (
    <Routes>
      <Route index element={<EditorModuleListPage />} />
      <Route path="new" element={<EditorCreateModulePage />} />
      <Route path="*" element={<EditorModuleListPage />} />
    </Routes>
  );
};
