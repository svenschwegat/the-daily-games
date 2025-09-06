import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import AddGameModalContent from "@/components/AddGameModalContent";

import type { AddGameModalProps } from "../types/GameTypes";

export default function AddGameModal({ games, filterContent }: AddGameModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => { onOpen(); };

  return (
    <>
      <Button color="success" onPress={handleOpen}>
        Add Game
      </Button>
      <Modal isOpen={isOpen} size={'3xl'} onClose={onClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add game</ModalHeader>
              <ModalBody>
                <AddGameModalContent
                  games={games}
                  filterContent={filterContent}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}