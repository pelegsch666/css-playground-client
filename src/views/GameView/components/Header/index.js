import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";

import InfoButton from "views/GameView/components/Header/InfoButton";
import RestartButton from "views/GameView/components/Header/RestartButton";
import MenuButton from "views/GameView/components/Header/MenuButton";
import InfoModal from "views/GameView/components/Header/InfoModal";
import HeaderToggle from "views/GameView/components/Header/HeaderToggle";
import defaultTheme from "theme/defaultTheme";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;

  top: 0;
  width: 100vw;
  height: 60px;
  z-index: 1;
`;
const ToolsContainer = styled.div`
  background-color: ${defaultTheme.colors.black};
  justify-content: center;
  align-items: center;
  gap: 100px;
  display: flex;
  width: 100%;
  ${defaultTheme.breakpoints.down("sm")} {
    justify-content: space-evenly;
    gap: 0;
    height: 40px;
  }
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
      {isInfoModalOpen && isHeaderOpen && <InfoModal />}
    </>
  );
}
