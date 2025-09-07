import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Form, Button, useDisclosure } from "@heroui/react";
import AddGameModalContent from "@/components/AddGameModalContent";
import insertGame from '@/utils/insertGame';

import type { AddGameModalProps } from "../types/GameTypes";

export default function AddGameModal({ games, filterContent }: AddGameModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => { onOpen(); };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    insertGame({ table: "games", data: formData });
    onClose();
  }

  return (
    <>
      <Button color="success" onPress={handleOpen}>
        Add Game
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <Form
                onSubmit={(e) => handleSubmit(e)}
              >
                <ModalHeader>
                  Add game
                </ModalHeader>
                <ModalBody id="AddGameModalBody">
                  <AddGameModalContent
                    games={games}
                    filterContent={filterContent}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="danger" type="reset" variant="light">
                    Reset
                  </Button>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </ModalFooter>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}