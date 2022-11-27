import styled from "styled-components";

import { useRecoilState } from "recoil";
import { isInfoModalOpenState } from "views/GameView/store";

const Button = styled.button`

`;

export default function InfoButton() {
  const [isInfoModalOpen, setInfoModalOpen] =
    useRecoilState(isInfoModalOpenState);
  return (
    <Button
      onClick={() => {
        setInfoModalOpen(!isInfoModalOpen);
      }}
    >
      Infomation
    </Button>
  );
}

