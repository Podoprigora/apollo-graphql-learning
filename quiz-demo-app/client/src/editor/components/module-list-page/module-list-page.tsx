import { PagePaper } from '~/components/page-paper';
import { PageHeader } from '~/components/page-header';
import { RouterButton } from '~/components/router-button';

export interface EditorModuleListPageProps {}

export const EditorModuleListPage = (props: EditorModuleListPageProps) => {
  return (
    <>
      <PageHeader
        title="Editor"
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

      <PagePaper>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        deserunt, ipsum odit sint quod praesentium adipisci obcaecati
        voluptatum, similique perferendis delectus quas asperiores ullam quis
        optio consequuntur distinctio quaerat consequatur. Quia dicta nobis
        debitis libero nam cum nihil expedita iure ducimus ipsum dolore, modi
        totam assumenda placeat, quasi reiciendis harum blanditiis illum sequi.
        Natus alias recusandae, ducimus aut laudantium provident? Fuga quidem
        culpa natus necessitatibus incidunt, illo quasi tenetur minus tempore
        sint facere consequatur ea ipsum id ipsa temporibus rerum cumque hic
        voluptatibus quibusdam quam error. Vero assumenda vel nihil! Fugiat
        dolor dicta culpa facere officia vel debitis consequuntur, tenetur
        aliquid nostrum aliquam veritatis distinctio deserunt repellat
        aspernatur officiis magnam similique tempore dolore quaerat dignissimos
        amet obcaecati voluptas! Tenetur, consequuntur! Facere vitae dignissimos
        molestias quia ipsam harum, aut natus voluptas itaque quis provident
        eaque ex rerum esse nesciunt atque veniam repudiandae in maiores ullam
        quisquam sint minima? Architecto, corporis voluptatem. Cupiditate hic,
        saepe consectetur tenetur officiis quod optio ab dolore ex aspernatur
        laudantium! Suscipit sapiente aliquam, saepe sunt tempore quod ab
        placeat deserunt non repellat quia inventore unde, earum consectetur.
        Labore suscipit voluptatibus fugiat, rem ab nihil repellat autem eos
        blanditiis quasi placeat doloremque ipsa iure debitis, atque assumenda
        modi quis officia eaque neque nulla delectus? Distinctio officiis
        asperiores facere? Inventore odit, tempore corrupti vel eum culpa alias
        vero molestias ad laboriosam quisquam pariatur commodi nemo quibusdam in
        aut. Quis, in facilis. Magni nostrum eveniet impedit officia quidem
        maiores enim. Quasi saepe provident vel voluptatibus nostrum quo fugiat
        nesciunt ratione. Blanditiis esse culpa illo fuga sed. Quo dolore unde
        eveniet nihil corporis? Accusantium repudiandae nobis consectetur
        facilis, illum quidem blanditiis? Distinctio doloremque tempora ducimus
        facilis at commodi repudiandae provident numquam, vero, impedit ut
        voluptatibus esse laboriosam, rerum dolorem odio placeat unde harum est?
        Harum, maiores. Exercitationem quos iste maxime quia?
      </PagePaper>
    </>
  );
};
