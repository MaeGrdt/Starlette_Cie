import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Error from "/img/error404.svg";
import "./style_404.css";

export default function Page_404() {
  return (
    <>
      <div className="fond404 overflow-hidden">
        <div className="flex justify-center w-full h-full md:place-items-center">
          <Card className="max-w-full m-10 md:w-2/5 xl:w-1/4 bg-danger-100 p-2 items-center">
            <Image
              alt="logo"
              src={Error}
              className="w-36 md:w-24 lg:w-80 mt-16"
            />

            <h1 className="text-center mt-3 mb-10">Page Not Found</h1>
            <p className="text-center mt-2">
              Désolé, la page que vous cherchez n'existe pas.
            </p>

            <Button
              fullWidth
              size="lg"
              className="bg-danger-600 text-white w-96 mt-4 mb-16"
            >
              <NavLink to="/">Retourner à l'Accueil</NavLink>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
