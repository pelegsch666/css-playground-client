import { useNavigate } from "react-router-dom";

import { currIndexLevelState } from "store";

import { useSetRecoilState } from "recoil";
import HeaderAction from "../HeaderAction/HeaderAction";

export default function MenuButton() {
  const navigate = useNavigate();
  const setCurrIndexLevevl = useSetRecoilState(currIndexLevelState);
  function handleClick() {
    navigate("/");
    setCurrIndexLevevl(0);
  }

  return <HeaderAction onClick={handleClick}>Menu </HeaderAction>;
}
