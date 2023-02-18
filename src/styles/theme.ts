import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		background: {
			default: '#17171a',
			paper: '#222531',
		},
	},
	typography: {
		body1: {
			color: '#999999',
			fontSize: '18px',
		},
		h2: {
			color: '#F2F2F2',
			fontSize: '25px',
		},
	},
});
