import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { levelsDataState } from "store";

import StackCol from "components/layout/StackCol";
import StackRow from "components/layout/StackRow";
import AdjusmentButtons from "views/GameView/components/AdjustmentButtons";
import TargetShape from "views/GameView/components/TargetShape";
import LevelTitle from "views/GameView/components/LevelTitle";
import VictoryBlock from "views/GameView/components/VictoryBlock";
import UserShape from "views/GameView/components/UserShape";

import {
  useSetCurrIdxLevel,
  useSetCurrPropertyTitle,
  useSetCurrPropertyValue,
  useSetIsVictory,
  useSetTargetShape,
  useSetUserShape,
} from "views/GameView/effects";

import { isVictoryState } from "views/GameView/store";

import PropertySelector from "views/GameView/components/PropertySelector";
function GameView() {
  const levelsData = useRecoilValue(levelsDataState);

  const isVictory = useRecoilValue(isVictoryState);

  useSetUserShape();
  useSetTargetShape();
  useSetCurrPropertyTitle();
  useSetCurrPropertyValue();
  useSetCurrIdxLevel();
  useSetIsVictory();

  return (
    <StackCol isCentered={true}>
      <LevelTitle />
      <TargetShape />
      <UserShape />
      <StackRow justifyContent="center" alignItems="center">
        {isVictory ? <VictoryBlock /> : <PropertySelector />}
      </StackRow>
      <StackRow justifyContent="space-between" alignItems="center">
        {!isVictory && <AdjusmentButtons />}
      </StackRow>
    </StackCol>
  );
}
export default GameView;
