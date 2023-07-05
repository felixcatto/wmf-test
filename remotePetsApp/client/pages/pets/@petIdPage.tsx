import axios from 'axios';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { IPet } from '../../lib/types.js';
import { getApiUrl, getUrl } from '../../lib/utils.jsx';
import { gs } from '../../css/styles.jsx';

export const PetPage = () => {
  const pet = useLoaderData() as IPet;

  return (
    <div>
      <Link to={getUrl('pets')} css={[gs.btn, { marginBottom: 12 }]}>I Will Be Back button</Link>

      <pre>{JSON.stringify(pet, null, 2)}</pre>
    </div>
  );
};

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;
  const res = await axios.get(getApiUrl('/pet/{petId}', { petId: id }));
  return res.data;
};

export default PetPage;
