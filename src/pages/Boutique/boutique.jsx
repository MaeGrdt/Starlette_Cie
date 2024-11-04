import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
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
import Filters from "../../components/Filter/filters";
import PaginationShop from "../../components/Pagination/pagination";

export default function Boutique() {
  const [selected, setSelected] = useState("shop");
  const [showFilters, setShowFilters] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

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

  const list = [
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "3.5",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "4.5",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "4",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "3.5",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "3",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "4.5",
    },
    {
      titre: "Nom du produit",
      img: "../img/fromage.jpg",
      prix: "0.00€",
      note_moy: "",
    },
  ];

  return (
    <>
      <div className="grid m-2 mt-4 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
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
              key="shop"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Boutique</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="lg:hidden w-full">
                    <button
                      className="bg-danger-600 text-white px-4 py-2 rounded-lg w-full mb-1"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      {showFilters
                        ? "Masquer les filtres"
                        : "Afficher les filtres"}
                    </button>
                  </div>

                  <div
                    className={`w-full lg:w-1/4 order-1 lg:order-2 transition-all duration-300 ${
                      showFilters ? "block" : "hidden"
                    } lg:block flex flex-col items-center`}
                  >
                    <Filters />
                  </div>

                  {/* Liste des produits */}
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      {list.map((item, index) => (
                        <Card
                          shadow="sm"
                          key={index}
                          isPressable
                          onPress={() => console.log("item pressed")}
                          className="mb-4"
                        >
                          <CardBody className="overflow-visible p-0">
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={item.titre}
                              className="w-full object-cover h-[140px]"
                              src={item.img}
                            />

                            {/* Afficher le bouton seulement si le token est présent */}
                            {token && (
                              <Button
                                isIconOnly
                                radius="full"
                                variant="light"
                                className="absolute top-0 right-0 z-10"
                              >
                                <img
                                  src={like}
                                  alt="icon étoile"
                                  className="size-7"
                                />
                              </Button>
                            )}
                          </CardBody>
                          <CardFooter className="text-small justify-center">
                            <p className="text-center">
                              {item.titre}
                              <br />
                              {item.note_moy ? (
                                <img
                                  src={starsMap[item.note_moy]}
                                  alt={`${item.note_moy} étoiles`}
                                  className="w-20 my-1 mx-auto"
                                />
                              ) : null}{" "}
                              <b className="text-danger-400">{item.prix}</b>
                            </p>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <PaginationShop />
                </div>
              </Card>
            </Tab>

            <Tab
              key="disabled"
              isDisabled
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <span>Affichage de 1-16 sur ?? résultats</span>
                </div>
              }
            />
          </Tabs>
        </div>
      </div>
    </>
  );
}
