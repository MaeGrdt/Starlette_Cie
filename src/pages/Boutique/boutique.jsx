import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import stars from "../../assets/icons/icon-star.svg";
import Filters from "../../components/Filter/filters";
import PaginationShop from "../../components/Pagination/pagination";
import axios from "axios";

export default function Boutique() {
  const [selected, setSelected] = useState("shop");
  const [showFilters, setShowFilters] = useState(false);
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/produits");
        console.log(response.data);

        if (Array.isArray(response.data.member)) {
          // Mapper les produits pour extraire les informations nécessaires
          const produitsWithPrices = response.data.member.map((produit) => ({
            id: produit.id,
            nom: produit.nom,
            categorie: produit.categorie,
            type_produit: produit.type_produit,
            date_ajout: produit.date_ajout,
            // Récupérer le prix du premier variant (ajustez selon vos besoins)
            prix:
              produit.produitsVariants.length > 0
                ? produit.produitsVariants[0].prix
                : 0,
            id_image: produit.id_image,
          }));

          setProduits(produitsWithPrices);
          setTotalPages(Math.ceil(produitsWithPrices.length / itemsPerPage)); // Calculer le nombre total de pages
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

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  // Calculer les produits affichés pour la page actuelle
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = produits.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculer le nombre total de produits
  const totalProducts = produits.length;

  // Calculer l'intervalle affiché
  const startProduct = indexOfFirstProduct + 1; // +1 pour commencer à 1 au lieu de 0
  const endProduct = Math.min(indexOfLastProduct, totalProducts); // Pour éviter de dépasser le nombre total de produits

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
                    <Filters />
                  </div>

                  <div className="w-full lg:w-3/4 order-2 lg:order-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pr-2">
                      {currentProducts.map((item, index) => (
                        <Card
                          shadow="sm"
                          key={index}
                          isPressable
                          onPress={() => console.log("produit pressé")}
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
                          </CardBody>
                          <CardFooter className="text-small justify-center">
                            <p>
                              {item.nom}
                              <br />
                              <b className="text-danger-400">{item.prix}€</b>
                            </p>
                          </CardFooter>
                        </Card>
                      ))}
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
