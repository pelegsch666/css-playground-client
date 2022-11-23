import { useRecoilValue } from "recoil";

import StackCol from "components/layout/StackCol";
import StackRow from "components/layout/StackRow";
import AdjusmentButtons from "views/GameView/components/AdjustmentButtons";
import TargetShape from "views/GameView/components/TargetShape";
import LevelTitle from "views/GameView/components/LevelTitle";
import VictoryBlock from "views/GameView/components/VictoryBlock";
import UserShape from "views/GameView/components/UserShape";
import InfoButton from "views/GameView/components/InfoModal/InfoButton";
import InfoModal from "views/GameView/components/InfoModal";


import {
  useSetCurrIdxLevel,
  useSetCurrPropertyTitle,
  useSetCurrPropertyValue,
  useSetIsVictory,
  useSetTargetShape,
  useSetUserShape,
} from "views/GameView/effects";

import { isInfoModalOpenState, isVictoryState } from "views/GameView/store";

import PropertySelector from "views/GameView/components/PropertySelector";

function GameView() {
  const isVictory = useRecoilValue(isVictoryState);
  const isInfoModalOpen = useRecoilValue(isInfoModalOpenState);
  
  useSetUserShape();
  useSetTargetShape();
  useSetCurrPropertyTitle();
  useSetCurrPropertyValue();
  useSetCurrIdxLevel();
  useSetIsVictory();

  return (
    <>
      {isInfoModalOpen && <InfoModal />}
      <StackCol isCentered={true}>
        <LevelTitle />
        <InfoButton />
        <TargetShape />
        <UserShape />
        <StackRow justifyContent="center" alignItems="center">
          {isVictory ? <VictoryBlock /> : <PropertySelector />}
        </StackRow>
        <StackRow justifyContent="space-between" alignItems="center">
          {!isVictory && <AdjusmentButtons />}
        </StackRow>
      </StackCol>
    </>
  );
}
export default GameView;
