import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";

import StyledButton from "views/GameView/components/Header/StyledButton";

const Button = styled(StyledButton)`
border-radius: 0;
`

export default function HeaderToggle() {
  const [isHeaderOpen, setIsHeaderOpen] = useRecoilState(isHeaderOpenState);
  const setInfoModalOpen = useSetRecoilState(isInfoModalOpenState);

  function toggleHeader() {
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
      setInfoModalOpen(false);
    } else {
      setIsHeaderOpen(true);
    }
  }

  return (
    <Button onClick={toggleHeader}>
      {isHeaderOpen ? "Close Options" : "Open Options"}
    </Button>
  );
}
