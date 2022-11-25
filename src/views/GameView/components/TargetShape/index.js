import {useRecoilState,useRecoilValue} from "recoil"

import { targetShapeState } from "views/GameView/store";
import {levelsDataState, currIndexLevelState} from "store"

import ShapeContainer from "views/GameView/components/ShapeContainer";
import Shape from "views/GameView/components/Shape";


export default function TargetShape() {
  const levelsData = useRecoilValue(levelsDataState);
  const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
  const targetShape = useRecoilValue(targetShapeState);
  return (
    <ShapeContainer>
      <Shape
        shapeProperties={targetShape}
        defaultProperties={levelsData[currIdxLevel]?.defaultProperties}
        renderingKey={levelsData[currIdxLevel]?.renderingKey}
      />
    </ShapeContainer>
    
  );
}


