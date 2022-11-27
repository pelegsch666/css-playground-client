import styled from "styled-components";

import TabButton from "views/GameView/components/Header/InfoModal/TabButton";

const StyledHeader = styled.div`
  display: flex;
  height: 40px;
`;

export default function Header() {
  return (
    <StyledHeader>
     
      <TabButton tabName="How To Play" />
      <TabButton tabName="Properties Info" />
    </StyledHeader>
  );
}
