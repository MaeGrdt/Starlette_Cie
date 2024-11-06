import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import like from "../../assets/icons/icon-étoile(vide).svg";
import stars5 from "../../assets/icons/5-stars.svg";
import stars45 from "../../assets/icons/4.5-stars.svg";
import stars4 from "../../assets/icons/4-stars.svg";
import stars35 from "../../assets/icons/3.5-stars.svg";
import stars3 from "../../assets/icons/3-stars.svg";
import stars25 from "../../assets/icons/2.5-stars.svg";
import stars2 from "../../assets/icons/2-stars.svg";
import stars15 from "../../assets/icons/1.5-stars.svg";
import stars1 from "../../assets/icons/1-stars.svg";
import stars05 from "../../assets/icons/0.5-stars.svg";
import axios from "axios";
import { CustomCheckbox } from "../../components/Checkbox/CustomCheckbox";

export default function Produits() {
  const [selected, setSelected] = useState("description");
  const [groupSelected, setGroupSelected] = React.useState([]);
  const [token, setToken] = useState(null);

  const starsMap = {
    5.0: stars5,
    4.5: stars45,
    4.0: stars4,
    3.5: stars35,
    3.0: stars3,
    2.5: stars25,
    2.0: stars2,
    1.5: stars15,
    1.0: stars1,
    0.5: stars05,
  };

  return (
    <>
      <div className="grid m-2 mt-4 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
        <div className="flex w-full flex-col lg:col-start-2 xl:col-start-3 col-span-4 ">
          {/* placer: , , , , , affinage, enrobage, quantité, btn panier */}
          <div className="grid grid-cols-3">
            <div className="p-2">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt=""
                className="w-full object-cover"
                src="../img/fromage.jpg"
              />
              {/* Afficher le bouton seulement si le token est présent */}
              {token && (
                <Button
                  isIconOnly
                  radius="full"
                  variant="light"
                  className="absolute top-0 right-0 z-10"
                >
                  <img src={like} alt="icon étoile" className="size-7" />
                </Button>
              )}

              <div className="flex justify-start py-2 px-3 space-x-2">
                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />
              </div>
            </div>
            <div className="p-2 pl-5 col-span-2">
              <h1 className="text-2xl mt-2">Nom du produit</h1>
              <div className="flex justify-start">
                <img src={stars45} alt={`4.5 étoiles`} className="w-20 ml-5" />
                <p className="ml-5">(10 avis client)</p>
              </div>
              <p className="text-danger my-5 text-lg">3.30 €</p>
              <p className="mb-4">
                <u>Composition :</u> bla bla bla
              </p>
              <div className="mb-4">
                <p className="mb-1">
                  <u>Affinage :</u>
                </p>
                <CheckboxGroup
                  className="gap-1"
                  orientation="horizontal"
                  value={groupSelected}
                  onChange={setGroupSelected}
                >
                  <CustomCheckbox value="affiné">Affiné</CustomCheckbox>
                  <CustomCheckbox value="frais">Frais</CustomCheckbox>
                </CheckboxGroup>
              </div>

              <div className="mb-4">
                <p className="mb-1">
                  <u>Enrobage :</u>
                </p>
                <CheckboxGroup
                  className="gap-1"
                  orientation="horizontal"
                  value={groupSelected}
                  onChange={setGroupSelected}
                >
                  <CustomCheckbox value="nature">Nature</CustomCheckbox>
                  <CustomCheckbox value="bruschetta">Bruschetta</CustomCheckbox>
                  <CustomCheckbox value="ail et fines herbes">
                    Ail et Fines Herbes
                  </CustomCheckbox>
                  <CustomCheckbox value="pempa">Pempa</CustomCheckbox>
                  <CustomCheckbox value="moutarde">Moutarde</CustomCheckbox>
                </CheckboxGroup>
              </div>

              <div className="flex justify-start space-x-10 my-5">
                <Input
                  type="number"
                  variant="bordered"
                  color="danger"
                  placeholder="01"
                  labelPlacement="outside"
                  className="w-20"
                />
                <Button className="bg-danger-600 text-white px-5">
                  Ajouter au panier
                </Button>
              </div>
            </div>
          </div>

          <Tabs
            aria-label="Options"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-danger-600",
              tab: "max-w-fit px-0 h-12 text-black",
              tabContent: "group-data-[selected=true]:text-danger-600",
            }}
          >
            <Tab
              key="description"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icone d'étoiles" className="w-6" />
                  <span>Description</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <Card
                        shadow="sm"
                        key=""
                        isPressable
                        onPress={() => console.log("produit pressé")}
                        className="mb-4"
                      ></Card>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>

            <Tab
              key="info"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icone d'étoiles" className="w-6" />
                  <span>Informations complémentaires</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <Card
                        shadow="sm"
                        key=""
                        isPressable
                        onPress={() => console.log("produit pressé")}
                        className="mb-4"
                      ></Card>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>

            <Tab
              key="avis"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icone d'étoiles" className="w-6" />
                  <span>Avis</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <Card
                        shadow="sm"
                        key=""
                        isPressable
                        onPress={() => console.log("produit pressé")}
                        className="mb-4"
                      ></Card>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
