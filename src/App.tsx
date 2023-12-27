import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';

import Admin from './routes/admin/Admin';
import Login from './routes/login/Login';
import Events from './routes/admin/eventos/Events';

import './App.css'

const router = createBrowserRouter([
  {
    path: "evento/:eventId",
    element: `evento`,
  }, {
    path: "login",
    element: <Login />
  }, {
    path: "archivo",
    element: `archivo`,
  }, {
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        path: "eventos",
        element: <Events />
      }, {
        path: "evento/:eventId",
        element: `admin - evento`,
      }, {
        path: "evento/crear",
        element: `admin - evento - crear`,
      }, {
        path: "usuarios",
        element: `admin - usuarios`,
      }, {
        index: true,
        element: <Button variant="contained">Hello world</Button>
      },
    ],
  }, {
    path: "/",
    element: 'home',
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
