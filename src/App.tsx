import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';

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
    path: "admin",
    element: 'admin',
  }, {
    path: "/",
    element: <Button variant="contained">Hello world</Button>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
