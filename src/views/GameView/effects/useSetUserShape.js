import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { currIndexLevelState, levelsDataState } from 'store';
import { userShapeState } from 'views/GameView/store';

function useSetUserShape() {
	const levelsData = useRecoilValue(levelsDataState);
	const currIdxLevel = useRecoilValue(currIndexLevelState);
	const setUserShape = useSetRecoilState(userShapeState);

	useEffect(() => {
		const userProperties = levelsData[currIdxLevel]?.userProperties;
		const userPropertiesArr = [];

		for (const property in userProperties) {
			if (property === 'customProperties') {
				for (const customProperty in userProperties[property]) {
					userPropertiesArr.push({
						[customProperty]: userProperties[property][customProperty],
					});
				}
			} else {
				const { value, gap, min, max, items } = userProperties[property];
				userPropertiesArr.push({ [property]: { value, gap, min, max, items } });
			}
		}
		setUserShape(userPropertiesArr);
	}, [levelsData, currIdxLevel, setUserShape]);
}

export default useSetUserShape;
