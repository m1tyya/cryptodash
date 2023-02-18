import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from '~/pages';

import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					body: { backgroundColor: theme.palette.background.default, margin: 0 },
					img: { blockSize: 'auto', maxInlineSize: '100%' },
				}}
			/>
			<Home />
		</ThemeProvider>
	</React.StrictMode>,
);
