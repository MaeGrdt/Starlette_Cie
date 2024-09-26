import stars from "../../assets/icons/icon-star(clair).svg";
import ModalSignalement from "../Modals/modal_signal";
import { Divider, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <div>
        <div className="flex justify-end">
          <div className="bg-danger-100 h-16 w-16 rounded-l-xl mb-5 flex items-center justify-center">
            <ModalSignalement />
          </div>
        </div>

        <div className="bg-default-900 py-1 px-8 ">
          <Divider className="bg-danger-200 my-4 mx-8 w-95" />
          <div className="grid sm:grid-cols-3 sm:items-start sm:px-5 sm:mx-8">
            {/* Première div à gauche */}
            <div className="flex justify-start">
              <Link href="#" className="text-white">
                Starlette & Cie
              </Link>
            </div>

            {/* Seconde div au centre */}
            <div className="flex justify-center mb-2">
              <img src={stars} alt="icon d'étoiles" />
            </div>

            {/* Troisième div à droite */}
            <div className="flex h-5 items-center space-x-4 justify-end">
              <div>
                <Link href="#" className="text-white">
                  Mention légale
                </Link>
              </div>
              <Divider orientation="vertical" className="bg-white" />
              <div>
                <Link href="#" className="text-white">
                  Politique de retour
                </Link>
              </div>
              <Divider orientation="vertical" className="bg-white" />
              <div>
                <Link href="#" className="text-white">
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
