import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import croix from "../../assets/icons/icon-croix.svg";

export default function ModalAddPanier({ onClose }) {
  // Ajout de `onClose` comme prop
  const [selected, setSelected] = React.useState("signaleProduit");

  return (
    <>
      <Modal
        size="3xl"
        hideCloseButton
        isOpen={true} // Assurez-vous que cette prop contrôle l'affichage
        onClose={onClose} // Utilisez `onClose` pour la fermeture
      >
        <ModalContent className="p-2">
          <div className="border-1 border-danger-300 rounded-xl">
            <ModalHeader className="flex justify-between">
              <div className="grid grid-cols-3">Signalement</div>
              <Button
                isIconOnly
                color="danger"
                variant="bordered"
                onPress={onClose} // Utilisation correcte de `onClose`
              >
                <img src={croix} alt="icon de croix" />
              </Button>
            </ModalHeader>
            <ModalBody>
              <Tabs
                fullWidth
                size="lg"
                aria-label="Tabs form"
                variant="light"
                className="bg-danger-50 rounded-xl"
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab
                  key="signaleProduit"
                  title="Signaler un produit"
                  className="py-6 m-0.5"
                >
                  <form className="flex flex-col gap-4">
                    <Textarea
                      isRequired
                      label="Description"
                      placeholder="Décriver votre problème avec le produit..."
                      color="danger"
                    />
                    <Button
                      className="bg-danger-600 text-white w-40 m-auto mt-1"
                      onPress={onClose} // Utilisation correcte de `onClose`
                    >
                      Envoyer
                    </Button>
                  </form>
                </Tab>
                <Tab
                  key="signaleTech"
                  title="Signaler un problème"
                  className="py-6 m-0.5"
                >
                  <form className="flex flex-col gap-4">
                    <Textarea
                      isRequired
                      label="Description"
                      placeholder="Décriver votre problème avec le site..."
                      color="danger"
                    />
                    <Button
                      className="bg-danger-600 text-white w-40 m-auto mt-1"
                      onPress={onClose} // Utilisation correcte de `onClose`
                    >
                      Envoyer
                    </Button>
                  </form>
                </Tab>
              </Tabs>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
