import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '../lib/utils.jsx';
import { Home } from '../pages/home/Index.jsx';
import { Pet, petLoader } from '../pages/pets/@petId.jsx';
import { Pets, petsLoader } from '../pages/pets/Index.jsx';
import { Users } from '../pages/users/Index.jsx';

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
    path: routes.pets,
    element: <Pets />,
    loader: petsLoader,
  },
  {
    path: routes.pet,
    element: <Pet />,
    loader: petLoader,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
