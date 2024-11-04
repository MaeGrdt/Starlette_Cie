import React from "react";
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";

export default function Actualite() {
  const [selected, setSelected] = React.useState("actu");

  const list = [
    {
      nom: "Nom de l'article",
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://nextui.org/images/album-cover.png",
    },
    {
      nom: "Nom de l'article",
      resume:
        "Curabitur luctus accumsan orci, ut vulputate purus venenatis ac.",
      image: "https://nextui.org/images/hero-card.jpeg",
    },
    {
      nom: "Nom de l'article",
      resume:
        "Nam nunc metus, elementum eu pellentesque quis, mollis sed massa.",
      image: "https://nextui.org/images/card-example-4.jpeg",
    },
    {
      nom: "Nom de l'article",
      resume:
        "Donec turpis lorem, egestas ut nunc quis, vehicula dignissim eros.",
      image: "https://nextui.org/images/card-example-3.jpeg",
    },
    {
      nom: "Nom de l'article",
      resume:
        "Proin consequat fermentum sapien, nec ullamcorper mi placerat at.",
      image: "https://nextui.org/images/card-example-2.jpeg",
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
              key="actu"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Actualités</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {list.map((item, index) => (
                    <Card className="border-none mb-3 md:mx-2" key={index}>
                      <CardBody>
                        <div className="2xl:grid 2xl:grid-cols-3">
                          <div className="relative md:max-lg:flex md:max-lg:justify-center">
                            <Image
                              alt={item.nom}
                              className="object-cover mx-auto size-80 mb-5 md:size-64 2xl:mb-0 xl:size-36"
                              shadow="sm"
                              src={item.image}
                            />
                          </div>

                          <div className="col-span-2">
                            <div className="flex justify-between items-start">
                              <div className="flex flex-col 2xl:ml-2">
                                <h3 className="mb-1 md:mb-0">{item.nom}</h3>
                                <p>{item.resume}</p>
                                <a
                                  href="#"
                                  className="text-danger-300 grid justify-items-end mt-4 2xl:mt-12"
                                >
                                  Voir plus -{">"}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
