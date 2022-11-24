import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";


import { levelsDataState, currIndexLevelState } from "store";
import { currPropertyLevelsNameState } from "views/GameView/store";
import removeAnItemFromArray from 'helpers/removeAnItemFromArray'

export default function useSetPropertiesLevelsNames() {
  const levels = useRecoilValue(levelsDataState);
  const currLevelIndex = useRecoilValue(currIndexLevelState);
  const setCurrPropertyLevelsName = useSetRecoilState(
    currPropertyLevelsNameState
  );

  useEffect(() => {
    const propertiesNames = Object.keys(levels[currLevelIndex].userProperties);
    if (propertiesNames.includes("customProperties")) {
      const customProperties = Object.keys(
        levels[currLevelIndex].userProperties.customProperties
      );

      const finalProperties = [
        ...removeAnItemFromArray("customProperties", propertiesNames),
        ...customProperties,
      ];
      setCurrPropertyLevelsName(finalProperties);
    } else {
      setCurrPropertyLevelsName(propertiesNames);
    }
  }, [currLevelIndex]);
}

