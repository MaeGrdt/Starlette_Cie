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
                Les présentes Conditions Générales de Vente (CGV) régissent
                l’ensemble des relations commerciales entre [Nom de la fromagère
                ou de la boutique], propriétaire des produits vendus sur le site{" "}
                <span className="underline italic">
                  https://starlette-and-cie.com
                </span>
                , et tout client effectuant une commande sur le site.
              </p>

              <h3 className="text-lg">1. Présentation des produits et prix</h3>
              <p>
                Les produits proposés à la vente sur le site sont des produits
                alimentaires, principalement des fromages et autres produits
                artisanaux.
                <ul className="list-disc">
                  <li>
                    Description des produits : Chaque produit est présenté avec
                    une fiche détaillée indiquant les caractéristiques
                    essentielles (composition, poids, origine, etc.). Les photos
                    des produits sont fournies à titre illustratif et ne sont
                    pas contractuelles.
                  </li>
                  <li>
                    Prix : Les prix sont indiqués en euros, toutes taxes
                    comprises (TTC), hors frais de livraison. [Nom de la
                    fromagère ou de la boutique] se réserve le droit de modifier
                    les prix à tout moment, mais les produits seront facturés
                    sur la base des tarifs en vigueur au moment de la validation
                    de la commande.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">2. Modalités de commande</h3>
              <p>
                Toute commande effectuée sur le site implique l'acceptation des
                présentes CGV.
                <ul className="list-disc">
                  <li>
                    Processus de commande : Pour passer commande, le client doit
                    suivre les étapes suivantes :
                    <ol className="list-decimal">
                      <li>Sélection des produits dans le panier.</li>
                      <li>Validation du panier.</li>
                      <li>Saisie des informations de livraison.</li>
                      <li>Choix du mode de paiement.</li>
                      <li>Confirmation de la commande.</li>
                    </ol>
                  </li>
                  <li>
                    Confirmation de la commande : Un email de confirmation sera
                    envoyé au client après la validation de la commande,
                    récapitulant les produits commandés, le montant total, ainsi
                    que les informations de livraison.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">3. Modalités de livraison</h3>
              <p>
                Les produits commandés sur le site sont livrés à l’adresse
                indiquée par le client lors de la commande.
                <ul className="list-disc">
                  <li>
                    Délais de livraison : Les délais de livraison varient en
                    fonction du lieu de destination et sont mentionnés lors de
                    la validation de la commande. En général, les délais varient
                    entre [indiquer le délai estimé, ex. 2 à 5 jours ouvrés].
                  </li>
                  <li>
                    Frais de livraison : Les frais de livraison sont calculés en
                    fonction du poids de la commande et du lieu de livraison.
                    Ils seront clairement indiqués avant la validation de la
                    commande.
                  </li>
                  <li>
                    Problèmes de livraison : En cas de retard ou de problème
                    lors de la livraison (produit manquant ou endommagé), le
                    client doit contacter [Nom de la fromagère ou de la
                    boutique] dans un délai de 48 heures à compter de la
                    réception de la commande.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">
                4. Droit de rétractation et politique de retour
              </h3>
              <p>
                Conformément aux dispositions du Code de la consommation, le
                client dispose d'un droit de rétractation de 14 jours à compter
                de la réception des produits, sauf pour les denrées périssables,
                telles que les produits alimentaires, qui sont exclus du droit
                de rétractation.
                <ul className="list-disc">
                  <li>
                    Conditions de retour : Pour les produits non périssables, le
                    client doit renvoyer le produit dans son état d'origine, non
                    ouvert et non endommagé, dans un délai de 14 jours suivant
                    la notification de rétractation. Les frais de retour sont à
                    la charge du client.
                  </li>
                  <li>
                    Remboursement : En cas de retour accepté, [Nom de la
                    fromagère ou de la boutique] remboursera le client dans un
                    délai de 14 jours à compter de la réception du produit
                    retourné, via le moyen de paiement utilisé lors de la
                    commande.
                  </li>
                  <li>
                    Produits périssables : Les produits alimentaires, en
                    particulier les fromages, ne peuvent pas faire l'objet d'un
                    retour ni d'un remboursement en raison de leur nature
                    périssable. Toutefois, si un produit est défectueux ou ne
                    correspond pas à la commande, le client peut contacter le
                    service client pour obtenir un échange ou un remboursement.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">5. Informations sur les allergènes</h3>
              <p>
                Les produits alimentaires vendus sur le site peuvent contenir
                des allergènes (lait, noix, etc.). Il est recommandé aux clients
                de consulter les fiches produits détaillées ou de contacter le
                service client pour toute question relative aux allergènes avant
                de passer commande.
              </p>

              <h3 className="text-lg">6. Conditions de paiement</h3>
              <p>
                Le paiement des produits s’effectue au moment de la commande via
                les moyens de paiement sécurisés disponibles sur le site.
                <ul className="list-disc">
                  <li>
                    Moyens de paiement acceptés : Les cartes de crédit (Visa,
                    Mastercard), PayPal, et autres moyens mentionnés sur le
                    site.
                  </li>
                  <li>
                    Sécurité des paiements : Toutes les transactions sont
                    sécurisées via un protocole de cryptage des données.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">7. Responsabilité</h3>
              <p>
                [Nom de la fromagère ou de la boutique] décline toute
                responsabilité en cas de non-respect de la législation du pays
                dans lequel les produits sont livrés. Il appartient au client de
                vérifier auprès des autorités locales les possibilités
                d’importation ou d’utilisation des produits commandés.
              </p>

              <h3 className="text-lg">8. Données personnelles</h3>
              <p>
                Les informations personnelles collectées lors de la commande
                sont nécessaires pour la gestion des commandes et des
                livraisons. Elles sont strictement confidentielles et ne seront
                pas transmises à des tiers, sauf en cas de nécessité pour le
                traitement des commandes (livraison, paiement).
                <br /> Pour plus d'informations, consultez notre Politique de
                Confidentialité.
              </p>

              <h3 className="text-lg">9. Litiges et droit applicable</h3>
              <p>
                En cas de litige, les présentes CGV sont soumises à la loi
                française. Toute réclamation peut être adressée à [Nom de la
                fromagère ou de la boutique] par courrier ou par email. Si
                aucune solution amiable n’est trouvée, les tribunaux français
                seront compétents.
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
              <h3 className="text-lg">1. Droit de rétractation</h3>
              <p>
                Le client dispose d’un délai de 14 jours à compter de la
                réception des produits non périssables pour exercer son droit de
                rétractation sans avoir à justifier de motifs ni à payer de
                pénalités. Ce droit ne s’applique pas aux produits alimentaires
                périssables, tels que les fromages.
              </p>

              <h3 className="text-lg">2. Conditions de retour</h3>
              <p>
                Les produits doivent être retournés dans leur emballage
                d’origine, non ouverts et en parfait état. Les frais de retour
                sont à la charge du client, sauf en cas de produit défectueux ou
                d’erreur dans la commande.
              </p>

              <h3 className="text-lg">3. Remboursement</h3>
              <p>
                En cas de retour accepté, le remboursement sera effectué dans un
                délai de 14 jours après réception et vérification des produits.
                Le remboursement se fera via le même moyen de paiement que celui
                utilisé lors de la commande.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
