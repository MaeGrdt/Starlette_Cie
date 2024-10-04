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

              <h3 className="text-lg">Édition du site</h3>
              <p>
                Le présent site, accessible à l’URL{" "}
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>
                , est édité par : <br />
                <br />
                Mathilde Girardot, résidant au 24 rue des Martyrs de Vingré, à
                Saint-Etienne. Cette gestion est réalisée à titre bénévole et
                personnel, sans activité professionnelle associée.
              </p>

              <h3 className="text-lg">Vente des produits</h3>
              <p>
                Les produits disponibles sur le site sont créés et mis en vente
                par : <br />
                <br />
                Ludivine Girardot, située au 38 rue de la gueurge 52190 Prangey,
                immatriculée au Registre du Commerce et des Sociétés sous le
                numéro 911774016. Le numéro individuel d’identification TVA de
                l'entreprise est : FR4891174016.
              </p>

              <h3 className="text-lg">Hébergement</h3>
              <p>
                Le Site est hébergé par la société 1&1 IONOS, située au 7 Place
                de la Gare – 57200 Sarreguemines, France. <br /> Pour toute
                demande relative à l'hébergement, vous pouvez les contacter par
                téléphone au : (+33 9 70 80 89 11).
              </p>

              <h3 className="text-lg">Nous contacter</h3>
              <p>
                Pour toute question, réclamation ou information relative à nos
                services ou produits, vous pouvez nous contacter via les moyens
                suivants : <br />
                <ul className="list-disc">
                  <li>
                    Pour les questions relatives à la gestion du site ou à un
                    problème technique : <br />
                    <ul className="list-disc">
                      <li>Mathilde Girardot</li>
                      <li>Par téléphone : +33 7 85 38 93 02</li>
                      <li>Par email : mae.grdt@gmail.com</li>
                    </ul>
                  </li>
                  <li>
                    Pour les questions relatives aux produits ou aux commandes :{" "}
                    <br />
                    <ul className="list-disc">
                      <li>Ludivine Girardot</li>
                      <li>Par téléphone : +33 6 31 41 23 36</li>
                      <li>Par email : lgirardot1998@gmail.com</li>
                      <li>Par courrier : 38 rue de la gueurge 52190 Prangey</li>
                    </ul>
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">Données personnelles</h3>
              <p>
                Le traitement de vos données à caractère personnel est régi par
                notre{" "}
                <span className="underline">
                  Charte de Protection des Données Personnelles
                </span>
                , conforme au Règlement Général sur la Protection des Données
                (RGPD) n° 2016/679 du 27 avril 2016. Vous pouvez consulter cette
                charte directement sur notre site.
              </p>
              <p>
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
                Pour toute assistance liée à la commande de nos fromages ou à
                l’utilisation du site, notre service client est à votre
                disposition :
                <br /> Horaires d’ouverture : Du lundi au vendredi, de 9h00 à
                18h00.
                <br /> Par téléphone : +33 6 31 41 23 36 (appel non surtaxé).{" "}
                <br /> Par email : lgirardot1998@gmail.com – Nous vous
                répondrons dans un délai de 24h ouvrables.
              </p>

              <h3 className="text-lg">Retours et Remboursements</h3>

              <p>
                Conformément à la législation en vigueur, vous disposez d’un
                délai de 14 jours à compter de la réception de votre commande
                pour exercer votre droit de rétractation, à condition que les
                produits n'aient pas été ouverts ou altérés. Pour plus
                d’informations, veuillez consulter nos{" "}
                <span className="underline">Conditions Générales de Vente</span>
                .
              </p>

              <h3 className="text-lg">Livraison</h3>
              <p>
                Nos produits sont livrés dans un emballage réfrigéré afin de
                garantir leur fraîcheur. Nous vous invitons à consulter notre
                page <span className="underline">Livraison et Expédition</span>{" "}
                pour connaître les délais et modalités de livraison.
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
                    <span>Cookies :</span> Ce site utilise des cookies pour
                    améliorer l’expérience utilisateur. Vous pouvez gérer vos
                    préférences depuis la page{" "}
                    <span className="underline">Politique des Cookies</span>.
                  </p>
                </li>
                <li>
                  <p>
                    <span>Propriété intellectuelle :</span> Tous les contenus
                    présents sur ce site (textes, images, logos) sont protégés
                    par le droit d'auteur. Toute reproduction totale ou
                    partielle est strictement interdite sans autorisation
                    préalable.
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
