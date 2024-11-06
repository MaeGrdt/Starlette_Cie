import React from "react";
import {
  Tabs,
  Tab,
  Card,
  Accordion,
  AccordionItem,
  Button,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import repere from "../../assets/icons/icon-repère.svg";
import "./style_vente.css";

export default function Point_Vente() {
  const [selected, setSelected] = React.useState("pdv");

  const token = localStorage.getItem("token");

  const list = [
    {
      title: "Nom du PDV",
      resume: "Résumé de la formalité",
      lieu: "localisation",
      jour: "00/00/2024",
      heure_debut: "00h",
      heure_fin: "00h",
      cadence: "",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22391.1154241932!2d4.368594625588792!3d45.45188424097701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5ac0f0c4df8c9%3A0x1c093cb3290e5a30!2s42000%20Saint-%C3%89tienne!5e0!3m2!1sfr!2sfr",
    },
    {
      title: "Nom du PDV",
      resume: "Résumé de la formalité",
      lieu: "localisation",
      jour: "Mercredi",
      heure_debut: "00h",
      heure_fin: "00h",
      cadence: "Semaine impaire",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10732.698790081104!2d5.270915820864433!3d47.73926503731266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ed3c39d57c9a77%3A0xa0a5fbc41b76460!2sPrangey%2C%2052190%20Villegusien-le-Lac!5e0!3m2!1sfr!2sfr",
    },
    {
      title: "Nom du PDV",
      resume: "Résumé de la formalité",
      lieu: "localisation",
      jour: "Jeudi",
      heure_debut: "00h",
      heure_fin: "00h",
      cadence: "Semaine paire",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21461.27695450301!2d5.231596264208912!3d47.74925864929872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ed3da33b4a01f1%3A0x60cd0998e911caff!2sBaissey!5e0!3m2!1sfr!2sfr",
    },
    {
      title: "Nom du PDV",
      resume: "Résumé de la formalité",
      lieu: "localisation",
      jour: "Jeudi",
      heure_debut: "00h",
      heure_fin: "00h",
      cadence: "Chaque semaine",
      iframe:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42847.46403673502!2d3.9358194702386395!3d47.840242299384485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee700781d1c6d7%3A0xf24d5542d53475e!2s89700%20Tonnerre!5e0!3m2!1sfr!2sfr",
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
              key="pdv"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icon d'étoiles" className="w-6" />
                  <span>Points de ventes</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <Accordion variant="splitted" defaultExpandedKeys={["0"]}>
                  {list.map((item, index) => (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index + 1}`}
                      title={
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={repere}
                            alt="Repère"
                            style={{ marginRight: "5%", width: "18%" }}
                          />
                          {item.title}
                        </span>
                      }
                      className={`border-0 shadow-none my-1`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-3">
                        <div className="md:col-span-2 flex md:block flex-col items-center justify-center text-center md:text-left space-y-3">
                          <p className="mb-5">{item.resume}</p>
                          <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 space-y-3">
                            <p className="text-custom">
                              <u>Lieu :</u>
                              {item.lieu}
                            </p>
                            <p className="text-custom">
                              <u>Jour :</u>
                              {item.jour}
                            </p>
                            <p className="text-custom">
                              <u>Horaires :</u>
                              <b>
                                {item.heure_debut} - {item.heure_fin}
                              </b>
                            </p>
                            {item.cadence && (
                              <p className="text-custom">
                                <u>Cadence :</u>
                                <b>{item.cadence}</b>
                              </p>
                            )}
                          </div>
                          {token && (
                            <Button className="btn-color">
                              Choisir ce point de vente
                            </Button>
                          )}
                        </div>
                        <div className="col-span-1 md:col-start-3">
                          <iframe
                            src={item.iframe}
                            width="100%"
                            height="280rem"
                            style={{
                              borderRadius: 10,
                              borderWidth: 4,
                              borderColor: "#fee7ef",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
