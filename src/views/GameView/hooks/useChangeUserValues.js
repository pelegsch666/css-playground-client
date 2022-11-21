import { useRecoilState, useRecoilValue } from 'recoil';

import propertiesValueStrings from 'constants/propertiesValueStrings';

import {
	currPropertyTitleState,
	currUserShapePropertyIdxState,
	userShapeState
} from 'views/GameView/store';

function isValueNumber(value) {
	return typeof value === 'number';
}

function getNewValueBySignAndGap(value, sign, gap) {
	let res;
	if (sign === '+') {
		res = value + gap;
	} else if (sign === '-') {
		res = value - gap;
	}
	return res;
}

function useChangeUserValues() {
	const [userShape, setUserShape] = useRecoilState(userShapeState);
	const currPropertyTitle = useRecoilValue(currPropertyTitleState);
	const currPropIdx = useRecoilValue(currUserShapePropertyIdxState);

	function setter(sign) {
		const newUserShape = [...userShape];
		const newCurrProp = { ...newUserShape[currPropIdx][currPropertyTitle] };

		if (isValueNumber(newCurrProp.value)) {
			const { value, gap, min, max } = newCurrProp;
			const newValue = getNewValueBySignAndGap(value, sign, gap);
			if (newValue > max || newValue < min) {
				newUserShape[currPropIdx] = { [currPropertyTitle]: { ...newCurrProp } };
				return setUserShape(newUserShape);
			}
			newCurrProp.value = newValue;
			newUserShape[currPropIdx] = { [currPropertyTitle]: { ...newCurrProp } };
			setUserShape(newUserShape);
		} else {
			const { value, items } = newUserShape[currPropIdx][currPropertyTitle];
			const currIdx = items.indexOf(value);
			// console.log('value', value);
			// console.log('items', items);
			// console.log('currIdx', currIdx);
			// console.log('newUserShape', newUserShape);
			// console.log('currPropIdx', currPropIdx);
			// console.log('currPropertyTitle', currPropertyTitle);
			// console.log(
			// 	'...newUserShape[currPropIdx][currPropertyTitle]',
			// 	newUserShape[currPropIdx][currPropertyTitle]
			// );
			// console.log('value: items[newIdx]', items[currIdx + 1]);
			if (sign === '+') {
				if (currIdx === items.length - 1) {
					const newIdx = 0;
					newUserShape[currPropIdx][currPropertyTitle] = {
						...newUserShape[currPropIdx][currPropertyTitle],
						value: items[newIdx],
					};
					setUserShape(newUserShape);
				} else {
					const newIdx = currIdx + 1;
					const newValue = items[newIdx];
					console.log(newUserShape[currPropIdx][currPropertyTitle]);

					console.log(newUserShape[currPropIdx][currPropertyTitle].value);
					console.log('newUserShape', newUserShape);

					newUserShape[currPropIdx][currPropertyTitle] = {
						...newUserShape[currPropIdx][currPropertyTitle],
					};

					console.log('newUserShape', newUserShape);

					setUserShape(newUserShape);
				}
			} else if (sign === '-') {
				if (currIdx === 0) {
					const newIdx = items - 1;
					newUserShape[currPropIdx][currPropertyTitle] = {
						...newUserShape[currPropIdx][currPropertyTitle],
						value: items[newIdx],
					};
					setUserShape(newUserShape);
				} else {
					const newIdx = currIdx - 1;
					newUserShape[currPropIdx][currPropertyTitle] = {
						...newUserShape[currPropIdx][currPropertyTitle],
						value: items[newIdx],
					};
					setUserShape(newUserShape);
				}
			}
		}
	}
	return setter;
}

export default useChangeUserValues;
