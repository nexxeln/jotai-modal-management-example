import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useAtom } from "jotai";

import { authModalStateAtom } from "../atoms/authModalAtom";

const AuthModal = () => {
  const [authModalState, setAuthModalState] = useAtom(authModalStateAtom);
  return (
    <>
      <Modal isOpen={authModalState} onClose={() => setAuthModalState(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>You need to be signed in to do that</ModalBody>
          <Button variant="outline">Sign In</Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
