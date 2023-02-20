import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { CardGrid } from '~';

export function Home() {
	const theme = useTheme();

	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
			<CardGrid />
		</Stack>
	);
}
