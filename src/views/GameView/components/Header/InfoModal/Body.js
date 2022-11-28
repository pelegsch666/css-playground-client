import { useRecoilValue } from "recoil";
import { currTabNameState } from "views/GameView/store";

import HowToPlay from "views/GameView/components/Header/InfoModal/TabsTemplates/HowToPlay";
import PropertiesInfo from "views/GameView/components/Header/InfoModal/TabsTemplates/PropertiesInfo";

export default function Body() {
  const currTabName = useRecoilValue(currTabNameState);
  switch (currTabName) {
    case "How To Play":
      return <HowToPlay />;
    case "Properties Info":
      return <PropertiesInfo />;
    default:
      <div></div>;
  }
}
