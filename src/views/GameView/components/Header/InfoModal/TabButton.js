import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { currTabNameState } from "views/GameView/store";
const Button = styled.button``;

export default function TabButton({ tabName }) {
  const setCurrTabName = useSetRecoilState(currTabNameState);
  return <Button onClick={() => setCurrTabName(tabName)}>{tabName}</Button>;
}
