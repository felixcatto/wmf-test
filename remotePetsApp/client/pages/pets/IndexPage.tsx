import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { IPet } from '../../lib/types.js';
import { getApiUrl, getUrl } from '../../lib/utils.jsx';
import { css } from '@emotion/react';

const PetsPage = () => {
  const pets = useLoaderData() as IPet[];

  return (
    <div>
      <div className="text-lime-500 mb-4">Hi from Pets!</div>
      <div css={myClass} className="rounded px-2 inline-block mb-2 shadow">Hello?</div>
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
  );
};

const myClass = css`
  background: red;
  color: white;
`;

export const loader = async () => {
  const res = await axios.get<IPet[]>(getApiUrl('/pet/findByStatus', {}, { status: 'available' }));
  return res.data;
};

export default PetsPage;
