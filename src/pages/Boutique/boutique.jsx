import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import Filters from "../../components/Filter/filters";
import PaginationShop from "../../components/Pagination/pagination";

export default function Boutique() {
  const [selected, setSelected] = React.useState("shop");

  const list = [
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
    {
      title: "Nom du produit",
      img: "../img/fromage.jpg",
      price: "0.00€",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <div className="flex w-full flex-col col-start-3 col-span-4">
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
                <div className="flex gap-2">
                  <div className="w-3/4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pr-2">
                      {list.map((item, index) => (
                        <Card
                          shadow="sm"
                          key={index}
                          isPressable
                          onPress={() => console.log("item pressed")}
                          className="mb-4 mr-3"
                        >
                          <CardBody className="overflow-visible p-0">
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={item.title}
                              className="w-full object-cover h-[140px]"
                              src={item.img}
                            />
                          </CardBody>
                          <CardFooter className="text-small justify-center">
                            <p>
                              {item.title}
                              <br />
                              <b className="text-danger-400">{item.price}</b>
                            </p>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                      <PaginationShop />
                    </div>
                  </div>
                  <div className="w-1/4 flex gap-2 items-center justify-end">
                    <div>
                      <Filters />
                    </div>
                  </div>
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
