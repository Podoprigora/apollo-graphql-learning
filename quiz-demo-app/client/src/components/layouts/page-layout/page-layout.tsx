import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

export interface PageLayoutProps {
  children?: React.ReactNode;
}

const RootStyles = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  width: '100%',
  height: '100%',
});

const AsideStyles = styled('aside')({
  width: 260,
});

const AsideBodyStyles = styled('div')({
  position: 'fixed',
  top: 0,
  overflowY: 'auto',
  height: '100vh',
  width: 'inherit',
});

const MainStyles = styled('main')({
  flex: 1,
});

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  return (
    <RootStyles>
      <AsideStyles>
        <AsideBodyStyles>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
          veritatis doloremque unde fugit amet suscipit ipsum sapiente,
          molestias voluptatum sint facere pariatur praesentium possimus saepe
          totam sunt. Fugiat, magnam! Vero, alias beatae. Aspernatur totam
          voluptas provident nemo excepturi asperiores dolore! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Accusamus doloribus ab
          aut quae tempore esse dolores labore soluta, delectus ducimus,
          laudantium placeat officiis consequuntur iure cumque architecto
          asperiores. Iure, ut! Esse excepturi voluptates neque reprehenderit
        </AsideBodyStyles>
      </AsideStyles>
      <MainStyles>
        <Container>{children}</Container>
      </MainStyles>
    </RootStyles>
  );
};
