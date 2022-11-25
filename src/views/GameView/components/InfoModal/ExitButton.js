import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { isInfoModalOpenState } from "views/GameView/store";

const Button = styled.button`
  background-color: #f73d93;
`;

export default function ExitButton() {
  const setIsInfoModalOpen = useSetRecoilState(isInfoModalOpenState);
  return <Button onClick={() => setIsInfoModalOpen(false)}>X</Button>;
}
