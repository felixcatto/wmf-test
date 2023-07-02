import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getUrl } from '../lib/utils.jsx';
import { Cats } from '../pages/cats/Index.jsx';
import { Home } from '../pages/home/Index.jsx';
import { Users } from '../pages/users/Index.jsx';

const router = createBrowserRouter([
  {
    path: getUrl('home'),
    element: <Home />,
  },
  {
    path: getUrl('users'),
    element: <Users />,
  },
  {
    path: getUrl('cats'),
    element: <Cats />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
