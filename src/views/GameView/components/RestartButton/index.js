import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { levelsDataState } from "store";
import levels from "levels";

const RestartButtonStyled = styled.button`
  position: fixed;
  left: 20px;
  top: 20px;
`;

export default function RestartButton() {
  const setLevelsData = useSetRecoilState(levelsDataState);

  function handleClick() {
    const newLevels = [...levels];
    setLevelsData(newLevels);
  }

  return (
    <RestartButtonStyled onClick={handleClick}>Restart</RestartButtonStyled>
  );
}
