import { useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
    currPropertyTitleState,
    currUserShapePropertyIdxState,
    userShapeState
} from 'views/GameView/store';

function useSetCurrPropertyTitle() {
	const userShape = useRecoilValue(userShapeState);
	const currUserShapePropertyIdx = useRecoilValue(
		currUserShapePropertyIdxState
	);

	const setCurrPropertyTitle = useSetRecoilState(currPropertyTitleState);
	useEffect(() => {
		if (userShape.length > 0) {
			setCurrPropertyTitle(Object.keys(userShape[currUserShapePropertyIdx])[0]);
		}
	}, [userShape, currUserShapePropertyIdx, setCurrPropertyTitle]);
}

export default useSetCurrPropertyTitle;
