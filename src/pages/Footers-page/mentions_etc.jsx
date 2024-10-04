import { useEffect, useState } from "react";
import { Tabs, Tab, Card } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import Legales_clients from "../../components/Footer/legales_clients";
import CGV_retour from "../../components/Footer/CGV_retour";
import Confi_cookie from "../../components/Footer/confi_cookie";
import Allergie_produit from "../../components/Footer/allergie_produit";
import Info_paiement from "../../components/Footer/info_paiement";
import { useLocation } from "react-router-dom";

export default function Mentions() {
  const location = useLocation();
  const [selected, setSelected] = useState("legales_clients"); // onglet par défaut

  // Effet pour mettre à jour l'onglet sélectionné à partir de l'URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromURL = params.get("tab");

    if (tabFromURL) {
      setSelected(tabFromURL); // Met à jour l'onglet en fonction du paramètre d'URL
    }
  }, [location.search]);
  return (
    <>
      <div className="grid m-2 mt-14 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
        <div className="flex w-full flex-col lg:col-start-2 xl:col-start-3 col-span-4 ">
          <Tabs
            aria-label="Options"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "w-full relative rounded-none p-0 border-b border-divider flex justify-between",
              cursor: "w-full bg-danger-600",
              tab: "max-w-fit px-0 h-12 text-black",
              tabContent: "group-data-[selected=true]:text-danger-600",
            }}
          >
            <Tab
              key="legales_clients"
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>
                    Mentions Légales
                    <br />
                    Service Client
                  </span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Legales_clients />
              </Card>
            </Tab>
            <Tab
              key="CGV_retour"
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>
                    CGV
                    <br />
                    Politique de Retour
                  </span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <CGV_retour />
              </Card>
            </Tab>
            <Tab
              key="confi_cookie"
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>
                    Confidentialité
                    <br />
                    Cookies
                  </span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Confi_cookie />
              </Card>
            </Tab>
            <Tab
              key="allergie_produit"
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>
                    Allergènes
                    <br />
                    Infos Produits
                  </span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Allergie_produit />
              </Card>
            </Tab>
            <Tab
              key="info_paiement"
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Infos Paiements</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Info_paiement />
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
