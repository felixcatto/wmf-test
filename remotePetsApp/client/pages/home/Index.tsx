import { css } from '@emotion/react';
import { Layout } from '../../common/layout.jsx';

export const Home = () => {
  return (
    <Layout>
      <div>
        <div css={{ color: '#b45309' }}>Hi bro!</div>
        <div css={{ color: 'green', marginBottom: 16 }}>Is styled components ok?</div>
        <img src="/img/s2.jpg" alt="" css={s.img} />
      </div>
    </Layout>
  );
};

const s = {
  img: css`
    border-radius: 6px;
    height: 400px;
    margin: auto;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.25), 0 2px 4px -2px rgb(0 0 0 / 0.25);
  `,
};
