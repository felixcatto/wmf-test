import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { Layout } from '../../common/layout.jsx';
import { IPet } from '../../lib/types.js';
import { getApiUrl, getUrl } from '../../lib/utils.jsx';

export const Pets = () => {
  const pets = useLoaderData() as IPet[];

  return (
    <Layout>
      <div>
        <div className="text-lime-500 mb-4">Hi from Pets!</div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pet Name</th>
              <th>Pet Status</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>
                  <Link to={getUrl('pet', { id: pet.id })} className="pr-3 py-1">
                    {pet.id}
                  </Link>
                </td>
                <td>{pet.name}</td>
                <td>{pet.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const petsLoader = async () => {
  const res = await axios.get<IPet[]>(getApiUrl('/pet/findByStatus', {}, { status: 'available' }));
  return res.data;
};
