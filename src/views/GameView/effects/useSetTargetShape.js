import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currIndexLevelState, levelsDataState } from 'store';
import { targetShapeState } from 'views/GameView/store';

function useSetTargetShape() {
	const levelsData = useRecoilValue(levelsDataState);
	const currIdxLevel = useRecoilValue(currIndexLevelState);
    
	const setTargetShape = useSetRecoilState(targetShapeState);
	useEffect(() => {
		const targetProperties = levelsData[currIdxLevel]?.targetProperties;
		const targetPropertiesArr = [];
		for (const property in targetProperties) {
			if (property === 'customProperties') {
				for (const customProperty in targetProperties[property]) {
					targetPropertiesArr.push({
						[customProperty]: targetProperties[property][customProperty],
					});
				}
			} else {
				const { value, gap, min, max } = targetProperties[property];
				targetPropertiesArr.push({ [property]: { value, gap, min, max } });
			}
		}

		setTargetShape(targetPropertiesArr);
	}, [currIdxLevel, levelsData, setTargetShape]);
}

export default useSetTargetShape;
