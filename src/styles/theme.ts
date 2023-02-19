import { createTheme } from '@mui/material';

export const theme = createTheme({
	components: {
		MuiTableCell: {
			styleOverrides: {
				sizeMedium: {
					fontSize: 'clamp(0.8rem, 0.8vw + 0.9rem, 1.3rem)',
				},
			},
		},
	},
	palette: {
		background: {
			default: '#0a0a0f',
			paper: '#222531',
		},
		mode: 'dark',
	},
	typography: {
		body1: {
			color: '#999999',
			fontSize: 'clamp(0.9rem, 0.9vw + 0.7rem, 1.2rem)',
		},
		h2: {
			color: '#F2F2F2',
			fontSize: 'clamp(1rem, 1vw + 0.9rem, 1.5rem)',
		},
	},
});
