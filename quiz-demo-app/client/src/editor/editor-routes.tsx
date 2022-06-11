import { Routes, Route } from 'react-router-dom';

import { EditorCreateModulePage } from './components/create-module-page';
import { EditorModuleListPage } from './components/module-list-page';

export const EditorRoutes = () => {
  return (
    <Routes>
      <Route index element={<EditorModuleListPage />} />
      <Route path="new" element={<EditorCreateModulePage />} />
      <Route path="*" element={<EditorModuleListPage />} />
    </Routes>
  );
};
