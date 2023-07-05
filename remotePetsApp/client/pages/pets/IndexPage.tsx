import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { IPet } from '../../lib/types.js';
import { getApiUrl, getUrl } from '../../lib/utils.jsx';
import { css } from '@emotion/react';
import { gs } from '../../css/styles.jsx';

const PetsPage = () => {
  const pets = useLoaderData() as IPet[];

  return (
    <div>
      <div css={{ color: '#84cc16', marginBottom: 16 }}>Hi from Pets!</div>
      <div css={s.hello}>Hello?</div>
      <table css={gs.table}>
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
                <Link
                  to={getUrl('pet', { id: pet.id })}
                  css={{ paddingRight: 12, paddingTop: 4, paddingBottom: 4 }}
                >
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

const s = {
  hello: css`
    display: inline-block;
    margin-bottom: 8px;
    background: red;
    color: white;
    border-radius: 6px;
    padding: 0 8px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.25), 0 1px 2px -1px rgb(0 0 0 / 0.25);
  `,
};

export const loader = async () => {
  const res = await axios.get<IPet[]>(getApiUrl('/pet/findByStatus', {}, { status: 'available' }));
  return res.data;
};

export default PetsPage;
