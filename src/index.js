import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import FontStyles from './font/FontStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<FontStyles />
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);
