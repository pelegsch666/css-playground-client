import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { createGlobalStyle } from 'styled-components';

import levels from 'levels';
import { levelsDataState } from './store';

import GameView from './views/GameView';
import WelcomeView from './views/WelcomeView';

//const socket = io('http://localhost:5050');

const GlobalStyle = createGlobalStyle`
html{ height: 100vh}
body{
 background: linear-gradient(172.94deg, #16003B 20.22%, #003B11 94.49%);
 color: white;}
`;

function App() {
	const setLevelsData = useSetRecoilState(levelsDataState);

	useEffect(() => {
		setLevelsData(levels);
	}, [setLevelsData]);

	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<WelcomeView />} />
					<Route path="GameView/:id" element={<GameView />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
