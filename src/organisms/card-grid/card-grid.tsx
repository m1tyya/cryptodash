import { FormatListBulleted, GridViewRounded } from '@mui/icons-material';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import { type z } from 'zod';

import { IconButton } from '~/atoms/icon-button';
import { COINS_PER_PAGE, FETCHED_COINS_COUNT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { type CoinSchema } from '~/hooks/fetch';
import { useData } from '~/hooks/fetch';
import { CoinCard } from '~/molecules/coin-card';
import { setPage } from '~/store/slices/ui.slice';

export function CardGrid() {
	const currentPage = useAppSelector((state) => state.ui.page);
	const dispatch = useAppDispatch();
	const { data, error, loading } = useData();

	const lastPostIndex = currentPage * COINS_PER_PAGE;
	const firstPostIndex = lastPostIndex - COINS_PER_PAGE;

	function filterCards(): Array<z.infer<typeof CoinSchema>> {
		if (!data) {
			return [];
		}

		return data.slice(firstPostIndex, lastPostIndex);
	}

	function handlePagination(pageNumber: number) {
		dispatch(setPage(pageNumber));
	}

	if (error) {
		return <p>Error</p>;
	}

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<>
			<Stack direction='row' gap={3}>
				<IconButton Icon={GridViewRounded} label='Grid View' size='40px' />
				<IconButton Icon={FormatListBulleted} label='List View' size='40px' />
			</Stack>
			<Box
				display='grid'
				gap={3}
				gridTemplateColumns={{ lg: 'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)' }}
				width='90%'>
				{filterCards().map((coin) => (
					<CoinCard key={coin.id} {...coin} />
				))}
			</Box>
			<Pagination
				color='primary'
				count={Math.ceil(FETCHED_COINS_COUNT / COINS_PER_PAGE)}
				onChange={(event, pageNumber) => handlePagination(pageNumber)}
				page={currentPage}
			/>
		</>
	);
}
