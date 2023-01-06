import styled from "styled-components";
import { useParams } from "react-router-dom";

import { levelsDataState } from "store";
import { useRecoilValue } from "recoil";
import defaultTheme from "theme/defaultTheme";
const StyledLevelTitle = styled.h1`
  ${(props) => props.theme.breakpoints.down('sm')}{
    margin: 2px;
    font-size: 1.2rem;
   margin-left: 30px;
   
  }
  font-family: Arial, Helvetica, sans-serif;

` 


function LevelTitle() {
  const { id } = useParams();
  const levelsData = useRecoilValue(levelsDataState);
  return <StyledLevelTitle theme={defaultTheme}>{levelsData[+id]?.levelName}</StyledLevelTitle>;
}
export default LevelTitle;
