import { Paper, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { CardGrid } from '~/organisms/card-grid';

export function Home() {
	const theme = useTheme();

	return (
		<Paper sx={{ backgroundColor: theme.palette.background.default }}>
			<Stack
				alignItems='center'
				gap={10}
				justifyContent='center'
				minHeight='100vh'
				paddingX={2}
				paddingY={4}>
				<CardGrid />
			</Stack>
		</Paper>
	);
}
