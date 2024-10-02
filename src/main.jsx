import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import Accueil from './pages/Accueil/accueil';
import Point_Vente from './pages/Point_vente/point_vente';
import Boutique from './pages/Boutique/boutique';
import Connexion from './pages/Connexion/connexion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: 'point-de-vente',
        element: <Point_Vente />,
      },
      {
        path: 'boutique',
        element: <Boutique />,
      },
    ],
  },
  {
    path: '/connexion',
    element: <Connexion />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
