import { useNavigate } from "react-router-dom";

import { currIndexLevelState } from "store";

import { useSetRecoilState } from "recoil";
import StyledButton from "views/GameView/components/Header/StyledButton";

export default function MenuButton() {
  const navigate = useNavigate();
  const setCurrIndexLevevl = useSetRecoilState(currIndexLevelState);
  function handleClick() {
    navigate("/");
    setCurrIndexLevevl(0);
  }

  return <StyledButton onClick={handleClick}>Menu </StyledButton>;
}
