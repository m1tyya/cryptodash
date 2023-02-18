import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Home } from '~/pages';

import { store } from './store';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles
					styles={{
						body: { backgroundColor: theme.palette.background.default, margin: 0 },
						img: { blockSize: 'auto', maxInlineSize: '100%' },
					}}
				/>
				<Home />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
