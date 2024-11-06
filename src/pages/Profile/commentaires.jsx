import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
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

export default function Commentaires() {
  // Mappage des notes aux images d'étoiles correspondantes
  const starsMap = {
    "5.0": stars5,
    4.5: stars45,
    "4.0": stars4,
    3.5: stars35,
    "3.0": stars3,
    2.5: stars25,
    "2.0": stars2,
    1.5: stars15,
    "1.0": stars1,
    0.5: stars05,
  };

  const list = [
    {
      nom: "Nom du produit",
      note: "3.5",
      commentaire: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./public/img/fromage.jpg",
    },
    {
      nom: "Nom du produit",
      note: "4.0",
      commentaire:
        "Curabitur luctus accumsan orci, ut vulputate purus venenatis ac.",
      image: "./public/img/fromage.jpg",
    },
  ];

  return (
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
                    <div className="2xl:grid 2xl:grid-cols-2">
                      <div>
                        <p className="my-1">
                          <span className="font-normal underline">
                            Note donnée:
                          </span>{" "}
                        </p>
                      </div>
                      <div style={{ marginLeft: "-30%", marginTop: "3%" }}>
                        {/* Affiche l'image d'étoiles correspondante */}
                        <img
                          src={starsMap[item.note]}
                          alt={`${item.note} stars`}
                          className="w-28"
                        />
                      </div>
                    </div>

                    <p className="mt-3">
                      <span className="font-normal underline">
                        Commentaire :
                      </span>{" "}
                      {item.commentaire}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
