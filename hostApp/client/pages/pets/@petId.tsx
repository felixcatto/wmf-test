import axios from 'axios';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Layout } from '../../common/layout.jsx';
import { IPet } from '../../lib/types.js';
import { getApiUrl } from '../../lib/utils.jsx';

export const Pet = () => {
  const pet = useLoaderData() as IPet;

  return (
    <Layout>
      <pre>{JSON.stringify(pet, null, 2)}</pre>
    </Layout>
  );
};

export const petLoader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;
  const res = await axios.get(getApiUrl('/pet/{petId}', { petId: id }));
  return res.data;
};
