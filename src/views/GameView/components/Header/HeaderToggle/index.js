import styled from "styled-components";

import { useRecoilState, useSetRecoilState } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";

const ToggleButton = styled.button``;

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
    <ToggleButton onClick={toggleHeader}>
      {isHeaderOpen ? "Close Header" : "Open Header"}
    </ToggleButton>
  );
}
