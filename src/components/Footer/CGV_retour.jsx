import { Accordion, AccordionItem } from "@nextui-org/react";
import stars from "../../assets/icons/icon-star(clair).svg";
import React from "react";
import "./style.css";

export default function CVG_retour() {
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
            aria-label="CGV"
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
                Conditions Générales de Vente (CGV)
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                Les présentes{" "}
                <span className="underline italic">
                  Conditions Générales de Vente (CGV)
                </span>{" "}
                régissent l’ensemble des relations commerciales entre{" "}
                <span className="underline italic">Ludivine Girardot</span>,
                propriétaire des produits vendus sur le site{" "}
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>
                , et{" "}
                <span className="underline italic">
                  tout client effectuant une commande sur le site
                </span>
                .
              </p>

              <h3 className="text-lg">1. Présentation des produits et prix</h3>
              <p>
                Les produits proposés à la vente sur le site sont des{" "}
                <span className="underline italic">produits alimentaires</span>,
                principalement des fromages et autres produits laitiers.
                <ul className="list-disc">
                  <li>
                    <u>Description des produits :</u>
                    <br />
                    Chaque produit est présenté avec une fiche détaillée
                    indiquant les caractéristiques essentielles (composition,
                    poids, affinge, etc.). Les photos des produits sont fournies
                    à titre illustratif et ne sont pas contractuelles.
                  </li>
                  <li>
                    <u>Prix :</u>
                    <br />
                    Les prix sont indiqués en euros, toutes taxes comprises
                    (TTC), hors frais de livraison. Ludivine Girardot se réserve
                    le droit de modifier les prix à tout moment, mais les
                    produits seront facturés sur la base des tarifs en vigueur
                    au moment de la validation de la commande.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">2. Modalités de commande</h3>
              <p>
                Toute commande effectuée sur le site implique{" "}
                <span className="underline italic">
                  l'acceptation des présentes CGV
                </span>
                .
                <ul className="list-disc">
                  <li>
                    <u>Processus de commande :</u>
                    <br />
                    Pour passer commande, le client doit suivre les étapes
                    suivantes :
                    <ol className="list-decimal">
                      <li>Sélection des produits dans le panier.</li>
                      <li>Validation du panier.</li>
                      <li>Saisie des informations de livraison.</li>
                      <li>Choix du mode de paiement.</li>
                      <li>Confirmation de la commande.</li>
                    </ol>
                  </li>
                  <li>
                    <u>Confirmation de la commande :</u>
                    <br />
                    Un email de confirmation sera envoyé au client après la
                    validation de la commande, récapitulant les produits
                    commandés, le montant total, ainsi que les informations de
                    livraison.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">3. Modalités de livraison</h3>
              <p>
                Les produits commandés sur le site sont remis en main propre
                dans le point de vente choisi par le client lors de la commande.
                Chaque point de vente a un jour, un horaire et un lieu
                spécifique (par exemple, un parking de supermarché), qui sont
                clairement indiqués sur{" "}
                <a href="point-de-vente">la page dédiée</a>.
                <ul className="list-disc">
                  <li>
                    <u>Délai de mise à disposition :</u>
                    <br />
                    Les produits sont disponibles à la date, à l'horaire et au
                    lieu spécifiés pour chaque point de vente.
                  </li>
                  <li>
                    <u>Aucun frais supplémentaire :</u>
                    <br />
                    Il n'y a ni frais de déplacement, ni frais de préparation.
                    Le client n'a qu'à se rendre au point de vente choisi pour
                    récupérer ses produits en main propre.
                  </li>
                  <li>
                    <u>Retour et échange des produits :</u>
                    <br />
                    Les clients disposent d’un délai de 2 jours à compter de la
                    remise en main propre pour signaler un problème avec leurs
                    produits. Il est recommandé de nous contacter avant tout
                    retour. Nous évaluerons la situation et informerons le
                    client s’il peut jeter ou non le produit.
                  </li>
                  <li>
                    <u>Problèmes lors de la récupération :</u>
                    <br />
                    En cas de problème avec la commande Ludivine Girardot, le
                    client doit contacter [Nom de la propriétaire ou de la
                    boutique] dans un délai de 48 heures suivant la récupération
                    des produits.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">4. Informations sur les allergènes</h3>
              <p>
                Les produits alimentaires vendus sur le site peuvent contenir
                des allergènes (lait, noix, etc.). Il est recommandé aux clients
                de consulter les fiches produits détaillées ou de contacter le
                service client pour toute question relative aux allergènes avant
                de passer commande.
              </p>

              <h3 className="text-lg">5. Conditions de paiement</h3>
              <p>
                Le paiement des produits s’effectue au moment de la commande via
                les moyens de paiement sécurisés disponibles sur le site.
                <ul className="list-disc">
                  <li>
                    <u>Moyens de paiement acceptés :</u>
                    <br />
                    Les paiements sont effectués via la{" "}
                    <span className="underline italic">plateforme Stripe</span>,
                    qui accepte les principales cartes de crédit (Visa,
                    Mastercard, etc.) ainsi que tout autre moyen de paiement
                    disponible sur le site.
                  </li>
                  <li>
                    <u>Sécurité des paiements :</u>
                    <br />
                    Toutes les transactions sont sécurisées via le{" "}
                    <span className="underline italic">
                      protocole de cryptage de Stripe
                    </span>
                    , garantissant la protection des données sensibles.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">6. Responsabilité</h3>
              <p>
                Ludivine Girardot{" "}
                <span className="underline italic">
                  décline toute responsabilité
                </span>{" "}
                en cas de{" "}
                <span className="underline italic">
                  non-respect des recommandations de conservation et
                  d'utilisation des produits
                </span>
                . Il appartient au client de s'assurer que les produits
                commandés sont consommés dans les délais et conditions
                appropriés.
              </p>

              <h3 className="text-lg">7. Données personnelles</h3>
              <p>
                Les informations personnelles collectées lors de la commande
                sont nécessaires pour la gestion des commandes et des points de
                vente. Elles sont{" "}
                <span className="underline italic">
                  strictement confidentielles
                </span>{" "}
                et ne seront pas transmises à des tiers,{" "}
                <span className="underline italic">
                  sauf en cas de nécessité pour le traitement des commandes
                </span>{" "}
                (notamment pour les paiements via l'API de Stripe).
                <br />
                <br />
                Pour plus d'informations, veuillez consulter notre{" "}
                <a
                  href="/mentions_politique?tab=confi_cookie"
                  className="underline"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>

              <h3 className="text-lg">8. Litiges et droit applicable</h3>
              <p>
                En cas de litige, les présentes CGV sont soumises à la loi
                française. Toute réclamation peut être adressée à Ludivine
                Girardot par courrier ou par email. Si aucune solution amiable
                n’est trouvée, les tribunaux français seront compétents.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Politique de Retour"
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
                Politique de Retour
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <h3 className="text-lg h3_expec">1. Droit de rétractation</h3>
              <p>
                Conformément à la législation en vigueur,{" "}
                <span className="underline italic">
                  le client ne dispose pas d’un droit de rétractation
                </span>{" "}
                pour les produits alimentaires périssables, tels que les
                fromages, une fois la commande validée.
              </p>

              <h3 className="text-lg">2. Conditions de retour</h3>
              <p>
                Les clients doivent{" "}
                <span className="underline italic">
                  signaler tout problème avec leurs produits dans un délai de 2
                  jours suivant la remise en main propre
                </span>
                . Étant donné la nature périssable des fromages, nous vous
                conseillons de nous contacter pour évaluer si le produit doit
                être retourné ou jeté. Si un retour est nécessaire, il doit être
                effectué dans son emballage d’origine.
              </p>

              <h3 className="text-lg">3. Remboursement</h3>
              <p>
                En cas de retour accepté, le{" "}
                <span className="underline italic">
                  remboursement sera effectué dans un délai de 14 jours
                </span>{" "}
                après réception et vérification des produits. Le remboursement
                se fera via le même moyen de paiement que celui utilisé lors de
                la commande. Dans la majorité des cas, pour les produits
                périssables, nous vous conseillerons de jeter le produit plutôt
                que de le retourner.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
