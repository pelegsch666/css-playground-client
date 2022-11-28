

import { useRecoilState } from "recoil";
import { isInfoModalOpenState } from "views/GameView/store";
import StyledButton from "views/GameView/components/Header/StyledButton";


export default function InfoButton() {
  const [isInfoModalOpen, setInfoModalOpen] =
    useRecoilState(isInfoModalOpenState);
  return (
    <StyledButton
      onClick={() => {
        setInfoModalOpen(!isInfoModalOpen);
      }}
    >
      Info
    </StyledButton>
  );
}

