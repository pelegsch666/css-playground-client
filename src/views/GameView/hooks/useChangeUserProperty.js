import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currUserShapePropertyIdxState,
  userShapeState,
} from "views/GameView/store";

function useChangeUserProperty() {
  const userShape = useRecoilValue(userShapeState);
  console.log(userShape);
  const [currUserShapePropertyIdx, setUserShapePropertyIdx] = useRecoilState(
    currUserShapePropertyIdxState
  );

  function setter(num) {
    const newIndex = currUserShapePropertyIdx + num;
    if (newIndex === userShape.length) {
      setUserShapePropertyIdx(0);
    } else if (newIndex < 0) {
      setUserShapePropertyIdx(userShape.length - 1);
    } else {
      setUserShapePropertyIdx(newIndex);
    }
  }
  return setter;
}

export default useChangeUserProperty;
