import { render, screen, fireEvent } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "./header";
import Accueil from "../../pages/Accueil/accueil";
import Actualite from "../../pages/Actualité/actualite";
import Point_Vente from "../../pages/Point_vente/point_vente";
import Boutique from "../../pages/Boutique/boutique";
import Connexion from "../../pages/Connexion/connexion";
import App from "../../App";
import { NextUIProvider } from "@nextui-org/react";

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
]);

describe("Header Component", () => {
  it("navigates to the correct page on link click", async () => {
    render(
      <NextUIProvider>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </NextUIProvider>
    );

    // Vérifier si le lien "Accueil" est présent
    const homeLinks = screen.getAllByText("Accueil");
    expect(homeLinks[0]).toBeInTheDocument();
    // Simuler un clic sur le lien "Accueil"
    fireEvent.click(homeLinks[0]);
    // Vérifier si le chemin de l'URL est correct
    expect(window.location.pathname).toBe("/");

    // Vérifier si le lien "Actualités" est présent
    const actualiteLink = screen.getAllByText("Actualités");
    expect(actualiteLink[0]).toBeInTheDocument();
    // Simuler un clic sur le lien "Actualités"
    fireEvent.click(actualiteLink[0]);
    // Vérifier si le chemin de l'URL est correct
    expect(window.location.pathname).toBe("/actualite");

    // Vérifier si le lien "Points de ventes" est présent
    const pointVenteLink = screen.getAllByText("Points de ventes");
    expect(pointVenteLink[0]).toBeInTheDocument();
    // Simuler un clic sur le lien "Points de ventes"
    fireEvent.click(pointVenteLink[0]);
    // Vérifier si le chemin de l'URL est correct
    expect(window.location.pathname).toBe("/point-de-vente");

    // Vérifier si le lien "Boutique" est présent
    const boutiqueLink = screen.getByText("Boutique");
    expect(boutiqueLink).toBeInTheDocument();
    // Simuler un clic sur le lien "Boutique"
    fireEvent.click(boutiqueLink);
    // Vérifier si le chemin de l'URL est correct
    expect(window.location.pathname).toBe("/boutique");
  });
});
