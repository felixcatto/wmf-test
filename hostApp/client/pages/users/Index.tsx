import Counter from 'petsApp/Counter';
import { Layout } from '../../common/layout.jsx';

export const Users = () => {
  return (
    <Layout>
      <div>
        <div className="row">
          <div className="col" css={{ color: 'seagreen' }}>
            Hi finally worked!!!
          </div>
          <div className="col">bootstrap?</div>
        </div>

        <Counter />
      </div>
    </Layout>
  );
};

// const Counter = lazy(() => import('petsApp/Counter'));

// <Suspense>
//   <Counter />
// </Suspense>
