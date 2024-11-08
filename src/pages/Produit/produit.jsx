import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  Image,
  Button,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import like from "../../assets/icons/icon-étoile(vide).svg";
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
import moins from "../../assets/icons/moins.svg";
import plus from "../../assets/icons/plus.svg";
import { CustomCheckbox } from "../../components/Checkbox/CustomCheckbox";
import { useParams } from "react-router-dom";
import "./style_produit.css";
import axios from "axios";

export default function Produits() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState("description");
  const [groupSelected, setGroupSelected] = React.useState([]);
  const [token, setToken] = useState(null);
  const [affinageSelected, setAffinageSelected] = useState("");
  const [enrobageSelected, setEnrobageSelected] = useState("");
  const [affinageOptions, setAffinageOptions] = useState([]);
  const [enrobageOptions, setEnrobageOptions] = useState([]);
  const [productVariants, setProductVariants] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  // Requête pour récupérer les informations du produit
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/produits/${id}`)
      .then((response) => {
        setProduct(response.data);
        setProductVariants(response.data.produitsVariants); // Récupérer les variantes du produit

        const affinage = [];
        const enrobage = [];

        response.data.produitsVariants.forEach((variant) => {
          if (variant.affinage && !affinage.includes(variant.affinage)) {
            affinage.push(variant.affinage);
          }
          if (
            variant.id_enrobage &&
            !enrobage.some((e) => e.id === variant.id_enrobage.id)
          ) {
            enrobage.push(variant.id_enrobage);
          }
        });

        setAffinageOptions(affinage);
        setEnrobageOptions(enrobage);

        // Initialiser le prix avec la première variante disponible
        if (response.data.produitsVariants.length > 0) {
          setCurrentPrice(response.data.produitsVariants[0].prix / 100);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du produit:", error);
      });
  }, [id]);

  // Filtrer les variantes selon les options sélectionnées (affinage et enrobage)
  const filterVariants = () => {
    return productVariants.filter((variant) => {
      const isAffinageMatch =
        affinageSelected === "" || affinageSelected === variant.affinage; // Comparer avec une chaîne

      const isEnrobageMatch =
        enrobageSelected === "" || enrobageSelected === variant.id_enrobage?.id; // Comparer avec une chaîne

      return isAffinageMatch && isEnrobageMatch;
    });
  };

  useEffect(() => {
    if (productVariants.length > 0) {
      calculatePrice();
    }
  }, [affinageSelected, enrobageSelected, productVariants]);

  const calculatePrice = () => {
    const filteredVariants = filterVariants();
    if (filteredVariants.length > 0) {
      const minPrice =
        Math.min(...filteredVariants.map((variant) => variant.prix)) / 100;
      const maxPrice =
        Math.max(...filteredVariants.map((variant) => variant.prix)) / 100;

      if (minPrice === maxPrice) {
        setCurrentPrice(minPrice.toFixed(2));
      } else {
        setCurrentPrice(`${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}`);
      }
    } else {
      setCurrentPrice("N/A");
    }
  };

  const starsMap = {
    5.0: stars5,
    4.5: stars45,
    4.0: stars4,
    3.5: stars35,
    3.0: stars3,
    2.5: stars25,
    2.0: stars2,
    1.5: stars15,
    1.0: stars1,
    0.5: stars05,
  };

  if (!product) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className="grid m-2 mt-4 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
        <div className="flex w-full flex-col lg:col-start-2 xl:col-start-3 col-span-4 ">
          <div className="grid grid-cols-3">
            <div className="p-2">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt="{product.nom}"
                className="w-full object-cover"
                src={product.id_image?.url}
              />
              {/* Afficher le bouton seulement si le token est présent */}
              {token && (
                <Button
                  isIconOnly
                  radius="full"
                  variant="light"
                  className="absolute top-0 right-0 z-10"
                >
                  <img src={like} alt="icon étoile" className="size-7" />
                </Button>
              )}

              <div className="flex justify-start py-2 px-3 space-x-2">
                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />

                <Image
                  shadow="sm"
                  radius="md"
                  width="100%"
                  alt=""
                  className="w-full object-cover"
                  src="../img/fromage.jpg"
                />
              </div>
            </div>
            <div className="p-2 pl-5 col-span-2">
              <h1 className="text-2xl mt-2">{product.nom}</h1>
              <div className="flex justify-start">
                <img src={stars45} alt={`4.5 étoiles`} className="w-20 ml-5" />
                <p className="ml-5">(10 avis client)</p>
              </div>
              <p className="text-danger my-5 text-lg">{currentPrice} €</p>
              <p className="mb-4">
                <u>Composition :</u> {product.composition}
              </p>

              {/* Affichage des options d'affinage */}
              {/* {affinageOptions.length > 0 && (
                <div className="mb-4">
                  <p className="mb-1">
                    <u>Affinage :</u>
                  </p>
                  <CheckboxGroup
                    className="gap-1"
                    orientation="horizontal"
                    value={affinageSelected}
                    onChange={setAffinageSelected}
                  >
                    {affinageOptions.map((option, index) => (
                      <CustomCheckbox
                        key={index}
                        value={option}
                        className="capitalize"
                      >
                        {option}
                      </CustomCheckbox>
                    ))}
                  </CheckboxGroup>
                </div>
              )} */}

              {/* Affichage des options d'affinage */}
              {affinageOptions.length > 0 && (
                <div className="mb-4">
                  <p className="mb-1">
                    <u>Affinage :</u>
                  </p>
                  <CheckboxGroup
                    className="gap-1"
                    orientation="horizontal"
                    value={affinageSelected || ""} // Utilisation d'une chaîne vide si l'état est null
                    onChange={(value) => setAffinageSelected(value)} // Mise à jour de l'état
                  >
                    {affinageOptions.map((option, index) => (
                      <CustomCheckbox
                        key={index}
                        value={option}
                        className="capitalize"
                        checked={affinageSelected === option} // Vérification si l'option est sélectionnée
                        onChange={() => setAffinageSelected(option)} // Mise à jour de l'état
                        disabled={
                          affinageSelected && affinageSelected !== option
                        } // Désactivation des autres options
                      >
                        {option}
                      </CustomCheckbox>
                    ))}
                  </CheckboxGroup>
                </div>
              )}

              {/* Affichage des options d'enrobage */}
              {/* {enrobageOptions.length > 0 && (
                <div className="mb-4">
                  <p className="mb-1">
                    <u>Enrobage :</u>
                  </p>
                  <CheckboxGroup
                    className="gap-1"
                    orientation="horizontal"
                    value={enrobageSelected}
                    onChange={setEnrobageSelected}
                  >
                    {enrobageOptions.map((enrobage, index) => (
                      <CustomCheckbox
                        key={index}
                        value={enrobage.nom_enrobage}
                        className="capitalize"
                      >
                        {enrobage.nom_enrobage}
                      </CustomCheckbox>
                    ))}
                  </CheckboxGroup>
                </div>
              )} */}

              {/* Affichage des options d'enrobage */}
              {enrobageOptions.length > 0 && (
                <div className="mb-4">
                  <p className="mb-1">
                    <u>Enrobage :</u>
                  </p>
                  <CheckboxGroup
                    className="gap-1"
                    orientation="horizontal"
                    value={enrobageSelected || ""} // Utilisation d'une chaîne vide si l'état est null
                    onChange={(value) => setEnrobageSelected(value)} // Mise à jour de l'état
                  >
                    {enrobageOptions.map((enrobage, index) => (
                      <CustomCheckbox
                        key={index}
                        value={enrobage.id} // Utilisation de l'ID comme valeur
                        className="capitalize"
                        checked={enrobageSelected === enrobage.id} // Vérification si l'option est sélectionnée
                        onChange={() => setEnrobageSelected(enrobage.id)} // Mise à jour de l'état
                        disabled={
                          enrobageSelected && enrobageSelected !== enrobage.id
                        } // Désactivation des autres options
                      >
                        {enrobage.nom_enrobage}
                      </CustomCheckbox>
                    ))}
                  </CheckboxGroup>
                </div>
              )}

              <div className="flex justify-start space-x-10 my-5">
                <div className="flex justify-start space-x-1 quantity-input-container">
                  <Button
                    isIconOnly
                    auto
                    onClick={decrement}
                    className="bg-transparent"
                  >
                    <img src={moins} alt="icon moins" className="size-3" />
                  </Button>
                  <Input
                    radius="sm"
                    labelPlacement="outside"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 input-quantite"
                  />
                  <Button
                    isIconOnly
                    auto
                    onClick={increment}
                    className="bg-transparent"
                  >
                    <img src={plus} alt="icon plus" className="size-3" />
                  </Button>
                </div>
                <Button className="bg-danger-600 text-white px-5">
                  Ajouter au panier
                </Button>
              </div>
            </div>
          </div>

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
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <p>{product.description}</p>
                    </div>
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
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <Card
                        shadow="sm"
                        key=""
                        isPressable
                        onPress={() => console.log("produit pressé")}
                        className="mb-4"
                      ></Card>
                    </div>
                  </div>
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
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      <Card
                        shadow="sm"
                        key=""
                        isPressable
                        onPress={() => console.log("produit pressé")}
                        className="mb-4"
                      ></Card>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
