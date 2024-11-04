import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import stars from "../../assets/icons/icon-star.svg";
import param from "../../assets/icons/icon-param.svg";
import deco from "../../assets/icons/icon-sortie.svg";
import HeaderProfile from "../../components/Header/header_profile";
import Propos from "./propos";
import Favoris from "./favoris";
import Commandes from "./commandes";
import Commentaires from "./commentaires";
import Paramètre from "./parametre";
import Footer from "../../components/Footer/footer";
import { Button, Card, Tab, Tabs } from "@nextui-org/react";
import "./style.css";

export default function Profile() {
  const [selected, setSelected] = React.useState("propos");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token actuel:", token);

    if (!token) {
      console.log("Pas de token, redirection vers 404");
      navigate("/error_404");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <HeaderProfile />
      <div className="grid m-2 mt-24 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
        <div className="flex w-full flex-col lg:col-start-2 xl:col-start-3 col-span-4 ">
          <Tabs
            aria-label="Options"
            color="black"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-danger-600",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-danger-600",
            }}
          >
            <Tab
              key="propos"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>A propos</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Propos />
              </Card>
            </Tab>

            <Tab
              key="favoris"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Mes favoris</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Favoris />
              </Card>
            </Tab>

            <Tab
              key="commandes"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Mes commandes</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Commandes />
              </Card>
            </Tab>

            <Tab
              key="commentaires"
              style={{ cursor: "default", marginRight: "9rem" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Mes commentaires</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Commentaires />
              </Card>
            </Tab>

            <Tab
              key="parametres"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={param} alt="icon paramètres" className="w-10" />
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Paramètre />
              </Card>
            </Tab>

            <Tab
              key="deconnexion"
              style={{ cursor: "default" }}
              title={
                <Button
                  isIconOnly
                  className="btn-custom"
                  onClick={handleLogout}
                >
                  <img src={deco} alt="icon déconnexion" className="w-12" />
                </Button>
              }
            ></Tab>
          </Tabs>
        </div>
      </div>

      <Footer />
    </>
  );
}
