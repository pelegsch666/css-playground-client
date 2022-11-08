import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import degObj from 'helpers/degObj';

import { currIndexLevelState, levelsDataState } from 'recoil/globalStates';

import { _SC_flexColumn, _SC_flexRow } from 'components/_SC/layoutUtil';
import CircleButton from './CircleButton';
import Line from './Line';
import PropertyContainer from './PropertyContainer';
import PropertyName from './PropertyName';
import PropertyValue from './PropertyValue';
import Shape from './Shape';
import ShapeContainer from './ShapeContainer';
import TriangleButton from './TriangleButton';
import Victory from './Victory';

import {
	useSetCurrPropertyTitle,
	useSetCurrPropertyValue,
	useSetTargetShape,
	useSetUserShape
} from 'views/GameView/effects';

import {
	useChangeUserProperty,
	useChangeUserValues
} from 'views/GameView/hooks';

import {
	currPropertyTitleState,
	currPropertyValueState,
	targetShapeState,
	userShapeState
} from 'views/GameView/store';

function GameView() {
	const levelsData = useRecoilValue(levelsDataState);
	const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
	const userShape = useRecoilValue(userShapeState);
	const targetShape = useRecoilValue(targetShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currPropertyValue = useRecoilValue(currPropertyValueState);

	const [isVictory, setIsVictory] = useState(false);

	const changeUserProperty = useChangeUserProperty();
	const changeUserValues = useChangeUserValues();

	const { id } = useParams();
	const navigate = useNavigate();

	useSetUserShape();
	useSetTargetShape();
	useSetCurrPropertyTitle();
	useSetCurrPropertyValue();

	useEffect(() => {
		setCurrIdxLevel(id);
	}, [id, setCurrIdxLevel]);

	useEffect(() => {
		setIsVictory(checkVictory(userShape, targetShape));
	}, [userShape, targetShape]);

	function checkVictory(userShape, targetShape) {
		let flag = true;
		for (let i = 0; i < userShape.length; i++) {
			const keyName = Object.keys(userShape[i])[0];
			if (userShape[i][keyName] !== targetShape[i][keyName]) {
				flag = false;
				return flag;
			}
		}

		return flag;
	}

	function changeIndexOfLevel() {
		setCurrIdxLevel(+currIdxLevel + 1);
		navigate(`/GameView/${+currIdxLevel + 1}`);
	}

	return (
		<>
			<_SC_flexColumn isCentered={true}>
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
				<_SC_flexRow justifyContent="center" alignItems="center">
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
								onClick={() => changeUserProperty(-1)}
							/>
							<PropertyContainer>
								<PropertyName>{currPropertyTitle}</PropertyName>
								<PropertyValue>{currPropertyValue}</PropertyValue>
							</PropertyContainer>
							<TriangleButton
								deg={degObj.RIGHT}
								onClick={() => changeUserProperty(1)}
							/>
						</>
					)}
				</_SC_flexRow>
				<_SC_flexRow justifyContent="space-between" alignItems="center">
					{isVictory ? (
						''
					) : (
						<>
							<CircleButton onClick={() => changeUserValues('-')}>
								<Line degree={90} />
							</CircleButton>
							<CircleButton onClick={() => changeUserValues('+')}>
								<Line degree={90} />
								<Line degree={180} />
							</CircleButton>
						</>
					)}
				</_SC_flexRow>
			</_SC_flexColumn>
		</>
	);
}
export default GameView;
