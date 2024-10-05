import { Accordion, AccordionItem } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(clair).svg";
import React from "react";
import "./style.css";

export default function Allergie_produit() {
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
          <li></li>
        </ul>
      liste ol / chiffré:
        <ol className="list-decimal">
          <li></li>
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
            aria-label="Allergènes"
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
                Allergènes et Informations sur les Produits
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                La sécurité de nos clients est une priorité. C'est pourquoi nous
                fournissons des informations détaillées sur la composition de
                nos produits alimentaires et les allergènes qu'ils peuvent
                contenir. Nous vous invitons à lire attentivement cette page
                avant de passer commande.
              </p>

              <h3 className="text-lg">1. Allergènes</h3>
              <p>
                Nos produits peuvent contenir ou être en contact avec des
                substances allergènes. Voici une liste des principaux allergènes
                présents dans les produits vendus sur Starlette & Cie :
                <ul className="list-disc">
                  <li>
                    Lait et produits laitiers (y compris le lactose) : Tous les
                    fromages disponibles sur notre site contiennent du lait et
                    sont donc déconseillés aux personnes souffrant d'intolérance
                    au lactose ou d’allergie aux protéines du lait.
                  </li>
                  <li>
                    Noix et fruits à coque : Certains de nos produits, comme les
                    fromages assaisonnés ou accompagnés, peuvent contenir des
                    noix, amandes, ou autres fruits à coque. Nous recommandons
                    aux personnes allergiques de vérifier la description
                    détaillée de chaque produit avant achat.
                  </li>
                  <li>
                    Œufs : Certains produits accompagnant les fromages ou
                    préparations artisanales peuvent contenir des œufs.
                  </li>
                  <li>
                    Gluten : Bien que nos fromages eux-mêmes ne contiennent pas
                    de gluten, certains produits accompagnant nos fromages,
                    comme les pains ou crackers artisanaux, peuvent en contenir.
                  </li>
                  <li>
                    Sulfites : Certains de nos produits, notamment ceux liés à
                    la conservation (comme certaines charcuteries ou vinaigres
                    accompagnant les fromages), peuvent contenir des sulfites.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">
                2. Comment vérifier les allergènes d’un produit spécifique
              </h3>
              <p>
                Sur chaque fiche produit, vous trouverez une section dédiée aux
                informations sur les allergènes. Si un produit contient un
                allergène spécifique, cela sera clairement indiqué dans la
                description. Par exemple :
                <ul className="list-disc">
                  <li>Fromage de brebis : Contient du lait de brebis.</li>
                  <li>
                    Fromage aux noix : Contient des noix et du lait de vache.
                  </li>
                  <li>Vinaigre artisanal : Peut contenir des sulfites.</li>
                </ul>
                Si vous avez des doutes sur un produit ou besoin d'informations
                supplémentaires, vous pouvez nous contacter avant de passer
                commande à l’adresse email [email de contact] ou par téléphone
                au [numéro de téléphone].
              </p>

              <h3 className="text-lg">3. Risques de contamination croisée</h3>
              <p>
                Même si nous mettons en œuvre des procédures strictes pour
                éviter la contamination croisée, certains de nos produits sont
                préparés dans des environnements où d'autres allergènes peuvent
                être présents. En particulier, les produits contenant des noix,
                gluten, ou œufs peuvent être manipulés dans les mêmes ateliers
                que nos fromages.
                <br />
                <br />
                Nous ne pouvons donc pas garantir que nos produits soient
                totalement exempts de traces de certains allergènes, comme le
                gluten ou les fruits à coque. Si vous avez des allergies
                sévères, nous vous recommandons de nous contacter pour obtenir
                des informations supplémentaires sur nos conditions de
                fabrication.
              </p>

              <h3 className="text-lg">4. Informations nutritionnelles</h3>
              <p>
                Pour chaque produit vendu sur le site, vous trouverez des
                informations nutritionnelles complètes sur la fiche produit. Ces
                informations incluent généralement :
                <ul className="list-disc">
                  <li>Valeur énergétique (en kcal et kJ)</li>
                  <li>Protéines</li>
                  <li>Lipides (dont acides gras saturés)</li>
                  <li>Glucides (dont sucres)</li>
                  <li>Fibres alimentaires</li>
                  <li>Sel</li>
                </ul>
                Nous fournissons également des informations sur les méthodes de
                production (par exemple, fermier, bio, etc.) et les labels de
                qualité lorsque cela s’applique.
              </p>

              <h3 className="text-lg">5. Conservation des produits</h3>
              <p>
                Les produits vendus sur Starlette & Cie, notamment les fromages,
                sont des denrées périssables qui nécessitent des conditions de
                conservation spécifiques pour garantir leur fraîcheur et leur
                qualité.
                <ul className="list-disc">
                  <li>
                    Fromages : Doivent être conservés au réfrigérateur à une
                    température de 4°C à 8°C. Certains fromages à pâte molle ou
                    affinée peuvent nécessiter une conservation spécifique,
                    mentionnée sur la fiche produit.
                  </li>
                  <li>
                    Charcuteries et autres produits artisanaux : Les conditions
                    de conservation varient en fonction des produits et sont
                    indiquées sur chaque fiche produit.
                  </li>
                </ul>
                Nous recommandons de consommer les produits dans les délais
                indiqués pour garantir une expérience gustative optimale.
              </p>

              <h3 className="text-lg">
                6. Recommandations pour les femmes enceintes et les personnes
                vulnérables
              </h3>
              <p>
                Certains de nos produits, comme les fromages au lait cru,
                peuvent présenter des risques pour les femmes enceintes ou les
                personnes vulnérables (comme les personnes immunodéprimées).
                Nous vous invitons à bien vérifier la composition des produits
                et à consulter un professionnel de santé en cas de doute.
                <ul className="list-disc">
                  <li>
                    Fromages au lait cru : Contiennent des bactéries naturelles
                    qui peuvent ne pas être adaptées à certains régimes
                    alimentaires, notamment pour les femmes enceintes. Nous
                    conseillons d'éviter ces produits ou de consulter un médecin
                    avant consommation.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">7. Responsabilité du client</h3>
              <p>
                Il est de la responsabilité du client de consulter attentivement
                les informations sur les allergènes et les descriptions de
                produits avant de passer commande. En cas d'allergie connue,
                nous recommandons vivement de prendre contact avec notre service
                client pour obtenir des conseils personnalisés.
              </p>

              <h3 className="text-lg">8. Nous contacter</h3>
              <p>
                Pour toute question concernant les allergènes ou les
                informations nutritionnelles, vous pouvez nous contacter via les
                moyens suivants :
                <ul className="list-disc">
                  <li>Par email : [email de contact]</li>
                  <li>Par téléphone : [numéro de téléphone]</li>
                </ul>
                Nous nous engageons à fournir des informations aussi précises
                que possible pour assurer la sécurité de nos clients.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
