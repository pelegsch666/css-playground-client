import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import degObj from "helpers/degObj";
import { currIndexLevelState } from "store";

import TriangleButton from "views/GameView/components/TriangleButton";
import levels from "levels";
import { isVictoryState } from "views/GameView/store";
import StyledButton from "../Header/StyledButton";

export default function Victory() {
  const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
  const isVictory = useRecoilValue(isVictoryState);

  const navigate = useNavigate();

  function changeIndexOfLevel() {
    if (currIdxLevel < levels.length - 1) {
      setCurrIdxLevel(+currIdxLevel + 1);
      navigate(`/GameView/${+currIdxLevel + 1}`);
    }
  }
function handleReturnToMenuClick(){
  navigate("/");
  setCurrIdxLevel(0);
}



  return (
    <>
      {currIdxLevel < levels.length - 1 && (
        <>
          <h1>Victory!!!!</h1>
          <h1>press to start the next level</h1>
          <TriangleButton
            deg={degObj.RIGHT}
            onClick={() => changeIndexOfLevel()}
          />
        </>
      )}
      {+currIdxLevel === levels.length - 1 && isVictory && (
        <>
          <h1>You Are The Best 🥳</h1>
        <StyledButton onClick={handleReturnToMenuClick}>Retrun To Menu</StyledButton>
        </>
      )}
    </>
  );
}
