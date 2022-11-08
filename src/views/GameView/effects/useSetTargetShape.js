import { useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currIndexLevelState, levelsDataState } from 'recoil/globalStates';
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
				targetPropertiesArr.push({ [property]: targetProperties[property] });
			}
		}

		setTargetShape(targetPropertiesArr);
	}, [levelsData, currIdxLevel, setTargetShape]);
}

export default useSetTargetShape;
