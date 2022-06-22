import { PageHeader } from '~/components/page-header';
import { RouterButton } from '~/components/router-button';
import { ModuleList } from '~/components/module-list';

export interface EditorModuleListPageProps {}

export const EditorModuleListPage = (props: EditorModuleListPageProps) => {
  return (
    <>
      <PageHeader
        title="Editor of modules"
        action={
          <RouterButton
            variant="contained"
            color="primary"
            LinkProps={{ to: '/editor/new' }}
          >
            Create Module
          </RouterButton>
        }
      />

      <ModuleList />
    </>
  );
};
