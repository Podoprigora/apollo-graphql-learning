import { styled } from '@mui/material/styles';
import Paper, { PaperProps } from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { PageHeader } from '~/components/page-header';
import { StickyFbar } from '~/components/sticky-fbar';

// Interfaces
export interface EditorCreateModulePageProps {}

// Styles
const EditorCreateModuleFormSectionStyles = styled((props: PaperProps) => {
  return <Paper elevation={0} {...props} />;
})(({ theme }) => {
  return {
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusLarge,

    '& + &': {
      marginTop: theme.spacing(2),
    },
  };
});

// Component
export const EditorCreateModulePage = (props: EditorCreateModulePageProps) => {
  return (
    <>
      <PageHeader title="Create a new module" />

      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>
      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>
      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>
      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>
      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>
      <EditorCreateModuleFormSectionStyles>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        repudiandae ullam dignissimos vel at nostrum illo. Id vel quia ullam
        voluptas, accusamus, a exercitationem commodi amet quaerat, consectetur
        minima! Nemo? Voluptate quae deserunt, itaque blanditiis magni rem ad
        incidunt iure eius voluptatibus nisi quas excepturi autem sit
        perferendis qui sapiente dolores inventore! Consectetur, temporibus
        fuga! Autem veniam quidem placeat minima?
      </EditorCreateModuleFormSectionStyles>

      <StickyFbar>
        <Button variant="text" color="inherit">
          Back
        </Button>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </StickyFbar>
    </>
  );
};
