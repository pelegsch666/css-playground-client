import { useNavigate } from "react-router-dom";

import { currIndexLevelState } from "store";

import { useSetRecoilState } from "recoil";
export default function MenuButton() {
  const navigate = useNavigate();
  const setCurrIndexLevevl = useSetRecoilState(currIndexLevelState);
  function handleClick() {
    navigate("/");
    setCurrIndexLevevl(0);
  }

  return <button onClick={handleClick}>Menu </button>;
}
