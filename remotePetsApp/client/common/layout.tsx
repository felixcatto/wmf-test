import { Link } from 'react-router-dom';
import { getUrl } from '../lib/utils.jsx';
import { css } from '@emotion/react';

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <div css={s.container} className="container">
        <div css={{ display: 'flex', marginBottom: 16, gap: 16, fontSize: '1.25rem' }}>
          <Link to={getUrl('home')}>Home</Link>
          <Link to={getUrl('users')}>Users</Link>
          <Link to={getUrl('pets')}>Pets</Link>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

const s = {
  container: css`
    min-height: 100vh;
    padding-top: 16px;
    padding-bottom: 16px;
    background: white;
    box-shadow: inset 0 0 5px 2px rgb(0 0 0 / 0.2);
  `,
};
