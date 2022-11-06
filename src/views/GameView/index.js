import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import PIXEL_AMOUNT from 'constants/PIXEL_AMOUNT';
import propertiesValueStrings from 'constants/propertiesValueStrings';

import degObj from 'helpers/degObj';

import { _SC_flexColumn, _SC_flexRow } from 'components/_SC/layoutUtil';
import { currIndexLevelState, levelsDataState } from 'recoil/globalStates';
import CircleButton from './CircleButton';
import Line from './Line';
import PropertyContainer from './PropertyContainer';
import PropertyName from './PropertyName';
import PropertyValue from './PropertyValue';
import Shape from './Shape';
import ShapeContainer from './ShapeContainer';
import TriangleButton from './TriangleButton';
import Victory from './Victory';

function GameView() {
	const { id } = useParams();
	const levelsData = useRecoilValue(levelsDataState);
	const [currIdxLevel, setCurrIdxLevel] = useRecoilState(currIndexLevelState);
	const [targetShape, setTargetShape] = useState([]);
	const [userShape, setUserShape] = useState([]);
	const [propertyTitle, setPropertyTitle] = useState([]);
	const [propertyValue, setPropertyValue] = useState([]);
	const [currUserShapeIdx, setUserShapeIdx] = useState(0);
	const [isVictory, setIsVictory] = useState(false);

	useEffect(() => {
		const userProperties = levelsData[currIdxLevel]?.userProperties;
		const userPropertiesArr = [];
		for (const property in userProperties) {
			userPropertiesArr.push({ [property]: userProperties[property] });
		}
		setUserShape(userPropertiesArr);
	}, [levelsData, currIdxLevel]);

	useEffect(() => {
		const targetProperties = levelsData[currIdxLevel]?.targetProperties;
		const targetPropertiesArr = [];
		for (const property in targetProperties) {
			targetPropertiesArr.push({ [property]: targetProperties[property] });
		}
		setTargetShape(targetPropertiesArr);
	}, [levelsData, currIdxLevel]);

	useEffect(() => {
		if (userShape.length > 0) {
			setPropertyTitle(Object.keys(userShape[currUserShapeIdx])[0]);
			setPropertyValue(Object.values(userShape[currUserShapeIdx])[0]);
		}
	}, [userShape, currUserShapeIdx]);

	useEffect(() => {
		setIsVictory(checkVictory(userShape, targetShape));
	}, [userShape, targetShape]);

	function changeUserProperty(num) {
		const newIndex = num + currUserShapeIdx;
		if (newIndex === userShape.length) {
			setUserShapeIdx(0);
		} else if (newIndex < 0) {
			setUserShapeIdx(userShape.length - 1);
		} else {
			setUserShapeIdx(newIndex);
		}
	}
	function changeUserValues(sign) {
		const newUserShape = [...userShape];
		if (typeof newUserShape[currUserShapeIdx][propertyTitle] === 'number') {
			if (sign === '+') {
				newUserShape[currUserShapeIdx][propertyTitle] += PIXEL_AMOUNT;
			} else {
				newUserShape[currUserShapeIdx][propertyTitle] -= PIXEL_AMOUNT;
			}
		} else {
			const value = newUserShape[currUserShapeIdx][propertyTitle];
			const valueIndex = propertiesValueStrings[propertyTitle].indexOf(value);
			if (sign === '+') {
				if (valueIndex === propertiesValueStrings[propertyTitle].length - 1) {
					const newValueIndex = 0;
					newUserShape[currUserShapeIdx][propertyTitle] =
						propertiesValueStrings[propertyTitle][newValueIndex];
				} else {
					const newValueIndex = valueIndex + 1;
					newUserShape[currUserShapeIdx][propertyTitle] =
						propertiesValueStrings[propertyTitle][newValueIndex];
				}
			} else {
				if (valueIndex === 0) {
					const newValueIndex =
						propertiesValueStrings[propertyTitle].length - 1;
					newUserShape[currUserShapeIdx][propertyTitle] =
						propertiesValueStrings[propertyTitle][newValueIndex];
				} else {
					const newValueIndex = valueIndex - 1;
					newUserShape[currUserShapeIdx][propertyTitle] =
						propertiesValueStrings[propertyTitle][newValueIndex];
				}
			}
		}

		setUserShape(newUserShape);
	}
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
		setCurrIdxLevel(currIdxLevel + 1);
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
								<PropertyName>{propertyTitle}</PropertyName>
								<PropertyValue>{propertyValue}</PropertyValue>
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
