import { Layout } from '../../common/layout.jsx';
import PetsPage, { loader } from './IndexPage.jsx';

export const Pets = () => {
  return (
    <Layout>
      <PetsPage />
    </Layout>
  );
};

export { loader as petsLoader };
