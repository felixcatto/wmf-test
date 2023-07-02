import { css } from '@emotion/react';
import { Layout } from '../../common/layout.jsx';

export const Home = () => {
  return (
    <Layout>
      <div>
        <div className="text-amber-700">Hi bro!</div>
        <div css={myClass} className="mb-4">
          Is styled components ok?
        </div>
        <img src="/img/s2.jpg" alt="" className="rounded-md h-96 mx-auto shadow-md" />
      </div>
    </Layout>
  );
};

const myClass = css`
  color: green;
`;
