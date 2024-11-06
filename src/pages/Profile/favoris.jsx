import { Button, Card, CardBody, Image } from "@nextui-org/react";
import etoile from "../../assets/icons/icon-étoile.svg";
import React from "react";
// import "./style.css";

export default function Favoris() {
  const list = [
    {
      nom: "Nom de l'article",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      poids: "000g",
      composition: "....",
      prix: "0.00€",
      image: "./public/img/fromage.jpg",
    },
    {
      nom: "Nom de l'article",
      description:
        "Curabitur luctus accumsan orci, ut vulputate purus venenatis ac.",
      poids: "000g",
      composition: "....",
      prix: "0.00€",
      image: "./public/img/fromage.jpg",
    },
    {
      nom: "Nom de l'article",
      description:
        "Nam nunc metus, elementum eu pellentesque quis, mollis sed massa.",
      poids: "000g",
      composition: "....",
      prix: "0.00€",
      image: "./public/img/fromage.jpg",
    },
    {
      nom: "Nom de l'article",
      description:
        "Donec turpis lorem, egestas ut nunc quis, vehicula dignissim eros.",
      poids: "000g",
      composition: "....",
      prix: "0.00€",
      image: "./public/img/fromage.jpg",
    },
    {
      nom: "Nom de l'article",
      description:
        "Proin consequat fermentum sapien, nec ullamcorper mi placerat at.",
      poids: "000g",
      composition: "....",
      prix: "0.00€",
      image: "./public/img/fromage.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {list.map((item, index) => (
          <Card className="border-none mb-3 md:mx-2" key={index}>
            <CardBody>
              <div className="2xl:grid 2xl:grid-cols-3">
                <div className="relative md:max-lg:flex md:max-lg:justify-center content-center">
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
                      <Button
                        isIconOnly
                        className="btn-custom absolute top-0 right-0 m-1"
                      >
                        <img
                          src={etoile}
                          alt="icon étoile"
                          className="size-8"
                        />
                      </Button>
                      <p className="my-1">{item.description}</p>
                      <b className="grid justify-items-end my-1">
                        {item.poids}
                      </b>
                      <p className="my-1">
                        <u>Composition:</u> {item.composition}
                      </p>
                      <p className="text-danger font-semibold my-1 grid justify-items-center">
                        {item.prix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
