import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppContextProvider } from './context/GlobalContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<StrictMode>
		<AppContextProvider>
			<App />
		</AppContextProvider>
	</StrictMode>
);
