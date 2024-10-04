import { Link } from "react-router-dom";
import stars from "../../assets/icons/icon-star(clair).svg";
import ModalSignalement from "../Modals/modal_signal";
import { Divider } from "@nextui-org/react";

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
          <Divider className="bg-danger-200 my-4 mx-8 w-95 mb-10" />
          <div className="grid sm:grid-cols-3 sm:items-start sm:px-5 sm:mx-8">
            {/* Première div à gauche */}
            <div className="flex justify-center sm:justify-start">
              <Link href="#" className="text-white">
                Starlette & Cie
              </Link>
            </div>

            {/* Seconde div au centre */}
            <div className="flex justify-center my-6 sm:mb-2">
              <img src={stars} alt="icon d'étoiles" />
            </div>

            {/* Troisième div à droite */}
            <div className="flex xl:flex-row flex-col h-auto xl:h-5 items-center space-y-4 xl:space-y-0 xl:space-x-4 justify-end mb-4 xl:mb-0 text-center">
              <div>
                <Link
                  to="/mentions_politique?tab=legales_clients"
                  relative="path"
                  className="text-white"
                >
                  Mentions Légales & Service Client
                </Link>
              </div>
              <Divider
                orientation="vertical"
                className="bg-white hidden xl:block"
              />
              <Divider className="bg-white block xl:hidden w-4/5" />
              <div>
                <Link
                  to="/mentions_politique?tab=CGV_retour"
                  relative="path"
                  className="text-white"
                >
                  CGV & Politique de Retour
                </Link>
              </div>
              <Divider
                orientation="vertical"
                className="bg-white hidden xl:block"
              />
              <Divider className="bg-white block xl:hidden w-4/5" />
              <div>
                <Link
                  to="/mentions_politique?tab=confi_cookie"
                  relative="path"
                  className="text-white"
                >
                  Confidentialité & Cookies
                </Link>
              </div>
              <Divider
                orientation="vertical"
                className="bg-white hidden xl:block"
              />
              <Divider className="bg-white block xl:hidden w-4/5" />
              <div>
                <Link
                  to="/mentions_politique?tab=allergie_produit"
                  relative="path"
                  className="text-white"
                >
                  Allergènes & Infos Produits
                </Link>
              </div>
              <Divider
                orientation="vertical"
                className="bg-white hidden xl:block"
              />
              <Divider className="bg-white block xl:hidden w-4/5" />
              <div>
                <Link
                  to="/mentions_politique?tab=info_paiement"
                  relative="path"
                  className="text-white"
                >
                  Infos Paiements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
