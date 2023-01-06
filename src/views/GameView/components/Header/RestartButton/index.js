import { useSetRecoilState } from "recoil";
import { isHeaderOpenState, isInfoModalOpenState } from "views/GameView/store";


import { levelsDataState } from "store";
import levels from "levels";
import HeaderAction from "../HeaderAction/HeaderAction";

export default function RestartButton() {
  const setLevelsData = useSetRecoilState(levelsDataState);
  const setIsInfoModalOpen = useSetRecoilState(isInfoModalOpenState)
  const setIsHeaderModalOpen = useSetRecoilState(isHeaderOpenState)
  function handleClick() {
    const newLevels = [...levels];
    setLevelsData(newLevels);
    setIsInfoModalOpen(false)
    setIsHeaderModalOpen(false)

  }

  return (
    <HeaderAction onClick={handleClick}>Restart</HeaderAction>
  );
}
