import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import checkVictory from 'helpers/checkVictory';

import {
	isVictoryState,
	targetShapeState,
	userShapeState,
} from 'views/GameView/store';

function useSetIsVictory() {
	const setIsVictory = useSetRecoilState(isVictoryState);
	const userShape = useRecoilValue(userShapeState);
	const targetShape = useRecoilValue(targetShapeState);
	useEffect(() => {
		setIsVictory(checkVictory(userShape, targetShape));
	}, [userShape, targetShape, setIsVictory]);
}

export default useSetIsVictory;
