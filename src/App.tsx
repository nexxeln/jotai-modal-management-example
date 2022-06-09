import { Flex } from "@chakra-ui/react";
import AuthModal from "./components/AuthModal";
import CreatePostButton from "./components/CreatePostButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <>
      <AuthModal />

      <Flex gap={6} p={6}>
        <LikeButton />
        <CreatePostButton />
      </Flex>
    </>
  );
}

export default App;
