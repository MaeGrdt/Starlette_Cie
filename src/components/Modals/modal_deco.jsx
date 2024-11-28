import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import croix from "../../assets/icons/icon-croix.svg";

export default function ModalDeco({ onClose, onConfirm }) {
  return (
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
              Êtes-vous sûr de vouloir vous déconnecter?
            </p>

            <div className="flex justify-start">
              <Button
                className="w-40 mt-1 border-danger-600  m-auto"
                variant="bordered"
                onPress={onClose}
              >
                Non
              </Button>
              <Button
                className="bg-danger-600 text-white w-40 mt-1 m-auto"
                onPress={onConfirm}
              >
                Oui
              </Button>
            </div>
          </ModalBody>
        </div>
      </ModalContent>
    </Modal>
  );
}
