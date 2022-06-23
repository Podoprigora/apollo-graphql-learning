import { PagePaper } from '~/components/page-paper';
import { PageHeader } from '~/components/page-header';

export interface EditorCreateModulePageProps {}

export const EditorCreateModulePage = (props: EditorCreateModulePageProps) => {
  return (
    <>
      <PageHeader title="New Module" />

      <PagePaper>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        deserunt, ipsum odit sint quod praesentium adipisci obcaecati
        voluptatum, similique perferendis delectus quas asperiores ullam quis
        optio consequuntur distinctio quaerat consequatur.
      </PagePaper>
    </>
  );
};
