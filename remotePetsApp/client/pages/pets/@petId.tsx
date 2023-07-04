import { Layout } from '../../common/layout.jsx';
import PetPage, { loader } from './@petIdPage.jsx';

export const Pet = () => {
  return (
    <Layout>
      <PetPage />
    </Layout>
  );
};

export { loader as petLoader };
