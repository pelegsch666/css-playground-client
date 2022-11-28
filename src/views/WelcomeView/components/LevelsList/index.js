import Ul from "views/WelcomeView/components/LevelsList/Ul";
import ItemContent from "views/WelcomeView/components/LevelsList/ItemContent";
import LevelItem from "views/WelcomeView/components/LevelsList/LevelItem";




export default function LevelsList({
  titles,
  currLevelIndex,
  handleClickLevel,
}) {
  return (
    <Ul style={{ listStyle: "none" }}>
      {titles?.map((el, index) => {
        return (
          <LevelItem
            key={index}
            onClick={() => handleClickLevel(index)}
            isCurrLvl={+index === currLevelIndex}
          >
            <ItemContent>{el.toUpperCase()}</ItemContent>
          </LevelItem>
        );
      })}
    </Ul>
  );
}
