import { createBrowserRouter } from 'react-router-dom';
import { AddUser } from '../pages/AddUser';
import { Index } from '../pages/Index';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/user',
    element: <AddUser />,
  },
]);
