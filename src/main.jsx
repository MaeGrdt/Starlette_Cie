import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import Accueil from "./pages/Accueil/accueil";
import Actualite from "./pages/Actualité/actualite";
import Point_Vente from "./pages/Point_vente/point_vente";
import Boutique from "./pages/Boutique/boutique";
import Connexion from "./pages/Connexion/connexion";
import Profile from "./pages/Profile/profile";
import Dashboard from "./pages/Dashboard/dashboard";
import Page_404 from "./pages/error404/page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "actualite",
        element: <Actualite />,
      },
      {
        path: "point-de-vente",
        element: <Point_Vente />,
      },
      {
        path: "boutique",
        element: <Boutique />,
      },
    ],
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Accueil />,
    //   }
    // ],
  },
  {
    path: "/error_404",
    element: <Page_404 />,
  },
  {
    path: "*",
    element: <Page_404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
