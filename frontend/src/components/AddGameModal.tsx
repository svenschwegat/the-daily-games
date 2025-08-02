import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import AddGameModalContent from "@/components/AddGameModalContent";
import type { Game } from "@/types/GameTypes";

export default function AddGameModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [newGame, setNewGame] = React.useState({} as Game);
    const handleOpen = () => { onOpen(); };

    return (
        <>
            <Button color="success" onPress={handleOpen}>
                Add Game
            </Button>
            <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add game</ModalHeader>
                            <ModalBody>
                                <AddGameModalContent></AddGameModalContent>
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