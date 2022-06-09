import { Button } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { authModalStateAtom } from "../atoms/authModalAtom";
import useAuthState from "../hooks/useAuthState";

const LikeButton = () => {
  const { isAuthenticated } = useAuthState();
  const setAuthModalState = useSetAtom(authModalStateAtom);
  return (
    <>
      <Button
        onClick={() => {
          !isAuthenticated && setAuthModalState(true);

          // like logic
        }}
      >
        ❤️
      </Button>
    </>
  );
};

export default LikeButton;
