import { useParams } from "react-router-dom";

import { levelsDataState } from "store";
import { useRecoilValue } from "recoil";

function LevelTitle() {
  const { id } = useParams();
  const levelsData = useRecoilValue(levelsDataState);
  return <h1>{levelsData[+id]?.levelName}</h1>;
}
export default LevelTitle;
