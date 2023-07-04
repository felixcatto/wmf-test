import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Pet, petLoader } from '../pages/pets/@petId.jsx';
// import { Pets, petsLoader } from '../pages/pets/Index.jsx';
import { Layout } from '../common/layout.jsx';
import { routes } from '../lib/utils.jsx';
import { Cats, catsLoader } from '../pages/cats/Index.jsx';
import { Home } from '../pages/home/Index.jsx';
import { Users } from '../pages/users/Index.jsx';

const lazyRemote = dynamicImportFn => async () => {
  const exported = await dynamicImportFn();
  const RemotePage = exported.default;
  return {
    Component: () => (
      <Layout>
        <RemotePage />
      </Layout>
    ),
  };
};

const lazyRemoteLoader = dynamicImportFn => async args => {
  const exported = await dynamicImportFn();
  return exported.loader(args);
};

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.users,
    element: <Users />,
  },
  {
    path: routes.cats,
    element: <Cats />,
    loader: catsLoader,
  },
  // {
  //   path: routes.pets,
  //   element: <Pets />,
  //   loader: petsLoader,
  // },
  // {
  //   path: routes.pet,
  //   element: <Pet />,
  //   loader: petLoader,
  // },
  {
    path: routes.pets,
    lazy: lazyRemote(() => import('petsApp/Pets')),
    loader: lazyRemoteLoader(() => import('petsApp/Pets')),
  },
  {
    path: routes.pet,
    lazy: lazyRemote(() => import('petsApp/Pet')),
    loader: lazyRemoteLoader(() => import('petsApp/Pet')),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
