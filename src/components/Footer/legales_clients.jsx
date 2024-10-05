import { Accordion, AccordionItem } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(clair).svg";
import React from "react";
import "./style.css";

export default function Legales_client() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <>
      <div className="m-2">
        <Accordion
          variant="splitted"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <AccordionItem
            key="1"
            aria-label="Mentions Légales"
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
                Mentions Légales
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                Conformément aux dispositions de la loi{" "}
                <span className="italic">n° 2004-575 du 21 juin 2004</span> pour
                la confiance en l’économie numérique, il est précisé aux
                utilisateurs du site "Starlette & Cie" l’identité des différents
                intervenants dans le cadre de sa réalisation et de son suivi.
              </p>

              <h3 className="text-lg">1. Édition du site</h3>
              <p>
                Le présent site, accessible à l’URL{" "}
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>
                , est édité par : <br />
                <br />
                <span className="italic">Mathilde Girardot</span>, résidant au
                24 rue des Martyrs de Vingré, à Saint-Etienne. Cette gestion est
                réalisée à{" "}
                <span className="italic">titre bénévole et personnel</span>,
                sans activité professionnelle associée.
              </p>

              <h3 className="text-lg">2. Vente des produits</h3>
              <p>
                Les produits disponibles sur le site sont fabriqués et mis en
                vente par : <br />
                <br />
                <span className="italic">Ludivine Girardot</span>, située au 38
                rue de la gueurge 52190 Prangey, immatriculée au Registre du
                Commerce et des Sociétés sous le numéro{" "}
                <span className="italic">911774016</span>. Le numéro individuel
                d’identification TVA de l'entreprise est :{" "}
                <span className="italic">FR4891174016</span>.
              </p>

              <h3 className="text-lg">3. Hébergement</h3>
              <p>
                Le Site est hébergé par la société{" "}
                <span className="italic">1&1 IONOS</span>, située au 7 Place de
                la Gare – 57200 Sarreguemines, France. <br /> Pour toute demande
                relative à l'hébergement, vous pouvez les contacter par
                téléphone au :{" "}
                <span className="italic">(+33 9 70 80 89 11)</span>.
              </p>

              <h3 className="text-lg">4. Nous contacter</h3>
              <p>
                Pour toute question, réclamation ou information relative à nos
                services ou produits, vous pouvez nous contacter via les moyens
                suivants : <br />
                <ul className="list-disc">
                  <li>
                    Pour les questions relatives{" "}
                    <span className="italic">
                      à la gestion du site ou à un problème technique
                    </span>{" "}
                    : <br />
                    <ul className="list-disc">
                      <li>Mathilde Girardot</li>
                      <li>
                        <u>Par email :</u> mae.grdt@gmail.com
                      </li>
                    </ul>
                  </li>
                  <li>
                    Pour les questions relatives{" "}
                    <span className="italic">
                      aux produits ou aux commandes
                    </span>{" "}
                    : <br />
                    <ul className="list-disc">
                      <li>Ludivine Girardot</li>
                      <li>
                        <u>Par téléphone :</u> +33 6 31 41 23 36
                      </li>
                      <li>
                        <u>Par email :</u> lgirardot1998@gmail.com
                      </li>
                      <li>
                        <u>Par courrier :</u> 38 rue de la gueurge 52190 Prangey
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">5. Données personnelles</h3>
              <p>
                Le traitement de vos données à caractère personnel est régi par
                notre{" "}
                <a
                  href="/mentions_politique?tab=confi_cookie"
                  className="underline"
                >
                  Charte de Protection des Données Personnelles
                </a>
                , conforme au{" "}
                <span className="italic">
                  Règlement Général sur la Protection des Données (RGPD) n°
                  2016/679 du 27 avril 2016
                </span>
                . Vous pouvez consulter cette charte directement sur notre site.{" "}
                <br />
                <br />
                Nous veillons à la protection et à la confidentialité de vos
                données personnelles et nous nous engageons à ne pas les
                transmettre à des tiers sans votre consentement explicite, sauf
                dans le cadre de l'exécution de nos services (par exemple pour
                la livraison de vos commandes).
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Service Client"
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
                  style={{ marginRight: "5%", width: "19%" }}
                />
                Service Client
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                Pour toute assistance liée{" "}
                <span className="underline italic">
                  à la commande de nos fromages
                </span>{" "}
                ou{" "}
                <span className="underline italic">
                  à l’utilisation du site
                </span>
                , notre service client est à votre disposition :
                <ul className="list-disc">
                  <li>
                    <u>Horaires d’ouverture :</u> Du lundi au vendredi, de{" "}
                    <span className="underline italic">9h00 à 18h00</span>.
                  </li>

                  <li>
                    Assistance liée à une commande ou à un produits: –{" "}
                    <span className="underline italic">Ludivine Girardot</span>
                    <ul className="list-disc">
                      <li>
                        <u>Par téléphone :</u> +33 6 31 41 23 36{" "}
                        <span className="underline italic">
                          (appel non surtaxé)
                        </span>
                        .
                      </li>
                      <li>
                        <u>Par email :</u> lgirardot1998@gmail.com
                      </li>
                    </ul>
                  </li>
                  <li>
                    Assistance liée à l'utilisation du site: –{" "}
                    <span className="underline italic">Mathilde Girardot</span>
                    <ul className="list-disc">
                      <li>
                        <u>Par email :</u> mae.grdt@gmail.com
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Informations complémentaires"
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
                  style={{ marginRight: "5%", width: "10%" }}
                />
                Informations complémentaires
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <ul className="list-disc">
                <li>
                  <p>
                    <u>Propriété intellectuelle :</u> Tous les contenus présents
                    sur ce site (textes, images, logos) sont protégés par le
                    droit d'auteur. Toute reproduction totale ou partielle est
                    strictement interdite sans autorisation préalable.
                  </p>
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
