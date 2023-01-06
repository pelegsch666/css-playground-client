import degObj from "helpers/degObj";
import {
  currPropertyTitleState,
  currPropertyValueState,
} from "views/GameView/store";

import {useRecoilValue} from "recoil"
import PropertyName from "views/GameView/components/PropertySelector/PropertyName.js";
import PropertyValue from "views/GameView/components/PropertySelector/PropertyValue.js";
import TriangleButton from "views/GameView/components/TriangleButton";
import PropertyContainer from "views/GameView/components/PropertySelector/PropertyContainer";

import { useChangeUserProperty } from "views/GameView/hooks";
function PropertySelector() {
  const setUserProperty = useChangeUserProperty();
  const currPropertyTitle = useRecoilValue(currPropertyTitleState);
  const currPropertyValue = useRecoilValue(currPropertyValueState);

  return (
    <>
      <TriangleButton deg={degObj.LEFT} onClick={() => setUserProperty(-1)} />
      <PropertyContainer >
        <PropertyName >{currPropertyTitle}</PropertyName>
        <PropertyValue>{currPropertyValue}</PropertyValue>
      </PropertyContainer>
      <TriangleButton deg={degObj.RIGHT} onClick={() => setUserProperty(1)} />
    </>
  );
}

export default PropertySelector;
