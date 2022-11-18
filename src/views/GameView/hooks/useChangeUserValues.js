import { useRecoilState, useRecoilValue } from 'recoil';

import PIXEL_AMOUNT from 'constants/PIXEL_AMOUNT';
import propertiesValueStrings from 'constants/propertiesValueStrings';


import {
    currPropertyTitleState,
    currUserShapePropertyIdxState,
    userShapeState
} from 'views/GameView/store';

function useChangeUserValues() {
	const [userShape, setUserShape] = useRecoilState(userShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currUserShapePropertyIdx = useRecoilValue(
		currUserShapePropertyIdxState
	);
    function setter(sign){
	const newUserShape = [...userShape];
	console.log('newUserShape',newUserShape)
	console.log('currIdx', currUserShapePropertyIdx)
	console.log('currPropertyTitle',currPropertyTitle)
	console.log('newUserShape[currUserShapePropertyIdx][currPropertyTitle]',newUserShape[currUserShapePropertyIdx][currPropertyTitle])
	console.log(typeof newUserShape[currUserShapePropertyIdx][currPropertyTitle] ===
		'number')
	
	console.log('sign',sign)
		if (
		typeof newUserShape[currUserShapePropertyIdx][currPropertyTitle] ===
		'number'
	    
		) {
		console.log(newUserShape[currUserShapePropertyIdx])
			if (sign === '+') {
			Object.defineProperties(newUserShape[currUserShapePropertyIdx],{
			[currPropertyTitle]:  newUserShape[currUserShapePropertyIdx][currPropertyTitle] +
			 PIXEL_AMOUNT
			})    
		} else {
			Object.defineProperties(newUserShape[currUserShapePropertyIdx],{
				[currPropertyTitle]:  newUserShape[currUserShapePropertyIdx][currPropertyTitle] -
				 PIXEL_AMOUNT})
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
		} }

		
	}
	return setter;
}

export default useChangeUserValues;
