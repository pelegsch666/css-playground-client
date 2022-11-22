import {useRecoilState} from "recoil"
import { useNavigate } from "react-router-dom";

import degObj from "helpers/degObj";
import { currIndexLevelState } from "store";

import TriangleButton from "views/GameView/components/TriangleButton";

export default function Victory() {
  const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
  const navigate = useNavigate()
  
  function changeIndexOfLevel() {
    setCurrIdxLevel(+currIdxLevel + 1);
    navigate(`/GameView/${+currIdxLevel + 1}`);
  }

  return (
    <>
      <h1>Victory!!!!</h1>
      <h1>press to start the next level</h1>
      <TriangleButton deg={degObj.RIGHT} onClick={() => changeIndexOfLevel()} />
    </>
  );
}
