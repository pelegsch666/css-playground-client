import { useRecoilState, useRecoilValue } from 'recoil';

import PIXEL_AMOUNT from 'constants/PIXEL_AMOUNT';
import propertiesValueStrings from 'constants/propertiesValueStrings';

import {
	currPropertyTitleState,
	currUserShapePropertyIdxState,
	userShapeState,
} from 'views/GameView/store';

function useChangeUserValues() {
	const [userShape, setUserShape] = useRecoilState(userShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currPropIdx = useRecoilValue(currUserShapePropertyIdxState);
	function setter(sign) {
		const newUserShape = [...userShape];
		if (typeof newUserShape[currPropIdx][currPropertyTitle] === 'number') {
			if (sign === '+') {
				newUserShape[currPropIdx] = {
					[currPropertyTitle]:
						newUserShape[currPropIdx][currPropertyTitle] + PIXEL_AMOUNT,
				};
				setUserShape(newUserShape);
			} else {
				newUserShape[currPropIdx] = {
					[currPropertyTitle]:
						newUserShape[currPropIdx][currPropertyTitle] - PIXEL_AMOUNT,
				};
				setUserShape(newUserShape);
			}
		} else {
			const value = newUserShape[currPropIdx][currPropertyTitle];
			const valueIndex =
				propertiesValueStrings[currPropertyTitle].indexOf(value);
			if (sign === '+') {
				if (
					valueIndex ===
					propertiesValueStrings[currPropertyTitle].length - 1
				) {
					const newValueIndex = 0;
					newUserShape[currPropIdx] = {
						[currPropertyTitle]:
							propertiesValueStrings[currPropertyTitle][newValueIndex],
					};
					setUserShape(newUserShape);
				} else {
					const newValueIndex = valueIndex + 1;
					newUserShape[currPropIdx] = {
						[currPropertyTitle]:
							propertiesValueStrings[currPropertyTitle][newValueIndex],
					};
					setUserShape(newUserShape);
				}
			} else {
				if (valueIndex === 0) {
					const newValueIndex =
						propertiesValueStrings[currPropertyTitle].length - 1;
					newUserShape[currPropIdx] = {
						[currPropertyTitle]:
							propertiesValueStrings[currPropertyTitle][newValueIndex],
					};
					setUserShape(newUserShape);
				} else {
					const newValueIndex = valueIndex - 1;
					newUserShape[currPropIdx] = {
						[currPropertyTitle]:
							propertiesValueStrings[currPropertyTitle][newValueIndex],
					};
					setUserShape(newUserShape);
				}
			}
		}
	}
	return setter;
}

export default useChangeUserValues;
