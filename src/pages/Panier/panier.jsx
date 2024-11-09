import React, { useState, useEffect } from "react";
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
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import ModalErrPanier from "../../components/Modals/modal_err_panier";
import croix from "../../assets/icons/icon-croix.svg";

export default function Panier() {
  const [selected, setSelected] = useState("panier");
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const panierJSON = localStorage.getItem("panier");
    if (panierJSON) {
      setProducts(JSON.parse(panierJSON));
    }
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const increment = (productIndex) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        index === productIndex
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrement = (productIndex) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        index === productIndex && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (productIndex) => {
    const updatedProducts = [...products];
    updatedProducts.splice(productIndex, 1);
    setProducts(updatedProducts);
    localStorage.setItem("panier", JSON.stringify(updatedProducts));
  };

  const handleOrderClick = () => {
    if (token) {
      console.log("Commande passée !");
    } else {
      setShowModal(true);
    }
  };

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
                  {products.map((item, index) => (
                    <Card
                      className="border-none shadow-none rounded-xl"
                      key={index}
                    >
                      <CardBody>
                        <div className="2xl:grid 2xl:grid-cols-4">
                          <div className="relative md:max-lg:flex md:max-lg:justify-center content-center">
                            <Image
                              alt={item.nom}
                              className="object-cover mx-auto size-80 md:size-64 2xl:mb-0 xl:size-36"
                              shadow="sm"
                              src={item.image}
                            />
                          </div>

                          <div className="col-span-3 pl-4">
                            <div className="flex flex-col">
                              <div className="flex justify-between mb-1 overflow-x-hidden">
                                <h3 className="mb-1 md:mb-0 text-lg">
                                  {item.nom}
                                </h3>
                                <Button
                                  isIconOnly
                                  className="bg-transparent"
                                  onClick={() => removeProduct(index)}
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
                                  <p>{item.affinage}</p>
                                </div>

                                <div className="flex justify-start space-x-2">
                                  <p className="font-bold">Enrobage :</p>
                                  <p>{item.enrobage}</p>
                                </div>
                                <div
                                  className="flex justify-between"
                                  style={{ marginTop: "1.5rem" }}
                                >
                                  <div className="flex justify-start space-x-1 quantity-input-container">
                                    <Button
                                      isIconOnly
                                      auto
                                      onClick={() => decrement(index)}
                                      className="bg-transparent"
                                      style={{ marginTop: "-0.2rem" }}
                                    >
                                      -
                                    </Button>
                                    <Input
                                      radius="sm"
                                      size="sm"
                                      variant="bordered"
                                      value={item.quantity}
                                      onChange={(e) =>
                                        setProducts((prevProducts) =>
                                          prevProducts.map((product, i) =>
                                            i === index
                                              ? {
                                                  ...product,
                                                  quantity: Number(
                                                    e.target.value
                                                  ),
                                                }
                                              : product
                                          )
                                        )
                                      }
                                      className="w-12"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    />
                                    <Button
                                      isIconOnly
                                      auto
                                      onClick={() => increment(index)}
                                      className="bg-transparent"
                                      style={{ marginTop: "-0.2rem" }}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <div>
                                    <p className="text-danger text-base font-semibold grid">
                                      {item.prix} €
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                  <Divider
                    className="my-3 bg-danger-600 mx-auto"
                    style={{ width: "35rem" }}
                  />
                  <div className="bg-white rounded-lg flex justify-end space-x-5 p-3">
                    <p
                      className="text-default-500"
                      style={{ marginTop: "0.2rem" }}
                    >
                      Sous-total ({products.length} articles)
                    </p>
                    <p className="text-danger-600 text-base font-bold">
                      {products
                        .reduce(
                          (acc, item) =>
                            acc + parseFloat(item.prix) * item.quantity,
                          0
                        )
                        .toFixed(2)}{" "}
                      €
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
                      <p className="text-danger-600 text-base font-bold">
                        {products
                          .reduce(
                            (acc, item) =>
                              acc + parseFloat(item.prix) * item.quantity,
                            0
                          )
                          .toFixed(2)}{" "}
                        €
                      </p>
                    </div>
                    <div className="flex">
                      <Button
                        className="bg-danger-600 text-white w-40 m-auto"
                        onClick={handleOrderClick}
                      >
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
      {showModal && <ModalErrPanier onClose={() => setShowModal(false)} />}
    </>
  );
}
