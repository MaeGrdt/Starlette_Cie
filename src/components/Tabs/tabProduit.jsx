import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import stars5 from "../../assets/icons/5-stars.svg";
import stars45 from "../../assets/icons/4.5-stars.svg";
import stars4 from "../../assets/icons/4-stars.svg";
import stars35 from "../../assets/icons/3.5-stars.svg";
import stars3 from "../../assets/icons/3-stars.svg";
import stars25 from "../../assets/icons/2.5-stars.svg";
import stars2 from "../../assets/icons/2-stars.svg";
import stars15 from "../../assets/icons/1.5-stars.svg";
import stars1 from "../../assets/icons/1-stars.svg";
import stars05 from "../../assets/icons/0.5-stars.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TabProduit() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selected, setSelected] = useState("description");
  const [affinageOptions2, setAffinageOptions2] = useState([]);
  const [enrobageOptions2, setEnrobageOptions2] = useState([]);
  const [poids, setPoids] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/produits/${id}`)
      .then((response) => {
        setProduct(response.data);

        // Extraire les variantes du produit
        const variants = response.data.produitsVariants;

        // Poids du premier produit variant (ou par défaut)
        if (variants && variants.length > 0) {
          setPoids(variants[0].poids); // Assumer que chaque variante a le même poids
        }

        // Extraire les affinages et enrobages uniques
        const affinageSet = new Set();
        const enrobageSet = new Set();

        variants.forEach((variant) => {
          if (variant.affinage && !affinageSet.has(variant.affinage)) {
            affinageSet.add(variant.affinage);
          }
          if (variant.id_enrobage && variant.id_enrobage.nom_enrobage) {
            enrobageSet.add(variant.id_enrobage.nom_enrobage);
          }
        });

        // Mettre à jour les états avec les valeurs uniques
        setAffinageOptions2(Array.from(affinageSet));
        setEnrobageOptions2(Array.from(enrobageSet));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du produit:", error);
      });
  }, [id]);

  const starsMap = {
    "5.0": stars5,
    4.5: stars45,
    "4.0": stars4,
    3.5: stars35,
    "3.0": stars3,
    2.5: stars25,
    "2.0": stars2,
    1.5: stars15,
    "1.0": stars1,
    0.5: stars05,
  };

  const list = [
    {
      user: "John Doe",
      note: "3.5",
      commentaire: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      user: "Jane Doe",
      note: "4.0",
      commentaire:
        "Curabitur luctus accumsan orci, ut vulputate purus venenatis ac.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
  ];

  if (!product) {
    return <Spinner color="danger" className="mt-5" />;
  }

  return (
    <>
      <Tabs
        aria-label="Options"
        variant="underlined"
        selectedKey={selected}
        onSelectionChange={setSelected}
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-danger-600",
          tab: "max-w-fit px-0 h-12 text-black",
          tabContent: "group-data-[selected=true]:text-danger-600",
        }}
      >
        <Tab
          key="description"
          style={{ cursor: "default" }}
          title={
            <div className="flex items-center space-x-2 px-2">
              <img src={stars} alt="icone d'étoiles" className="w-6" />
              <span>Description</span>
            </div>
          }
        >
          <Card className="bg-danger-50">
            <div
              className="bg-white p-3 m-3"
              style={{ borderRadius: "0.85rem" }}
            >
              <div
                className="flex flex-col lg:flex-row gap-2 p-2"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
              <div className="flex flex-col lg:flex-row gap-2 p-2 grid justify-items-stretch">
                <p className="text-base justify-self-end">{poids} g</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 p-2">
                <p className="underline text-base">Composition :</p>
                {product.composition}
              </div>
            </div>
          </Card>
        </Tab>

        <Tab
          key="info"
          style={{ cursor: "default" }}
          title={
            <div className="flex items-center space-x-2 px-2">
              <img src={stars} alt="icone d'étoiles" className="w-6" />
              <span>Informations complémentaires</span>
            </div>
          }
        >
          <Card className="bg-danger-50 p-3">
            <div className="flex flex-col lg:flex-row gap-2">
              <Table aria-label="Tableau information" hideHeader shadow="none">
                <TableHeader>
                  <TableColumn></TableColumn>
                  <TableColumn></TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    {/* En-tête de ligne */}
                    <TableCell className="row-header rounded-t-md">
                      <b>Poids</b>
                    </TableCell>
                    {/* Donnée de ligne */}
                    <TableCell>
                      <p>{poids} g</p>
                    </TableCell>
                  </TableRow>
                  <TableRow key="2">
                    {/* En-tête de ligne */}
                    <TableCell className="row-header">
                      <b>Catégorie</b>
                    </TableCell>
                    {/* Donnée de ligne */}
                    <TableCell>
                      <p>{product.categorie}</p>
                    </TableCell>
                  </TableRow>
                  <TableRow key="3">
                    {/* En-tête de ligne */}
                    <TableCell className="row-header">
                      <b>Affinage</b>
                    </TableCell>
                    {/* Donnée de ligne */}
                    <TableCell>
                      <p>{affinageOptions2.join(", ")}</p>
                    </TableCell>
                  </TableRow>
                  <TableRow key="4">
                    {/* En-tête de ligne */}
                    <TableCell className="row-header rounded-b-md">
                      <b>Enrobage</b>
                    </TableCell>
                    {/* Donnée de ligne */}
                    <TableCell>
                      <p>{enrobageOptions2.join(", ")}</p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </Tab>

        <Tab
          key="avis"
          style={{ cursor: "default" }}
          title={
            <div className="flex items-center space-x-2 px-2">
              <img src={stars} alt="icone d'étoiles" className="w-6" />
              <span>Avis</span>
            </div>
          }
        >
          <Card className="bg-danger-50 p-3">
            <div className="flex flex-col space-y-3">
              {list.map((item, index) => (
                <Card className="border-none shadow-none" key={index}>
                  <CardBody>
                    <div className="flex gap-3 items-center">
                      <Avatar src={item.avatar} size="sm" />
                      <h3 className="mb-1 md:mb-0">{item.user}</h3>
                      {/* Affiche l'image d'étoiles correspondante */}
                      <img
                        src={starsMap[item.note]}
                        alt={`${item.note} stars`}
                        className="w-20"
                      />
                    </div>

                    <div className="flex flex-col 2xl:ml-2">
                      <p className="mt-3">{item.commentaire}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
}
