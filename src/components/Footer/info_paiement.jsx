import { Accordion, AccordionItem } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(clair).svg";
import React from "react";
import "./style.css";

export default function Info_paiement() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <>
      {/*
      titre: <h3 className="text-lg"></h3>
      texte: <p></p>
      lien: <span className="underline italic"></span>
      liste ul / point:
        <ul className="list-disc">
          <li></li>
          <li></li>
        </ul>
      liste ol / chiffré:
        <ol className="list-decimal">
          <li></li>
          <li></li>
        </ol>
      */}

      <div className="m-2">
        <Accordion
          variant="splitted"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <AccordionItem
            key="1"
            aria-label="label"
            title={
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={stars}
                  alt="stars"
                  style={{ marginRight: "5%", width: "8.5%" }}
                />
                nom
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="label"
            title={
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={stars}
                  alt="stars"
                  style={{ marginRight: "5%", width: "15%" }}
                />
                nom
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>

              <h3 className="text-lg"></h3>
              <p></p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
