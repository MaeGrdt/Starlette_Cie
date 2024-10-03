import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

export default function Legales_client() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <>
      <div className="m-5">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Accordion 1"
          ></AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Accordion 2"
          ></AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Accordion 3"
          ></AccordionItem>
        </Accordion>
        <h1 className="text-3xl">Mentions Légales</h1>

        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l’économie numérique, il est précisé aux
          utilisateurs du site Fromagerie en Ligne l’identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h3 className="text-xl">Édition du site</h3>

        <p>
          Le présent site, accessible à l’URL{" "}
          <span className="underline">https://fromagerie-en-ligne.com</span>,
          est édité par :
        </p>

        <p>
          Ludivine Girardot, résidant à 38 rue de la gueurge 52190 Prangey, de
          nationalité française, immatriculée au Registre du Commerce et des
          Sociétés sous le numéro 911774016. <br /> Le numéro individuel
          d’identification TVA de l’éditeur est : FR4891174016.
        </p>

        <h3 className="text-xl">Hébergement</h3>

        <p>
          Le Site est hébergé par la société 1&1 IONOS, située au 7 Place de la
          Gare – 57200 Sarreguemines, France. <br /> Pour toute demande relative
          à l'hébergement, vous pouvez les contacter par téléphone au : (+33 9
          70 80 89 11).
        </p>

        <h3 className="text-xl">Directeur de publication</h3>

        <p>Le Directeur de la publication du Site est Ludivine Girardot.</p>

        <h3 className="text-xl">Nous contacter</h3>

        <p>
          Pour toute question, réclamation ou information relative à nos
          services ou produits, vous pouvez nous contacter via les moyens
          suivants : <br />
          Par téléphone : +33 6 31 41 23 36 <br /> Par email :
          lgirardot1998@gmail.com <br /> Par courrier : 38 rue de la gueurge
          52190 Prangey
        </p>

        <h3 className="text-xl">Données personnelles</h3>

        <p>
          Le traitement de vos données à caractère personnel est régi par notre
          <span className="underline">
            {" "}
            Charte de Protection des Données Personnelles
          </span>
          , conforme au Règlement Général sur la Protection des Données (RGPD)
          n° 2016/679 du 27 avril 2016. Vous pouvez consulter cette charte
          directement sur notre site.
        </p>

        <p>
          Nous veillons à la protection et à la confidentialité de vos données
          personnelles et nous nous engageons à ne pas les transmettre à des
          tiers sans votre consentement explicite, sauf dans le cadre de
          l'exécution de nos services (par exemple pour la livraison de vos
          commandes).
        </p>

        <h1 className="text-3xl">Service Client</h1>

        <p>
          Pour toute assistance liée à la commande de nos fromages ou à
          l’utilisation du site, notre service client est à votre disposition :
          <br /> Horaires d’ouverture : Du lundi au vendredi, de 9h00 à 18h00.
          <br /> Par téléphone : +33 6 31 41 23 36 (appel non surtaxé). <br />{" "}
          Par email : lgirardot1998@gmail.com – Nous vous répondrons dans un
          délai de 24h ouvrables.
        </p>

        <h3 className="text-xl">Retours et Remboursements</h3>

        <p>
          Conformément à la législation en vigueur, vous disposez d’un délai de
          14 jours à compter de la réception de votre commande pour exercer
          votre droit de rétractation, à condition que les produits n'aient pas
          été ouverts ou altérés. Pour plus d’informations, veuillez consulter
          nos
          <span className="underline">Conditions Générales de Vente</span>.
        </p>

        <h3 className="text-xl">Livraison</h3>
        <p>
          Nos produits sont livrés dans un emballage réfrigéré afin de garantir
          leur fraîcheur. Nous vous invitons à consulter notre page{" "}
          <span className="underline">Livraison et Expédition</span> pour
          connaître les délais et modalités de livraison.
        </p>

        <Divider />

        <h2 className="text-2xl">Informations complémentaires</h2>

        <p>
          Cookies : Ce site utilise des cookies pour améliorer l’expérience
          utilisateur. Vous pouvez gérer vos préférences depuis la page{" "}
          <span className="underline">Politique des Cookies</span>.
        </p>

        <p>
          Propriété intellectuelle : Tous les contenus présents sur ce site
          (textes, images, logos) sont protégés par le droit d'auteur. Toute
          reproduction totale ou partielle est strictement interdite sans
          autorisation préalable.
        </p>
      </div>
    </>
  );
}
