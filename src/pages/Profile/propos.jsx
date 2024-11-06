import { Divider } from "@nextui-org/react";
import React from "react";
import "./style.css";

export default function Propos() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-case case1">
          <p className="px-2 police">Nom</p>
          <Divider className="mt-1 mb-3" />
          <p className="uppercase px-4 text-danger-600 text-base">client</p>
        </div>

        <div className="bg-case case2">
          <p className="px-2 police">Prénom</p>
          <Divider className="mt-1 mb-3" />
          <p className="px-4 text-danger-600 text-base">Test</p>
        </div>

        <div className="bg-case case3">
          <p className="px-2 police">Email</p>
          <Divider className="mt-1 mb-3" />
          <p className="uppercase px-4 text-danger-600 text-base">
            test...@gmail.com
          </p>
        </div>

        <div className="bg-case case4">
          <p className="px-2 police">Numéro de téléphone</p>
          <Divider className="mt-1 mb-3" />
          <p className="uppercase px-4 text-danger-600 text-base">
            00 00 00 00 00
          </p>
        </div>
      </div>
    </>
  );
}
