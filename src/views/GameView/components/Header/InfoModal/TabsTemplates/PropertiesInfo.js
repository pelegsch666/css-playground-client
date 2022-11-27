import { useRecoilValue } from "recoil";

import { currPropertyLevelsNameState } from "views/GameView/store";

import Explanation from "views/GameView/components/Header/InfoModal/Explanation";

export default function PropertiesInfo() {
  const currPropertyLevelsName = useRecoilValue(currPropertyLevelsNameState);

  return (
    <>
      {currPropertyLevelsName.map((propertyName) => (
        <Explanation propertyName={propertyName} />
      ))}
    </>
  );
}
