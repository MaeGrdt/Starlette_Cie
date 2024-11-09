import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import croix from "../../assets/icons/icon-croix.svg";
// import moins from "../../assets/icons/moins.svg";
// import plus from "../../assets/icons/plus.svg";
import "./style_panier.css";
import axios from "axios";

export default function Panier() {
  const [selected, setSelected] = useState("panier");
  const [token, setToken] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

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
              key="panier"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icone d'étoiles" className="w-6" />
                  <span>Panier</span>
                </div>
              }
            >
              <Card className="bg-danger-50 grid grid-cols-3 p-3 space-x-3">
                <div className="col-span-2 rounded-md mr-1 space-y-3">
                  <Card
                    className="border-none shadow-none rounded-xl"
                    key="index"
                  >
                    <CardBody>
                      <div className="2xl:grid 2xl:grid-cols-4">
                        <div className="relative md:max-lg:flex md:max-lg:justify-center content-center">
                          <Image
                            alt="{item.nom}"
                            className="object-cover mx-auto size-80 md:size-64 2xl:mb-0 xl:size-36"
                            shadow="sm"
                            src="{item.image}"
                          />
                        </div>

                        <div className="col-span-3 pl-4">
                          <div className="flex flex-col">
                            <div className="flex justify-between mb-1 overflow-x-hidden">
                              <h3 className="mb-1 md:mb-0 text-lg">
                                Nom du produit
                              </h3>
                              <Button
                                isIconOnly
                                className="bg-transparent"
                                style={{
                                  marginTop: "-0.8rem",
                                  marginRight: "-0.8rem",
                                }}
                              >
                                <img
                                  src={croix}
                                  alt="icon de croix"
                                  className="size-8"
                                />
                              </Button>
                            </div>

                            <div className="pl-2 space-y-2">
                              <div className="flex justify-start space-x-2">
                                <p className="font-bold">Affinage :</p>
                                <p>Frais</p>
                              </div>

                              <div className="flex justify-start space-x-2">
                                <p className="font-bold">Enrobage :</p>
                                <p>Nature</p>
                              </div>
                              <div
                                className="flex justify-between"
                                style={{ marginTop: "1.5rem" }}
                              >
                                <div className="flex justify-start space-x-1 quantity-input-container">
                                  <Button
                                    isIconOnly
                                    auto
                                    onClick={decrement}
                                    className="bg-transparent"
                                    style={{ marginTop: "-0.2rem" }}
                                  >
                                    {/* <img
                                      src={moins}
                                      alt="icon moins"
                                      className="size-2"
                                    /> */}
                                    -
                                  </Button>
                                  <Input
                                    radius="sm"
                                    size="sm"
                                    variant="bordered"
                                    // value={quantity}
                                    value="1"
                                    onChange={(e) =>
                                      setQuantity(Number(e.target.value))
                                    }
                                    className="w-12"
                                    style={{
                                      textAlign: "center",
                                    }}
                                  />
                                  <Button
                                    isIconOnly
                                    auto
                                    onClick={increment}
                                    className="bg-transparent"
                                    style={{ marginTop: "-0.2rem" }}
                                  >
                                    {/* <img
                                      src={plus}
                                      alt="icon plus"
                                      className="size-2"
                                    /> */}
                                    +
                                  </Button>
                                </div>
                                <div>
                                  <p className="text-danger text-base font-semibold grid">
                                    3.30€
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card
                    className="border-none shadow-none rounded-xl"
                    key="index"
                  >
                    <CardBody>
                      <div className="2xl:grid 2xl:grid-cols-4">
                        <div className="relative md:max-lg:flex md:max-lg:justify-center content-center">
                          <Image
                            alt="{item.nom}"
                            className="object-cover mx-auto size-80 md:size-64 2xl:mb-0 xl:size-36"
                            shadow="sm"
                            src="{item.image}"
                          />
                        </div>

                        <div className="col-span-3 pl-4">
                          <div className="flex flex-col">
                            <div className="flex justify-between mb-1 overflow-x-hidden">
                              <h3 className="mb-1 md:mb-0 text-lg">
                                Nom du produit
                              </h3>
                              <Button
                                isIconOnly
                                className="bg-transparent"
                                style={{
                                  marginTop: "-0.8rem",
                                  marginRight: "-0.8rem",
                                }}
                              >
                                <img
                                  src={croix}
                                  alt="icon de croix"
                                  className="size-8"
                                />
                              </Button>
                            </div>

                            <div className="pl-2 space-y-2">
                              <div className="flex justify-start space-x-2">
                                <p className="font-bold">Affinage :</p>
                                <p>Frais</p>
                              </div>

                              <div className="flex justify-start space-x-2">
                                <p className="font-bold">Enrobage :</p>
                                <p>Multiple</p>
                              </div>
                              <div
                                className="flex justify-between"
                                style={{ marginTop: "1.5rem" }}
                              >
                                <div className="flex justify-start space-x-1 quantity-input-container">
                                  <Button
                                    isIconOnly
                                    auto
                                    onClick={decrement}
                                    className="bg-transparent"
                                    style={{ marginTop: "-0.2rem" }}
                                  >
                                    {/* <img
                                      src={moins}
                                      alt="icon moins"
                                      className="size-2"
                                    /> */}
                                    -
                                  </Button>
                                  <Input
                                    radius="sm"
                                    size="sm"
                                    variant="bordered"
                                    // value={quantity}
                                    value="2"
                                    onChange={(e) =>
                                      setQuantity(Number(e.target.value))
                                    }
                                    className="w-12"
                                    style={{
                                      textAlign: "center",
                                    }}
                                  />
                                  <Button
                                    isIconOnly
                                    auto
                                    onClick={increment}
                                    className="bg-transparent"
                                    style={{ marginTop: "-0.2rem" }}
                                  >
                                    {/* <img
                                      src={plus}
                                      alt="icon plus"
                                      className="size-2"
                                    /> */}
                                    +
                                  </Button>
                                </div>
                                <div>
                                  <p className="text-danger text-base font-semibold grid">
                                    7.00€
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Divider
                    className="my-3 bg-danger-600 mx-auto"
                    style={{ width: "35rem" }}
                  />
                  <div className="bg-white rounded-lg flex justify-end space-x-5 p-3">
                    <p
                      className="text-default-500"
                      style={{ marginTop: "0.2rem" }}
                    >
                      Sous-total (3 articles)
                    </p>
                    <p className="text-danger-600 text-base font-bold">
                      10.30 €
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-xl p-3 space-y-5">
                    <h2 className="text-lg text-center uppercase">
                      Total Panier
                    </h2>
                    <div className="flex justify-between">
                      <p>Sous-Total</p>
                      <p>10.30 €</p>
                    </div>
                    <div className="flex">
                      <Button className="bg-danger-600 text-white w-40 m-auto">
                        Passer la commande
                      </Button>
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
