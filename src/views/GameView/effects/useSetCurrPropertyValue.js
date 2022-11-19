import { useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
	currPropertyTitleState,
	currPropertyValueState,
	currUserShapePropertyIdxState,
	userShapeState,
} from 'views/GameView/store';

function useSetCurrPropertyValue() {
	const userShape = useRecoilValue(userShapeState);
	const currUserShapePropertyIdx = useRecoilValue(
		currUserShapePropertyIdxState
	);

	const currPropertyTitle = useRecoilValue(currPropertyTitleState);

	const setCurrPropertyValue = useSetRecoilState(currPropertyValueState);
	useEffect(() => {
		if (userShape.length > 0) {
			setCurrPropertyValue(
				userShape[currUserShapePropertyIdx][currPropertyTitle]?.value
			);
		}
	}, [
		userShape,
		currUserShapePropertyIdx,
		setCurrPropertyValue,
		currPropertyTitle,
	]);
}

export default useSetCurrPropertyValue;
