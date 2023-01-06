
import { useRecoilState } from "recoil";
import { isInfoModalOpenState } from "views/GameView/store";
import HeaderAction from "../HeaderAction/HeaderAction";

export default function InfoButton() {
  const [isInfoModalOpen, setInfoModalOpen] =
    useRecoilState(isInfoModalOpenState);
  return (
    <HeaderAction
      onClick={() => {
        setInfoModalOpen(!isInfoModalOpen);
      }}
    >
      Info
    </HeaderAction>
  );
}

