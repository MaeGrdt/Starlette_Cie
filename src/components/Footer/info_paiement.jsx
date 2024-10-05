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
            aria-label="Paiements"
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
                Informations sur les Paiements
              </span>
            }
            className={`px-10 text-nowrap`}
          >
            <div className="article">
              <p>
                Sur Starlette & Cie, nous avons mis en place un système de
                paiement sécurisé et fiable pour assurer une expérience d'achat
                simple et sans tracas. Nous utilisons Stripe, une plateforme de
                paiement reconnue, pour traiter toutes vos transactions.
              </p>

              <h3 className="text-lg">1. Modes de paiement acceptés</h3>
              <p>
                Grâce à notre partenariat avec Stripe, nous acceptons plusieurs
                méthodes de paiement courantes et sécurisées :
                <ul className="list-disc">
                  <li>
                    Carte bancaire : Nous acceptons les cartes de crédit et de
                    débit, y compris Visa, Mastercard, American Express,
                    Discover, et autres cartes internationales.
                  </li>
                  <li>
                    Apple Pay et Google Pay : Pour les clients qui préfèrent
                    utiliser leurs portefeuilles numériques, ces options sont
                    disponibles sur les appareils compatibles.
                  </li>
                  <li>
                    Autres méthodes locales (si applicable) : Stripe permet
                    d'intégrer des méthodes de paiement locales en fonction de
                    votre emplacement géographique. Contactez-nous si vous
                    souhaitez savoir quelles méthodes sont disponibles dans
                    votre pays.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">
                2. Sécurité des transactions avec Stripe
              </h3>
              <p>
                Toutes les transactions effectuées sur notre site sont traitées
                de manière sécurisée via Stripe. Voici quelques éléments clés
                pour vous rassurer sur la sécurité de vos paiements :
                <ul className="list-disc">
                  <li>
                    Cryptage SSL : Vos informations bancaires sont protégées
                    grâce à un cryptage SSL 256 bits lors de toutes les
                    transactions.
                  </li>
                  <li>
                    PCI-DSS Compliance : Stripe est certifié conforme aux normes
                    de sécurité PCI-DSS (Payment Card Industry Data Security
                    Standard), garantissant la protection de vos données de
                    carte bancaire.
                  </li>
                  <li>
                    Tokenisation : Stripe utilise une technologie de
                    tokenisation pour sécuriser vos informations bancaires. Cela
                    signifie que vos données sensibles ne sont jamais stockées
                    sur nos serveurs ni transmises non sécurisées.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">3. Processus de paiement</h3>
              <p>
                Voici comment se déroule une transaction lorsque vous passez
                commande sur Starlette & Cie :
                <ul className="list-disc">
                  <li>
                    Validation de la commande : Après avoir sélectionné vos
                    produits et entré vos informations de livraison, vous serez
                    redirigé vers une page de paiement Stripe.
                  </li>
                  <li>
                    Paiement sécurisé : Vous entrez vos informations de carte
                    bancaire ou utilisez Apple Pay/Google Pay pour finaliser la
                    transaction. Une confirmation de paiement s'affichera
                    immédiatement une fois la transaction validée.
                  </li>
                  <li>
                    Confirmation par email : Vous recevrez un email de
                    confirmation de commande une fois que votre paiement aura
                    été traité avec succès.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">4. Facturation et reçus</h3>
              <p>
                Après chaque transaction, une facture détaillée vous sera
                envoyée par email. Ce document inclura toutes les informations
                relatives à votre commande, telles que :
                <ul className="list-disc">
                  <li>Le détail des produits achetés</li>
                  <li>Le montant total (TTC)</li>
                  <li>Les frais de livraison</li>
                  <li>
                    Les informations légales, y compris la TVA et le numéro de
                    commande
                  </li>
                </ul>
                Vous pouvez également télécharger cette facture directement
                depuis votre compte client sur notre site, si vous en avez un.
              </p>

              <h3 className="text-lg">5. Politique de remboursement</h3>
              <p>
                Si vous souhaitez annuler ou retourner une commande, nous
                appliquerons un remboursement via la méthode de paiement
                utilisée initialement (Stripe). Voici les détails de notre
                politique de remboursement :
                <ul className="list-disc">
                  <li>
                    Délai de remboursement : Les remboursements seront effectués
                    sous 7 à 10 jours ouvrés, en fonction des délais de
                    traitement de Stripe et de votre banque.
                  </li>
                  <li>
                    Montant remboursé : Le montant remboursé sera crédité sur la
                    même carte bancaire ou compte utilisé pour l'achat.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">6. Problèmes de paiement</h3>
              <p>
                En cas de problème lors du traitement de votre paiement (carte
                refusée, erreur technique, etc.), vous serez informé
                immédiatement et nous vous proposerons des alternatives pour
                finaliser votre achat.
                <ul className="list-disc">
                  <li>
                    Carte refusée : Si votre carte est refusée, veuillez
                    vérifier les informations fournies ou essayer une autre
                    méthode de paiement. Si le problème persiste, nous vous
                    recommandons de contacter votre banque.
                  </li>
                  <li>
                    Problèmes techniques : Si une erreur technique survient lors
                    du paiement, veuillez réessayer ou nous contacter à [email
                    de contact] ou au [numéro de téléphone] pour obtenir de
                    l’aide.
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">7. Protection contre la fraude</h3>
              <p>
                Afin de protéger nos clients contre les fraudes, Stripe utilise
                des outils avancés de détection des fraudes, tels que le 3D
                Secure (également connu sous le nom d'authentification forte).
                En cas de transaction suspecte, un processus d’authentification
                supplémentaire peut être demandé pour confirmer votre identité.
                <ul className="list-disc">
                  <li>
                    3D Secure : Ce système ajoute une couche de sécurité
                    supplémentaire lors du paiement en ligne en vous demandant
                    de confirmer votre identité auprès de votre banque (par SMS
                    ou via une application bancaire).
                  </li>
                </ul>
              </p>

              <h3 className="text-lg">8. Conditions générales de Stripe</h3>
              <p>
                En effectuant un paiement sur Starlette & Cie, vous acceptez
                également les conditions générales de Stripe. Pour plus
                d’informations, vous pouvez consulter les{" "}
                <a href="https://stripe.com/fr/legal/consumer" className="underline">
                  Conditions d’utilisation de Stripe
                </a>
                .
              </p>

              <h3 className="text-lg">9. Nous contacter</h3>
              <p>
                Si vous avez des questions concernant les paiements ou
                rencontrez des difficultés lors du processus de commande,
                n’hésitez pas à nous contacter via les moyens suivants :
                <ul className="list-disc">
                  <li>Par email : [email de contact]</li>
                  <li>Par téléphone : [numéro de téléphone]</li>
                </ul>
                Nous sommes là pour vous aider et nous assurer que votre
                expérience de paiement soit fluide et sécurisée.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
