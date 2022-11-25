import { useRecoilState, useRecoilValue } from "recoil";

import { userShapeState } from "views/GameView/store";
import { levelsDataState, currIndexLevelState } from "store";

import ShapeContainer from "views/GameView/components/ShapeContainer";
import Shape from "views/GameView/components/Shape";

export default function UserShape() {
  const levelsData = useRecoilValue(levelsDataState);
  const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
  const userShape = useRecoilValue(userShapeState);
  return (
    <ShapeContainer>
      <Shape
        shapeProperties={userShape}
        defaultProperties={levelsData[currIdxLevel]?.defaultProperties}
        renderingKey={levelsData[currIdxLevel]?.renderingKey}
      />
    </ShapeContainer>
  );
}


