import { useRecoilValue } from "recoil";
import styled from "styled-components";

import StackCol from "components/layout/StackCol";
import StackRow from "components/layout/StackRow";
import AdjusmentButtons from "views/GameView/components/AdjustmentButtons";
import TargetShape from "views/GameView/components/TargetShape";
import LevelTitle from "views/GameView/components/LevelTitle";
import VictoryBlock from "views/GameView/components/VictoryBlock";
import UserShape from "views/GameView/components/UserShape";
import Header from "views/GameView/components/Header";
import defaultTheme from "theme/defaultTheme";

import {
  useSetCurrIdxLevel,
  useSetCurrPropertyTitle,
  useSetCurrPropertyValue,
  useSetIsVictory,
  useSetTargetShape,
  useSetUserShape,
  useSetPropertiesLevelsNames,
} from "views/GameView/effects";

import { isVictoryState } from "views/GameView/store";

import PropertySelector from "views/GameView/components/PropertySelector";

const AdjusmentButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${defaultTheme.breakpoints.down("sm")} {
    width: 100%;
  }
  ${defaultTheme.breakpoints.up("sm")} {
    width: 400px;
  }
`;

export default function GameView() {
  const isVictory = useRecoilValue(isVictoryState);

  useSetUserShape();
  useSetTargetShape();
  useSetCurrPropertyTitle();
  useSetCurrPropertyValue();
  useSetCurrIdxLevel();
  useSetIsVictory();
  useSetPropertiesLevelsNames();

  return (
    <>
      <StackCol isCentered={true}>
        <LevelTitle />
        <Header />
        <TargetShape />
        <UserShape />
        <StackRow justifyContent="center" alignItems="center">
          {isVictory ? <VictoryBlock /> : <PropertySelector />}
        </StackRow>
        <AdjusmentButtonsContainer >
          {!isVictory && <AdjusmentButtons />}
        </AdjusmentButtonsContainer>
      </StackCol>
    </>
  );
}
