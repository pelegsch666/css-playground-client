import { useRecoilState, useRecoilValue } from 'recoil';

import PIXEL_AMOUNT from 'constants/PIXEL_AMOUNT';
import propertiesValueStrings from 'constants/propertiesValueStrings';


import {
    currPropertyTitleState,
    currUserShapePropertyIdxState,
    userShapeState
} from 'views/GameView/store';

function useChangeUserValues(sign) {
	const [userShape, setUserShape] = useRecoilState(userShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currUserShapePropertyIdx = useRecoilValue(
		currUserShapePropertyIdxState
	);

	const newUserShape = [...userShape];
	if (
		typeof newUserShape[currUserShapePropertyIdx][currPropertyTitle] ===
		'number'
	) {
		if (sign === '+') {
			newUserShape[currUserShapePropertyIdx][currPropertyTitle] += PIXEL_AMOUNT;
		} else {
			newUserShape[currUserShapePropertyIdx][currPropertyTitle] -= PIXEL_AMOUNT;
		}
	} else {
		const value = newUserShape[currUserShapePropertyIdx][currPropertyTitle];
		const valueIndex = propertiesValueStrings[currPropertyTitle].indexOf(value);
		if (sign === '+') {
			if (valueIndex === propertiesValueStrings[currPropertyTitle].length - 1) {
				const newValueIndex = 0;
				newUserShape[currUserShapePropertyIdx][currPropertyTitle] =
					propertiesValueStrings[currPropertyTitle][newValueIndex];
			} else {
				const newValueIndex = valueIndex + 1;
				newUserShape[currUserShapePropertyIdx][currPropertyTitle] =
					propertiesValueStrings[currPropertyTitle][newValueIndex];
			}
		} else {
			if (valueIndex === 0) {
				const newValueIndex =
					propertiesValueStrings[currPropertyTitle].length - 1;
				newUserShape[currUserShapePropertyIdx][currPropertyTitle] =
					propertiesValueStrings[currPropertyTitle][newValueIndex];
			} else {
				const newValueIndex = valueIndex - 1;
				newUserShape[currUserShapePropertyIdx][currPropertyTitle] =
					propertiesValueStrings[currPropertyTitle][newValueIndex];
			}
		}

		return setUserShape(newUserShape);
	}
}

export default useChangeUserValues;
