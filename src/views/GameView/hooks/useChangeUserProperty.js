import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    currUserShapePropertyIdxState,
    userShapeState
} from 'views/GameView/store';

function useChangeUserProperty(num) {
	const userShape = useRecoilValue(userShapeState);
	const [currUserShapePropertyIdx, setUserShapePropertyIdx] = useRecoilState(
		currUserShapePropertyIdxState
	);

	const newIndex = useState(currUserShapePropertyIdx + num)[0];

	if (newIndex === userShape.length) {
		return setUserShapePropertyIdx(0);
	} else if (newIndex < 0) {
		return setUserShapePropertyIdx(userShape.length - 1);
	} else {
		return setUserShapePropertyIdx(newIndex);
	}
}

export default useChangeUserProperty;
