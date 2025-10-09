import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Button, useDisclosure, Input } from "@heroui/react";

export default function UserSignInModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
      >
        Sign In
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Sign In
              </ModalHeader>
              <ModalBody>
                <Input name="email" isRequired label="E-Mail"/>
                <Input name="password" isRequired label="Password"/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign In
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>

      </Modal>
    </>
  );
}