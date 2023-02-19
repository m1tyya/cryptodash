import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { Home } from '~/pages';

import { store } from './store';
import { theme } from './styles/theme';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<GlobalStyles
						styles={{
							body: { backgroundColor: theme.palette.background.default, margin: 0 },
							img: { blockSize: 'auto', maxInlineSize: '100%' },
						}}
					/>
					<Home />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
