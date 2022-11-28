import { useSetRecoilState } from "recoil";


import { levelsDataState } from "store";
import levels from "levels";
import StyledButton from "../StyledButton";



export default function RestartButton() {
  const setLevelsData = useSetRecoilState(levelsDataState);

  function handleClick() {
    const newLevels = [...levels];
    setLevelsData(newLevels);
  }

  return (
    <StyledButton onClick={handleClick}>Restart</StyledButton>
  );
}
