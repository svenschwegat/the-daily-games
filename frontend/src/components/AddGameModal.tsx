import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";

export default function AddGameModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpen = () => { onOpen(); };

    return (
        <>
            <button
                className="bg-green-500 p-2 rounded text-white"
                onClick={handleOpen}
            >
                Add Game
            </button>
            <Modal isOpen={isOpen} size={'5xl'} onClose={onClose} className={"bg-gray-500"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add game</ModalHeader>
                            <ModalBody>
                                <p>Placeholder
                                </p>
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