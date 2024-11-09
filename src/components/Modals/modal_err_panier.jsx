import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import croix from "../../assets/icons/icon-croix.svg";
import { Link } from "react-router-dom";

export default function ModalErrPanier({ onClose }) {
  return (
    <>
      <Modal size="xl" hideCloseButton isOpen={true} onClose={onClose}>
        <ModalContent className="p-2">
          <div className="border-1 border-danger-300 rounded-xl">
            <ModalHeader className="flex justify-between">
              <div className="grid grid-cols-3">Attention !</div>
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
              <p className="text-base text-center mt-4 mb-5">
                Vous devez être identifié pour ajouter des produits dans votre
                panier.
              </p>
              <Link to="/connexion" className="m-auto">
                <Button className="bg-danger-600 text-white w-40 mt-1">
                  Se connecter?
                </Button>
              </Link>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
