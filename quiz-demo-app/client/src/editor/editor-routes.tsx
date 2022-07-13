import { Routes, Route } from 'react-router-dom';

import { EditorCreateModulePage, EditorModuleListPage, EditorModulePage } from './containers';

export const EditorRoutes = () => {
  return (
    <Routes>
      <Route index element={<EditorModuleListPage />} />
      <Route path="new" element={<EditorCreateModulePage />} />
      <Route path=":id" element={<EditorModulePage />} />
      <Route path="*" element={<EditorModuleListPage />} />
    </Routes>
  );
};
