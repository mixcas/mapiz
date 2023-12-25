import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

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
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
