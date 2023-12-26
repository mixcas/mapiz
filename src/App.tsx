import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';

import Admin from './routes/admin/Admin';

import './App.css'

const router = createBrowserRouter([
  {
    path: "evento/:eventId",
    element: `evento`,
  }, {
    path: "login",
    element: 'login',
  }, {
    path: "archivo",
    element: `archivo`,
  // }, {
  //   path: "/admin/eventos",
  //   element: 'admin - eventos',
  // }, {
  //   path: "/admin/evento/:eventId",
  //   element: `admin - evento`,
  // }, {
  //   path: "/admin/usuarios",
  //   element: `admin - usuarios`,
  }, {
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        path: "eventos",
        element: 'admin - eventos',
      }, {
        path: "evento/:eventId",
        element: `admin - evento`,
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
