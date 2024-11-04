import React from "react";
import crayon from "../../assets/icons/icon-crayon.svg";
import { Button } from "@nextui-org/react";
// import "./style.css";

export default function Paramètre() {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-case1 case1">
          <p className="px-2 police mb-2">Nom</p>
          <p className="uppercase px-4 text-danger-600 text-base">client</p>
        </div>

        <div className="bg-case1 case2">
          <p className="px-2 police mb-2">Prénom</p>
          <p className="px-4 text-danger-600 text-base">Test</p>
        </div>

        <div className="bg-case1 case3">
          <p className="px-2 police mb-2">Email</p>
          <p className="uppercase px-4 text-danger-600 text-base">
            test...@gmail.com
          </p>
        </div>

        <div className="bg-case1 case4">
          <p className="px-2 police mb-2">Numéro de téléphone</p>
          <p className="uppercase px-4 text-danger-600 text-base">
            00 00 00 00 00
          </p>
        </div>
      </div>
      <div className="bg-case1 case5 grid grid-cols-2 justify-center">
        <div>
          <p className="px-2 police mb-2">Mot de passe</p>
          <p className="uppercase px-4 text-danger-600 text-base">*****</p>
        </div>
        <div className="text-right content-center">
          <Button isIconOnly className="btn-custom">
            <img src={crayon} alt="icon étoile" className="size-8" />
          </Button>
        </div>
      </div>
      <Button disabled className="btn-edit">
        Modifier
      </Button>
    </>
  );
}
