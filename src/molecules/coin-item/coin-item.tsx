import { Box, TableCell, TableRow, Unstable_Grid2 as Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Marquee from 'react-fast-marquee';
import { type z } from 'zod';

import { type CoinSchema, type RootState, formatPrice, formatPriceChange, theme } from '~';

type Props = z.infer<typeof CoinSchema> & { view: RootState['ui']['view'] };

export function CoinItem({
	current_price,
	image,
	name,
	price_change_percentage_24h,
	symbol,
	view,
}: Props): JSX.Element {
	switch (view) {
		case 'card': {
			return (
				<Box
					border='2px solid #3D3D3D'
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
					<Grid overflow='hidden' xs={6}>
						<Typography sx={{ whiteSpace: 'nowrap' }} variant='h2'>
							<Marquee gradient={false}>{name}&nbsp;&nbsp;&nbsp;</Marquee>
						</Typography>
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
		case 'list': {
			return (
				<TableRow>
					<TableCell>
						<Stack alignItems='flex-end' direction='row' gap={2}>
							<picture style={{ height: '30px', width: '30px' }}>
								<img src={image} />
							</picture>
							<Typography variant='h2'>{name}</Typography>
							<Typography variant='body1'>{symbol.toUpperCase()}</Typography>
						</Stack>
					</TableCell>
					<TableCell>
						<Typography variant='body1'>{formatPrice(current_price)}</Typography>
					</TableCell>
					<TableCell>
						<Typography
							color={
								price_change_percentage_24h > 0
									? theme.palette.success.light
									: theme.palette.error.light
							}
							variant='body1'>
							{formatPriceChange(price_change_percentage_24h)}
						</Typography>
					</TableCell>
				</TableRow>
			);
		}
		default: {
			return <></>;
		}
	}
}
