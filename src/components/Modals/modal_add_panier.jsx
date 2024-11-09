import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import croix from "../../assets/icons/icon-croix.svg";
import moins from "../../assets/icons/moins.svg";
import plus from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";

export default function ModalAddPanier({ onClose }) {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <>
      <Modal size="xl" hideCloseButton isOpen={true} onClose={onClose}>
        <ModalContent className="p-2">
          <div className="border-1 border-danger-300 rounded-xl">
            <ModalHeader className="flex justify-between">
              <div className="grid grid-cols-2">
                Ajouté au panier avec succès !
              </div>
              <Button
                isIconOnly
                color="danger"
                variant="bordered"
                onPress={onClose}
              >
                <img src={croix} alt="icon de croix" />
              </Button>
            </ModalHeader>
            <ModalBody>
              <Card className="border-none mb-3 md:mx-2">
                <CardBody>
                  <div className="2xl:grid 2xl:grid-cols-3">
                    <div className="relative md:max-lg:flex md:max-lg:justify-center content-center">
                      <Image
                        alt="{item.nom}"
                        className="object-cover mx-auto size-80 mb-5 md:size-64 2xl:mb-0 xl:size-36"
                        shadow="sm"
                        src="{item.image}"
                      />
                    </div>

                    <div className="col-span-2">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col 2xl:ml-2">
                          <h3 className="mb-1 md:mb-0">item.nom</h3>
                          <p className="my-1">affinage choisit</p>
                          <p className="my-1">enrobage choisit</p>
                        </div>
                      </div>
                      <div className="flex justify-start space-x-10 my-5">
                        <div className="flex justify-start space-x-1 quantity-input-container">
                          <Button
                            isIconOnly
                            auto
                            onClick={decrement}
                            className="bg-transparent"
                          >
                            <img
                              src={moins}
                              alt="icon moins"
                              className="size-2"
                            />
                          </Button>
                          <Input
                            radius="sm"
                            labelPlacement="outside"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(Number(e.target.value))
                            }
                            className="w-12 input-quantite"
                          />
                          <Button
                            isIconOnly
                            auto
                            onClick={increment}
                            className="bg-transparent"
                          >
                            <img
                              src={plus}
                              alt="icon plus"
                              className="size-2"
                            />
                          </Button>
                        </div>
                        <div>
                          <p className="text-danger font-semibold my-1 grid justify-items-center">
                            3.30€
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="flex justify-start">
                <Button
                  className="bg-danger-600 text-white w-40 mt-1 m-auto"
                  onPress={onClose}
                >
                  Continuer mes achats
                </Button>
                <Link to="/panier" className="m-auto">
                  <Button
                    className="w-40 mt-1 border-danger-600"
                    variant="bordered"
                  >
                    Aller au panier
                  </Button>
                </Link>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
