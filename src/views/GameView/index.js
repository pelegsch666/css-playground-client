import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { currIndexLevelState, levelsDataState } from 'store';

import StackCol from 'components/layout/StackCol';
import StackRow from 'components/layout/StackRow';

import CircleButton from 'views/GameView/components/CircleButton';
import Line from 'views/GameView/components/Line';
import PropertyContainer from 'views/GameView/components/PropertyContainer';
import PropertyName from 'views/GameView/components/PropertyName';
import PropertyValue from 'views/GameView/components/PropertyValue';
import Shape from 'views/GameView/components/Shape';
import ShapeContainer from 'views/GameView/components/ShapeContainer';
import TriangleButton from 'views/GameView/components/TriangleButton';
import Victory from 'views/GameView/components/Victory';

import {
  useSetCurrIdxLevel,
  useSetCurrPropertyTitle,
  useSetCurrPropertyValue, useSetIsVictory, useSetTargetShape,
  useSetUserShape
} from 'views/GameView/effects';

import {
  useChangeUserProperty,
  useChangeUserValues
} from 'views/GameView/hooks';

import {
  currPropertyTitleState,
  currPropertyValueState, isVictoryState, targetShapeState,
  userShapeState
} from 'views/GameView/store';

import degObj from 'helpers/degObj';

function GameView() {
	const levelsData = useRecoilValue(levelsDataState);
	const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
	const userShape = useRecoilValue(userShapeState);
	const targetShape = useRecoilValue(targetShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currPropertyValue = useRecoilValue(currPropertyValueState);
  const isVictory = useRecoilValue(isVictoryState);

	const setUserProperty = useChangeUserProperty();
	const setUserValues = useChangeUserValues();

	const { id } = useParams();
	const navigate = useNavigate();

	useSetUserShape();
	useSetTargetShape();
	useSetCurrPropertyTitle();
	useSetCurrPropertyValue();
	useSetCurrIdxLevel();
  useSetIsVictory();



	function changeIndexOfLevel() {
		setCurrIdxLevel(+currIdxLevel + 1);
		navigate(`/GameView/${+currIdxLevel + 1}`);
	}

	return (
		<>
			<StackCol isCentered={true}>
				<h1>{levelsData[+id]?.levelName}</h1>
				<ShapeContainer>
					<Shape
						shapeProperties={targetShape}
						defaultProperties={levelsData[currIdxLevel]?.defaultProperties}
						renderingKey={levelsData[currIdxLevel]?.renderingKey}
					/>
				</ShapeContainer>
				<br />
				<ShapeContainer>
					<Shape
						shapeProperties={userShape}
						defaultProperties={levelsData[currIdxLevel]?.defaultProperties}
						renderingKey={levelsData[currIdxLevel]?.renderingKey}
					/>
				</ShapeContainer>
				<br />
				<StackRow justifyContent="center" alignItems="center">
					{isVictory ? (
						<>
							<Victory />
							<TriangleButton
								deg={degObj.RIGHT}
								onClick={() => changeIndexOfLevel()}
							/>
						</>
					) : (
						<>
							<TriangleButton
								deg={degObj.LEFT}
								onClick={() => setUserProperty(-1)}
							/>
							<PropertyContainer>
								<PropertyName>{currPropertyTitle}</PropertyName>
								<PropertyValue>{currPropertyValue}</PropertyValue>
							</PropertyContainer>
							<TriangleButton
								deg={degObj.RIGHT}
								onClick={() => setUserProperty(1)}
							/>
						</>
					)}
				</StackRow>
				<StackRow justifyContent="space-between" alignItems="center">
					{isVictory ? (
						''
					) : (
						<>
							<CircleButton onClick={() => setUserValues('-')}>
								<Line degree={90} />
							</CircleButton>
							<CircleButton onClick={() => setUserValues('+')}>
								<Line degree={90} />
								<Line degree={180} />
							</CircleButton>
						</>
					)}
				</StackRow>
			</StackCol>
		</>
	);
}
export default GameView;
