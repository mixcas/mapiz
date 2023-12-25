import {  RouterProvider, createBrowserRouter } from "react-router-dom";


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
    element: 'home',
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
