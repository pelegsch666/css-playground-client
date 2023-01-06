import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import degObj from "helpers/degObj";
import { currIndexLevelState } from "store";
import styled from "styled-components";
import TriangleButton from "views/GameView/components/TriangleButton";
import levels from "levels";
import { isVictoryState } from "views/GameView/store";
import StyledButton from "../Header/StyledButton";

const StyledVictoryText = styled.p`
font-size: 1.2rem;
margin: auto;
`
const StyledVictoryTitle = styled.h2`
font-size: 2rem;
margin: 0;
`
const StyledTextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 10px;
gap: 10px;
font-family: Arial, Helvetica, sans-serif;
`


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
        <StyledTextWrapper>
          <StyledVictoryTitle>Victory!</StyledVictoryTitle>
          <StyledVictoryText>Press the triangle to go to the next level</StyledVictoryText>
          </StyledTextWrapper>
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
