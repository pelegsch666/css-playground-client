import { useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
	currPropertyValueState,
	currUserShapePropertyIdxState,
	userShapeState,
} from 'views/GameView/store';

function useSetCurrPropertyValue() {
	const userShape = useRecoilValue(userShapeState);
	const currUserShapePropertyIdx = useRecoilValue(
		currUserShapePropertyIdxState
	);

	const setCurrPropertyValue = useSetRecoilState(currPropertyValueState);
	useEffect(() => {
		if (userShape.length > 0) {
			setCurrPropertyValue(
				Object.values(userShape[currUserShapePropertyIdx])[0]
			);
		}
	}, [userShape, currUserShapePropertyIdx, setCurrPropertyValue]);
}


export default useSetCurrPropertyValue;