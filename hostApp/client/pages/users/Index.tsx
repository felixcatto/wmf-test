import Counter from 'petsApp/Counter';
import { Layout } from '../../common/layout.jsx';

export const Users = () => {
  return (
    <Layout>
      <div>
        <div className="text-green-700">Hi bro from Users!</div>

        <Counter />
      </div>
    </Layout>
  );
};

// const Counter = lazy(() => import('petsApp/Counter'));

// <Suspense>
//   <Counter />
// </Suspense>
