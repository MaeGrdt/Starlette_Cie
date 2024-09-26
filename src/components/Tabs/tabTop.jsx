import React from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(jaune).svg";
import etiquette from "../../assets/icons/icon-étiquette.svg";
import etoile from "../../assets/icons/icon-étoile.svg";

export default function TabTop() {
  const [selected, setSelected] = React.useState("news");

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
  ];

  return (
    <div className="grid m-2 sm:grid-cols-8 sm:gap-4">
      <div className="flex w-full flex-col col-start-3 col-span-4">
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
          {/* onglet - nouveauté */}
          <Tab
            key="news"
            title={
              <div className="flex items-center space-x-2 px-2">
                <img src={stars} alt="icon d'étoiles" className="w-6" />
                <span>Nouveautés</span>
              </div>
            }
          >
            <Card className="bg-danger-50 p-3">
              <div className="gap-2 grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6">
                {list.map((item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
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
            </Card>
          </Tab>

          {/* onglet - plus vendu */}
          <Tab
            key="vendu"
            title={
              <div className="flex items-center space-x-2 px-2">
                <img src={etiquette} alt="icon d'étoiles" className="w-6" />
                <span>Plus Vendu</span>
              </div>
            }
          >
            <Card className="bg-danger-50 p-3">
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
                {list.map((item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
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
            </Card>
          </Tab>

          {/* onglet - mieux noté */}
          <Tab
            key="note"
            title={
              <div className="flex items-center space-x-2 px-2">
                <img src={etoile} alt="icon d'étoiles" className="w-6" />
                <span>Mieux Noté</span>
              </div>
            }
          >
            <Card className="bg-danger-50 p-3">
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
                {list.map((item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
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
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
