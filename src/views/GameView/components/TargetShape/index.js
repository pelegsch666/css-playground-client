import {useRecoilValue} from "recoil"

import { targetShapeState } from "views/GameView/store";
import {levelsDataState, currIndexLevelState} from "store"

import ShapeContainer from "views/GameView/components/ShapeContainer";
import Shape from "views/GameView/components/Shape";
import defaultTheme from 'theme/defaultTheme';


export default function TargetShape() {
  const levelsData = useRecoilValue(levelsDataState);
  const currIdxLevel = useRecoilValue(currIndexLevelState);
  const targetShape = useRecoilValue(targetShapeState);
  return (
    <ShapeContainer theme={defaultTheme}>
      <Shape
        shapeProperties={targetShape}
        defaultProperties={levelsData[currIdxLevel]?.defaultProperties}
        renderingKey={levelsData[currIdxLevel]?.renderingKey}
      />
    </ShapeContainer>
    
  );
}


