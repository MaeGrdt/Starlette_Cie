import React from "react";
import message from "../../assets/icons/icon-messaging.svg";
import info from "../../assets/icons/icon-info.svg";
import croix from "../../assets/icons/icon-croix.svg";
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
  useDisclosure,
} from "@nextui-org/react";

export default function ModalSignalement() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState("signaleProduit");

  return (
    <>
      <Button isIconOnly onPress={onOpen} className="bg-transparent">
        <img src={message} alt="icon de message" />
      </Button>

      {/* modal */}
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent className="p-2">
          {(onClose) => (
            <>
              <div className="border-1 border-danger-300 rounded-xl">
                <ModalHeader className="flex justify-between">
                  <div className="grid grid-cols-3">
                    Signalement
                    <Popover placement="right" showArrow={true}>
                      <PopoverTrigger>
                        <img
                          src={info}
                          alt="icon d'information"
                          className="w-7 mx-3"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="px-1 py-2 mr-auto">
                          <div className="text-small font-bold">
                            - Signaler un produit :
                          </div>
                          <div className="text-tiny">
                            Pour un soucis lié aux fromages, paiements, etc..
                          </div>
                        </div>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            - Signaler un problème :
                          </div>
                          <div className="text-tiny">
                            Pour un soucis lié à la boutique, c&#39;est-à-dire
                            un élément non fonctionnel, une erreur quelconque,
                            etc..
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
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
                          onPress={onClose}
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
                          onPress={onClose}
                        >
                          Envoyer
                        </Button>
                      </form>
                    </Tab>
                  </Tabs>
                </ModalBody>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
