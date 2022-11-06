import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { _SC_flexColumn } from '../../components/_SC/layoutUtil';
import degObj from '../../helpers/degObj';
import { getLevelsTitlesFromData } from '../../helpers/getLevelsTitlesFromData';
import {
	currIndexLevelState,
	levelsDataState,
} from '../../recoil/globalStates';
import LevelLabel from './LevelLabel';
import LevelsDiv from './LevelsDiv';
import PlayButton from './PlayButton';
import StyledH1 from './StyledH1';
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';
import TriangleButton from './TriangleButton';

export default function WelcomeView() {
	const [currLevelIndex, setCurrLevelIndex] =
		useRecoilState(currIndexLevelState);
	const levelsData = useRecoilValue(levelsDataState);
	const [titles, setTitles] = useState([]);
	const [playerName, setPlayerName] = useState('');
	const setRoomId = useState('')[1];
	const navigate = useNavigate();
	const isCreateOn = useState(true)[0];

	useEffect(() => {
		setTitles(getLevelsTitlesFromData(levelsData));
	}, [levelsData]);

	function handleRoomID(roomId) {
		setRoomId(roomId);
		console.log(roomId);
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

	useEffect(() => {}, [playerName]);

	function handleName(name) {
		setPlayerName(name);
	}

	function handleClickLevel(index) {
		setCurrLevelIndex(index);
	}
	function handlePlayClick() {
		navigate(`/GameView/${currLevelIndex}`);
	}

	return (
		<>
			<_SC_flexColumn isCentered={true}>
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
			</_SC_flexColumn>
		</>
	);
}
