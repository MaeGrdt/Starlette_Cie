import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
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
import Filters from "../../components/Filter/filters";
import Vache from "../../assets/badges/vache.png";
import Mixte from "../../assets/badges/mixte2.png";
import Chèvre from "../../assets/badges/chèvre.png";
import PaginationShop from "../../components/Pagination/pagination";
import axios from "axios";

export default function Boutique() {
  const [selected, setSelected] = useState("shop");
  const [showFilters, setShowFilters] = useState(false);
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

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

  // Filtres
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredAffinages, setFilteredAffinages] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 16;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/produits");

        if (Array.isArray(response.data.member)) {
          const produitsWithDetails = response.data.member.map((produit) => {
            const variantsWithDetails = produit.produitsVariants.map(
              (variant) => ({
                affinage: variant.affinage ? variant.affinage : " ",
                enrobage: variant.id_enrobage
                  ? variant.id_enrobage.nom_enrobage
                  : "Aucun",
              })
            );

            return {
              id: produit.id,
              nom: produit.nom,
              categorie: produit.categorie,
              type_produit: produit.type_produit,
              prix:
                produit.produitsVariants.length > 0
                  ? (produit.produitsVariants[0].prix / 100).toFixed(2)
                  : "0.00",
              id_image: produit.id_image,
              variants: variantsWithDetails,
            };
          });

          // Trier les produits par nom (ordre alphabétique)
          const produitsSorted = produitsWithDetails.sort((a, b) =>
            a.nom.localeCompare(b.nom)
          );

          setProduits(produitsSorted);
          setTotalPages(Math.ceil(produitsSorted.length / itemsPerPage));
        } else {
          console.error(
            "Les données récupérées ne contiennent pas un tableau de produits",
            response.data
          );
          setProduits([]);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des produits :",
          error.message
        );
        setError(error.message);
        setProduits([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProduits();
  }, []);

  const handleFilterChange = (filterType, filterValues) => {
    switch (filterType) {
      case "type":
        setFilteredTypes(filterValues);
        break;
      case "category":
        setFilteredCategories(filterValues);
        break;
      case "affinage":
        setFilteredAffinages(filterValues);
        break;
      default:
        break;
    }
  };

  // Filtrage des produits
  const filteredProducts = produits.filter((produit) => {
    const matchesType =
      filteredTypes.length === 0 ||
      filteredTypes.includes(produit.type_produit);

    const matchesCategory =
      filteredCategories.length === 0 ||
      filteredCategories.includes(produit.categorie);

    const matchesAffinage =
      filteredAffinages.length === 0 ||
      (Array.isArray(produit.produitsVariants) &&
        produit.produitsVariants.some((variant) =>
          filteredAffinages.includes(variant.affinage)
        ));

    return matchesType && matchesCategory && matchesAffinage;
  });

  console.log("Données reçues:", filteredProducts);

  // Pagination des produits
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalProducts = filteredProducts.length;
  const startProduct = indexOfFirstProduct + 1;
  const endProduct = Math.min(indexOfLastProduct, totalProducts);

  // pagination avec les filtres
  // const indexOfLastProduct = currentPage * itemsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  // const currentProducts = filteredProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );
  // const totalProducts = filteredProducts.length;
  // const startProduct = indexOfFirstProduct + 1;
  // const endProduct = Math.min(indexOfLastProduct, totalProducts);

  // Redirection vers la page produit
  const handleProductClick = (productId) => {
    navigate(`/produit/${productId}`);
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <>
      <div className="grid m-2 mt-4 lg:grid-cols-6 xl:grid-cols-8 lg:gap-4">
        <div className="flex w-full flex-col lg:col-start-2 xl:col-start-3 col-span-4 ">
          <Tabs
            aria-label="Options"
            variant="underlined"
            selectedKey={selected}
            onSelectionChange={setSelected}
            classNames={{
              tabList:
                "w-full relative rounded-none p-0 border-b border-divider flex justify-between",
              cursor: "w-full bg-danger-600",
              tab: "max-w-fit px-0 h-12 text-black",
              tabContent: "group-data-[selected=true]:text-danger-600",
            }}
          >
            <Tab
              key="shop"
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <img src={stars} alt="icone d'étoiles" className="w-6" />
                  <span>Boutique</span>
                </div>
              }
            >
              <Card className="bg-danger-50 p-3">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="lg:hidden w-full">
                    <button
                      className="bg-danger-600 text-white px-4 py-2 rounded-lg w-full mb-1"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      {showFilters
                        ? "Masquer les filtres"
                        : "Afficher les filtres"}
                    </button>
                  </div>

                  <div
                    className={`w-full lg:w-1/4 order-1 lg:order-2 transition-all duration-300 ${
                      showFilters ? "block" : "hidden"
                    } lg:block flex flex-col items-center`}
                  >
                    <Filters onFilterChange={handleFilterChange} />
                  </div>

                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      {currentProducts.map((item, index) => {
                        let badgeSrc;
                        let taille;
                        if (item.categorie === "vache") {
                          badgeSrc = Vache;
                          taille = 40;
                        } else if (item.categorie === "mixte") {
                          badgeSrc = Mixte;
                          taille = 80;
                        } else if (item.categorie === "chèvre") {
                          badgeSrc = Chèvre;
                          taille = 40;
                        } else {
                          badgeSrc = null;
                        }

                        return (
                          <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => handleProductClick(item.id)}
                            className="mb-4"
                          >
                            <CardBody className="overflow-visible p-0">
                              <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.nom}
                                className="w-full object-cover h-[140px]"
                                src={
                                  item.id_image
                                    ? item.id_image.url
                                    : "../img/default.jpg"
                                }
                              />

                              {/* Afficher le bouton seulement si le token est présent */}
                              {token && (
                                <Button
                                  isIconOnly
                                  radius="full"
                                  variant="light"
                                  className="absolute top-0 right-0 z-10"
                                >
                                  <img
                                    src={like}
                                    alt="icon étoile"
                                    className="size-7"
                                  />
                                </Button>
                              )}

                              {badgeSrc && (
                                <Image
                                  width={taille}
                                  src={badgeSrc}
                                  className="z-20 absolute bottom-0 left-0 m-1"
                                />
                              )}
                            </CardBody>
                            <CardFooter className="text-small justify-center">
                              <p>
                                {item.nom}
                                <br />
                                {item.note_moy ? (
                                  <img
                                    src={starsMap[item.note_moy]}
                                    alt={`${item.note_moy} étoiles`}
                                    className="w-20 my-1 mx-auto"
                                  />
                                ) : null}{" "}
                                <b className="text-danger-400">{item.prix} €</b>
                              </p>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <PaginationShop
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      console.log(`Page changed to: ${page}`);
                      setCurrentPage(page);
                    }}
                  />
                </div>
              </Card>
            </Tab>

            <Tab
              key="disabled"
              isDisabled
              style={{ cursor: "default" }}
              title={
                <div className="flex items-center space-x-2 px-2">
                  <span>
                    Affichage de {startProduct}-{endProduct} sur {totalProducts}{" "}
                    résultats
                  </span>
                </div>
              }
            />
          </Tabs>
        </div>
      </div>
    </>
  );
}
