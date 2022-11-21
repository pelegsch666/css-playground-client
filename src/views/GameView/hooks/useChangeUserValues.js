import { useRecoilState, useRecoilValue } from "recoil";

import propertiesValueStrings from "constants/propertiesValueStrings";

import {
  currPropertyTitleState,
  currUserShapePropertyIdxState,
  userShapeState,
} from "views/GameView/store";

function isValueNumber(value) {
  return typeof value === "number";
}

function getNewValueBySignAndGap(value, sign, gap) {
  let res;
  if (sign === "+") {
    res = value + gap;
  } else if (sign === "-") {
    res = value - gap;
  }
  return res;
}

function useChangeUserValues() {
  const [userShape, setUserShape] = useRecoilState(userShapeState);
  const currPropertyTitle = useRecoilValue(currPropertyTitleState);
  const currPropIdx = useRecoilValue(currUserShapePropertyIdxState);

  function setter(sign) {
    const newUserShape = [...userShape];
    const newCurrProp = { ...newUserShape[currPropIdx][currPropertyTitle] };

    if (isValueNumber(newCurrProp.value)) {
      const { value, gap, min, max } = newCurrProp;
      const newValue = getNewValueBySignAndGap(value, sign, gap);
      if (newValue > max || newValue < min) {
        newUserShape[currPropIdx] = { [currPropertyTitle]: { ...newCurrProp } };

        return setUserShape(newUserShape);
      }
      newCurrProp.value = newValue;
      newUserShape[currPropIdx] = { [currPropertyTitle]: { ...newCurrProp } };
      setUserShape(newUserShape);
    } else {
      const { value, items } = newUserShape[currPropIdx][currPropertyTitle];
      const currIdx = items.indexOf(value);
      const currProperty = newUserShape[currPropIdx][currPropertyTitle];
      console.log("currProperty", currProperty);
      if (sign === "+") {
        if (currIdx === items.length - 1) {
          const newIdx = 0;
          currProperty.value = items[newIdx];
          console.log("nuCurrProperty", currProperty);
          setUserShape(newUserShape);
        } else {
          const newIdx = currIdx + 1;
          currProperty.value = items[newIdx];
          console.log("nuCurrProperty", currProperty);
          setUserShape(newUserShape);
        }
      } else if (sign === "-") {
        if (currIdx === 0) {
          const newIdx = items - 1;
          currProperty.value = items[newIdx];
          console.log("nuCurrProperty", currProperty);
          setUserShape(newUserShape);
        } else {
          const newIdx = currIdx - 1;
          currProperty.value = items[newIdx];
          console.log("nuCurrProperty", currProperty);
          setUserShape(newUserShape);
        }
      }
    }
  }
  return setter;
}

// function updateUserShape(newIdx) {
//   currProperty.value = items[newIdx];
//   setUserShape(newUserShape);
// }

export default useChangeUserValues;
