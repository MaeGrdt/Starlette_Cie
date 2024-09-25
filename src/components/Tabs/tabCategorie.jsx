import React from "react";
import { Tabs, Tab, Card, Image, CardFooter } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";

export default function TabCategorie() {
  const [selected, setSelected] = React.useState("produits");

  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="flex w-full flex-col col-start-3 col-span-4 mb-3">
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
            key="produits"
            style={{ cursor: "default" }}
            title={
              <div className="flex items-center space-x-2 px-2">
                <img src={stars} alt="icon d'étoiles" className="w-6" />
                <span>Nos produits</span>
              </div>
            }
          >
            <Card className="bg-danger-50 p-3">
              <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {/* card produits laitiers */}
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    src="../img/vache_champs.jpg"
                  />
                  <a href="#">
                    <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 bottom-3 w-[calc(87%)] flex justify-center items-center mx-4">
                      <h1 className="text-danger-100 font-regular">
                        Produits Laitiers
                      </h1>
                    </CardFooter>
                  </a>
                </Card>

                {/* card fromage de vache */}
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    src="../img/tete_vache.jpg"
                  />
                  <a href="#">
                    <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 bottom-3 w-[calc(87%)] flex justify-center items-center mx-4">
                      <h1 className="text-danger-100 font-regular">
                        Fromage de Vache
                      </h1>
                    </CardFooter>
                  </a>
                </Card>

                {/* card fromage mixte */}
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    src="../img/groupe_vaches(1).jpg"
                  />
                  <a href="#">
                    <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 bottom-3 w-[calc(87%)] flex justify-center items-center mx-4">
                      <h1 className="text-danger-100 font-regular">
                        Fromage Mixte
                      </h1>
                    </CardFooter>
                  </a>
                </Card>

                {/* card fromage de chevre */}
                <Card isFooterBlurred radius="lg" className="border-none">
                  <Image
                    alt="Woman listing to music"
                    className="object-cover w-full"
                    src="../img/chevre_dodo.jpg"
                  />
                  <a href="#">
                    <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 bottom-3 w-[calc(87%)] flex justify-center items-center mx-4">
                      <h1 className="text-danger-100 font-regular">
                        Fromage de Chèvre
                      </h1>
                    </CardFooter>
                  </a>
                </Card>
              </div>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
