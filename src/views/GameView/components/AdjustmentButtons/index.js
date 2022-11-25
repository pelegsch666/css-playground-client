import CircleButton from "views/GameView/components/AdjustmentButtons/CircleButton";
import Line from "views/GameView/components/AdjustmentButtons/Line";
import useChangeUserValues from "views/GameView/hooks/useChangeUserValues"


export default function AdjusmentButtons() {
    const setUserValues = useChangeUserValues();
    return (
    <>
      <CircleButton onClick={() => setUserValues("-")}>
        <Line degree={90} />
      </CircleButton>
      <CircleButton onClick={() => setUserValues("+")}>
        <Line degree={90} />
        <Line degree={180} />
      </CircleButton>
    </>
  );
}
