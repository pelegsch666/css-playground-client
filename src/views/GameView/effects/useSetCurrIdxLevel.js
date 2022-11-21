import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { currIndexLevelState } from 'store';

function useSetCurrIdxLevel() {
    const { id } = useParams();
    	const setCurrIdxLevel = useSetRecoilState(currIndexLevelState);
	useEffect(() => {
		setCurrIdxLevel(id);
	}, [id, setCurrIdxLevel]);
}

export default useSetCurrIdxLevel;
