import styled from "styled-components";

import { useRecoilState } from "recoil";
import { isInfoModalOpenState } from "views/GameView/store";

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
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

