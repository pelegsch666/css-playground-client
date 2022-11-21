import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import degObj from 'helpers/degObj';
import getLevelsTitlesFromData from 'helpers/getLevelsTitlesFromData';

import { currIndexLevelState, levelsDataState } from 'store';

import StackCol from 'components/layout/StackCol';

import LevelLabel from 'views/WelcomeView/components/LevelLabel';
import LevelsDiv from 'views/WelcomeView/components/LevelsDiv';
import PlayButton from 'views/WelcomeView/components/PlayButton';
import StyledH1 from 'views/WelcomeView/components/StyledH1';
import StyledInput from 'views/WelcomeView/components/StyledInput';
import StyledLabel from 'views/WelcomeView/components/StyledLabel';
import TriangleButton from 'views/WelcomeView/components/TriangleButton';

export default function WelcomeView() {
	const [currLevelIndex, setCurrLevelIndex] =
		useRecoilState(currIndexLevelState);
	const levelsData = useRecoilValue(levelsDataState);
	const [titles, setTitles] = useState([]);
	const setRoomId = useState('')[1];
	const navigate = useNavigate();
	const isCreateOn = useState(true)[0];

	useEffect(() => {
		setTitles(getLevelsTitlesFromData(levelsData));
	}, [levelsData]);

	function handleRoomID(roomId) {
		setRoomId(roomId);
	}

	function getNewIndex(array, currIndex, incrementSize) {
		let newIndex = currIndex + incrementSize;
		if (newIndex === array.length) return 0;
		if (newIndex < 0) return array.length - 1;
		return newIndex;
	}

	function handleIndexChanges(indexIncrementSize) {
		const newLevelIndex = getNewIndex(
			levelsData,
			currLevelIndex,
			indexIncrementSize
		);
		setCurrLevelIndex(newLevelIndex);
	}

	function handleClickLevel(index) {
		setCurrLevelIndex(index);
	}
	function handlePlayClick() {
		navigate(`/GameView/${currLevelIndex}`);
	}

	return (
		<>
			<StackCol isCentered={true}>
				<StyledH1>CSS Playground</StyledH1>

				{isCreateOn ? (
					<>
						<LevelsDiv>
							<TriangleButton
								deg={degObj.UP}
								onClick={() => handleIndexChanges(-1)}
							/>
							<ul style={{ listStyle: 'none' }}>
								{titles?.map((el, index) => {
									return (
										<LevelLabel
											key={index}
											onClick={() => handleClickLevel(index)}
											isCurrLvl={+index === currLevelIndex}
										>
											{el.toUpperCase()}
										</LevelLabel>
									);
								})}
							</ul>
							<TriangleButton
								deg={degObj.DOWN}
								onClick={() => handleIndexChanges(1)}
							/>
						</LevelsDiv>
					</>
				) : (
					<>
						<br />
						<StyledLabel>
							Room ID:
							<StyledInput onChange={(e) => handleRoomID(e.target.value)} />
						</StyledLabel>
					</>
				)}

				<PlayButton onClick={handlePlayClick}>PLAY </PlayButton>
			</StackCol>
		</>
	);
}
