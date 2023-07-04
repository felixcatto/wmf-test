import axios from 'axios';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { IPet } from '../../lib/types.js';
import { getApiUrl } from '../../lib/utils.jsx';

export const PetPage = () => {
  const pet = useLoaderData() as IPet;

  return <pre>{JSON.stringify(pet, null, 2)}</pre>;
};

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;
  const res = await axios.get(getApiUrl('/pet/{petId}', { petId: id }));
  return res.data;
};

export default PetPage;
