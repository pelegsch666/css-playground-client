import styled from "styled-components";
import ExitButton from "views/GameView/components/InfoModal/ExitButton";
import TabButton from "views/GameView/components/InfoModal/TabButton";

const StyledHeader = styled.div`
  display: flex;
  height: 40px;
  
`;
function Header() {
  return (
    <StyledHeader>
      <ExitButton />
      <TabButton tabName="How To Play" />
      <TabButton tabName="Properties Info" />
    </StyledHeader>
  );
}

export default Header;
