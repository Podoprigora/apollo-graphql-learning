import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GraphQLProvider } from '~/graphql';
import { ThemeProvider } from '~/components/theme';
import { NotFoundPage } from '~/components/not-found-page';
import { MainLayout } from '~/main-layout';
import { EditorRoutes } from '~/editor';
import { AuthProvider } from '~/auth';

// Component
export const App = () => {
  return (
    <GraphQLProvider>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<EditorRoutes />} />
                <Route path="editor/*" element={<EditorRoutes />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </GraphQLProvider>
  );
};
