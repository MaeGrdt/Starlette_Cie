import { Accordion, AccordionItem } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(clair).svg";
import React from "react";
import "./style.css";

export default function Confi_cookie() {
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
            aria-label="confidentialité"
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
                  style={{ marginRight: "5%", width: "11%" }}
                />
                Politique de Confidentialité
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                La présente politique de confidentialité a pour but d’informer
                les utilisateurs du site{" "}
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>{" "}
                sur la collecte, l’utilisation et la protection de leurs données
                personnelles conformément au Règlement Général sur la Protection
                des Données (RGPD).
              </p>

              <h3 className="text-lg">
                1. Responsable du traitement des données
              </h3>
              <p>
                Le responsable du traitement des données personnelles collectées
                sur le site est :<br />
                <br />
                [Nom de la fromagère ou de la boutique], située à [adresse de la
                boutique].
                <br /> Numéro SIRET : [numéro SIRET]
                <br />
                Adresse email : [email de contact]
                <br /> Téléphone : [numéro de téléphone]
              </p>

              <h3 className="text-lg">2. Données collectées</h3>
              <p>
                Lorsque vous naviguez sur le site ou passez une commande,
                différentes données personnelles peuvent être collectées,
                notamment :
                <ul className="list-disc">
                  <li>
                    Données d'identité : Nom, prénom, adresse postale, email,
                    numéro de téléphone.
                  </li>
                  <li>
                    Données de connexion : Adresse IP, type de navigateur, temps
                    de connexion.
                  </li>
                  <li>
                    Données de paiement : Les informations relatives aux moyens
                    de paiement ne sont jamais stockées directement par notre
                    site. Elles sont traitées par notre prestataire de paiement
                    sécurisé.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">3. Finalités du traitement</h3>
              <p>
                Les données personnelles collectées sur notre site sont
                utilisées pour :
                <ul className="list-disc">
                  <li>
                    Gestion des commandes : Traitement des commandes, livraison
                    des produits, suivi des achats.
                  </li>
                  <li>
                    Service client : Répondre aux demandes des utilisateurs
                    (questions, réclamations, retours).
                  </li>
                  <li>
                    Amélioration de l’expérience utilisateur : Analyse des
                    statistiques de navigation pour améliorer les services
                    proposés.
                  </li>
                  <li>
                    Marketing et newsletter (si applicable) : Envoi de
                    communications commerciales aux utilisateurs ayant donné
                    leur consentement.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">4. Durée de conservation des données</h3>
              <p>
                Les données personnelles sont conservées pour une durée limitée
                :
                <ul className="list-disc">
                  <li>
                    Données relatives aux commandes : Conservées pendant 5 ans
                    pour des raisons légales (garantie, litiges).
                  </li>
                  <li>
                    Données de contact : Conservées pendant la durée nécessaire
                    au traitement des demandes.
                  </li>
                  <li>
                    Cookies et données de navigation : Voir la section Politique
                    de Cookies ci-dessous pour la durée de conservation des
                    cookies.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">5. Partage des données personnelles</h3>
              <p>
                Vos données personnelles peuvent être partagées avec des
                prestataires tiers, mais uniquement dans le cadre des finalités
                suivantes :
                <ul className="list-disc">
                  <li>
                    Prestataires de paiement : Pour assurer la sécurité des
                    transactions.
                  </li>
                  <li>
                    Transporteurs : Pour assurer la livraison des commandes.
                  </li>
                  <li>
                    Hébergement du site : Les données peuvent être hébergées par
                    notre prestataire d’hébergement, [nom de l’hébergeur], situé
                    en France.
                  </li>
                </ul>
                Ces prestataires sont contractuellement tenus de respecter la
                confidentialité de vos données et de les utiliser exclusivement
                pour les finalités pour lesquelles elles leur sont fournies.
              </p>

              <h3 className="text-lg">
                6. Vos droits sur vos données personnelles
              </h3>
              <p>
                Conformément au RGPD, vous disposez des droits suivants
                concernant vos données personnelles :
                <ul className="list-disc">
                  <li>
                    Droit d’accès : Vous pouvez demander à accéder à vos données
                    personnelles.
                  </li>
                  <li>
                    Droit de rectification : Vous pouvez demander à corriger des
                    données inexactes ou incomplètes.
                  </li>
                  <li>
                    Droit à l’effacement : Vous pouvez demander la suppression
                    de vos données dans certaines conditions (par exemple, si
                    elles ne sont plus nécessaires aux finalités pour lesquelles
                    elles ont été collectées).
                  </li>
                  <li>
                    Droit à la limitation du traitement : Vous pouvez demander
                    que le traitement de vos données soit limité dans certaines
                    situations.
                  </li>
                  <li>
                    Droit d’opposition : Vous pouvez vous opposer à
                    l’utilisation de vos données pour certaines finalités, comme
                    le marketing.
                  </li>
                  <li>
                    Droit à la portabilité : Vous pouvez demander à recevoir vos
                    données personnelles dans un format structuré et couramment
                    utilisé.
                  </li>
                </ul>
                Pour exercer ces droits, contactez-nous à l'adresse email
                suivante : [email de contact].
              </p>

              <h3 className="text-lg">7. Sécurité des données</h3>
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et
                organisationnelles pour protéger vos données personnelles contre
                tout accès, modification ou divulgation non autorisés.
              </p>

              <h3 className="text-lg">
                8. Modifications de la politique de confidentialité
              </h3>
              <p>
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. En cas de modification
                importante, nous informerons les utilisateurs via le site ou par
                email.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="cookie"
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
                  style={{ marginRight: "5%", width: "14.5%" }}
                />
                Politique de Cookies
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                La présente Politique de Cookies décrit la manière dont le site
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>{" "}
                utilise des cookies et des technologies similaires pour
                améliorer votre expérience de navigation et analyser la
                fréquentation du site.
              </p>

              <h3 className="text-lg">1. Qu’est-ce qu’un cookie ?</h3>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal
                (ordinateur, tablette, smartphone) lors de votre visite sur un
                site web. Il permet au site de reconnaître votre appareil et de
                mémoriser certaines informations, comme vos préférences ou vos
                identifiants de connexion.
              </p>

              <h3 className="text-lg">2. Cookies utilisés sur notre site</h3>
              <p>
                Nous utilisons différents types de cookies sur notre site :
                <ul className="list-disc">
                  <li>
                    Cookies strictement nécessaires : Ces cookies sont
                    indispensables pour le bon fonctionnement du site et ne
                    peuvent pas être désactivés dans nos systèmes. Ils sont
                    généralement configurés en réponse à vos actions, comme
                    l'accès à des zones sécurisées du site ou la gestion de
                    votre panier.
                  </li>
                  <li>
                    Cookies de performance : Ces cookies nous permettent de
                    mesurer et d'améliorer les performances de notre site,
                    notamment en analysant la fréquentation des pages. Les
                    données collectées sont anonymes.
                  </li>
                  <li>
                    Cookies de fonctionnalité : Ces cookies permettent au site
                    de mémoriser vos choix (langue, identifiant, préférences de
                    navigation) pour améliorer votre expérience utilisateur.
                  </li>
                  <li>
                    Cookies de publicité : Ces cookies peuvent être placés par
                    nos partenaires publicitaires. Ils sont utilisés pour vous
                    proposer des publicités pertinentes sur d’autres sites en
                    fonction de vos intérêts.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">3. Gestion des cookies</h3>
              <p>
                Lors de votre première visite sur le site, un bandeau vous
                informe de l’utilisation des cookies et vous propose d'accepter
                ou de paramétrer leur utilisation. Vous pouvez à tout moment
                modifier vos préférences en matière de cookies via les
                paramètres de votre navigateur.
                <ul className="list-disc">
                  <li>
                    Accepter ou refuser les cookies : Vous pouvez configurer
                    votre navigateur pour bloquer ou supprimer les cookies.
                    Cependant, certaines fonctionnalités du site peuvent être
                    affectées si vous désactivez certains cookies.
                  </li>
                  <li>
                    Paramétrage des cookies dans votre navigateur : Voici
                    comment gérer les cookies dans certains navigateurs courants
                    :
                    <ul className="list-disc">
                      <li>
                        Chrome : Menu &gt; Paramètres &gt; Confidentialité et
                        sécurité &gt; Cookies et autres données.
                      </li>
                      <li>
                        Firefox : Menu &gt; Options &gt; Vie privée et sécurité
                        &gt; Cookies et données.
                      </li>
                      <li>
                        Safari : Menu &gt; Préférences &gt; Confidentialité &gt;
                        Gérer les cookies.
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">4. Durée de conservation des cookies</h3>
              <p>
                Les cookies sont conservés pour une durée maximale de 13 mois à
                compter de leur dépôt sur votre terminal. Passé ce délai, votre
                consentement sera à nouveau demandé.
              </p>

              <h3 className="text-lg">
                5. Modifications de la politique de cookies
              </h3>
              <p>
                Nous nous réservons le droit de modifier cette politique de
                cookies à tout moment. Toute modification sera publiée sur cette
                page et, si nécessaire, vous en serez informé lors de votre
                prochaine visite sur le site.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
