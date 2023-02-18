import { Box, Unstable_Grid2 as Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type z } from 'zod';

import { type CoinSchema } from '~/hooks/fetch';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { theme } from '~/styles/theme';
import { formatPrice, formatPriceChange } from '~/utils';

type Props = z.infer<typeof CoinSchema>;

export function CoinCard({
	current_price,
	image,
	name,
	price_change_percentage_24h,
	symbol,
}: Props) {
	return (
		<Box
			border='2px solid 	#3D3D3D'
			borderRadius={4}
			display='grid'
			gridTemplateAreas='
			"info info"
			"price price"
			'
			padding={5}
			rowGap={3}
			sx={{
				':hover': {
					borderColor: '#7D7D7D',
					transform: 'scale(1.04)',
				},
				backgroundColor: theme.palette.background.paper,
				transition: 'all 0.2s ease-in-out 0s',
			}}>
			<Grid xs={6}>
				<Typography variant='h2'>{name}</Typography>
				<Typography marginTop={1} variant='body1'>
					{symbol.toUpperCase()}
				</Typography>
			</Grid>
			<Grid xs={6}>
				<Stack direction='row' justifyContent='end'>
					<picture style={{ height: '50px', width: '50px' }}>
						<img src={image} />
					</picture>
				</Stack>
			</Grid>
			<Grid xs={6}>
				<Typography variant='body1'>{formatPrice(current_price)}</Typography>
			</Grid>
			<Grid xs={6}>
				<Stack direction='row' justifyContent='end'>
					<Typography
						color={
							price_change_percentage_24h > 0
								? theme.palette.success.light
								: theme.palette.error.light
						}
						variant='body1'>
						{formatPriceChange(price_change_percentage_24h)}
					</Typography>
				</Stack>
			</Grid>
		</Box>
	);
}
