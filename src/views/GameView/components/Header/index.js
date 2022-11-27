import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";

import InfoButton from "views/GameView/components/Header/InfoButton";
import RestartButton from "views/GameView/components/Header/RestartButton";
import MenuButton from "views/GameView/components/Header/MenuButton";
import InfoModal from "views/GameView/components/Header/InfoModal";
import HeaderToggle from "views/GameView/components/Header/HeaderToggle";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
`;
const ToolsContainer = styled.div`
  display: flex;
  border: 2px solid red;
  width: 100%;
  justify-content: space-evenly;
`;

export default function Header() {
  const isInfoModalOpen = useRecoilValue(isInfoModalOpenState);
  const isHeaderOpen = useRecoilValue(isHeaderOpenState);
  return (
    <>
      <HeaderContainer>
        <HeaderToggle />
        {isHeaderOpen && (
          <ToolsContainer>
            <InfoButton />
            <RestartButton />
            <MenuButton />
          </ToolsContainer>
        )}
      </HeaderContainer>
      {(isInfoModalOpen && isHeaderOpen) && <InfoModal />}
    </>
  );
}
