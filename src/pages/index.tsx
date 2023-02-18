import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

import { CardGrid } from '~/organisms/card-grid';

export function Home() {
	const theme = useTheme();

	return (
		<Paper sx={{ backgroundColor: theme.palette.background.default }}>
			<CardGrid />
		</Paper>
	);
}
