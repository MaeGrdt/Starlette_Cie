import { Button, Card, CardBody } from "@nextui-org/react";
import oeil from "../../assets/icons/icon-visible.svg";
import download from "../../assets/icons/icon-download.svg";
import React from "react";
// import "./style.css";

export default function Commandes() {
  const list = [
    {
      nom: "facture_03.11.2024.pdf",
      date: "03/11/2024",
      etat: "En attente",
      lien: "./public/document_test/facture_00.00.0000.pdf",
    },
    {
      nom: "facture_30.10.2024.pdf",
      date: "30/10/2024",
      etat: "En cours",
      lien: "./public/document_test/facture_00.00.0000.pdf",
    },
    {
      nom: "facture_30.10.2024.pdf",
      date: "30/10/2024",
      etat: "Annulé",
      lien: "./public/document_test/facture_00.00.0000.pdf",
    },
    {
      nom: "facture_10.10.2024.pdf",
      date: "10/10/2024",
      etat: "Terminé",
      lien: "./public/document_test/facture_00.00.0000.pdf",
    },
  ];

  const etatStyles = {
    "En attente": "text-yellow-500",
    "En cours": "text-blue-500",
    Annulé: "text-red-500",
    Terminé: "text-green-500",
  };

  const handleView = (lien) => {
    window.open(lien, "_blank");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {list.map((item, index) => (
          <Card className="border-none mb-3 md:mx-2" key={index}>
            <CardBody>
              <div className="2xl:grid 2xl:grid-cols-4">
                <div className="col-span-3">
                  <div className="flex flex-col 2xl:ml-2">
                    <h3 className="mb-1 md:mb-0">Commande du {item.date}</h3>
                    <p className="mt-1 mb-3">{item.nom}</p>
                    <p className="my-1">
                      <span className="font-normal underline">
                        Etat de la commande :
                      </span>{" "}
                      <b className={`${etatStyles[item.etat]}`}>{item.etat}</b>
                    </p>
                  </div>
                </div>
                <div className="text-right content-center">
                  <Button
                    isIconOnly
                    className="btn-custom"
                    onClick={() => handleView(item.lien)}
                  >
                    <img src={oeil} alt="icon œil" className="size-9" />
                  </Button>

                  <a href={item.lien} download={item.nom}>
                    <Button isIconOnly className="btn-custom">
                      <img
                        src={download}
                        alt="icon téléchargement"
                        className="size-9"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
