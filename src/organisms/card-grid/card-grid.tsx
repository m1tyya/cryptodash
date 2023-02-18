import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack/Stack';
import { type z } from 'zod';

import { CARDS_PER_PAGE } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { type CoinSchema } from '~/hooks/fetch';
import { useData } from '~/hooks/fetch';
import { CoinCard } from '~/molecules/coin-card';
import { setPage } from '~/store/slices/ui.slice';

export function CardGrid() {
	const currentPage = useAppSelector((state) => state.ui.page);
	const dispatch = useAppDispatch();
	const { data, error, loading } = useData();

	const lastPostIndex = currentPage * CARDS_PER_PAGE;
	const firstPostIndex = lastPostIndex - CARDS_PER_PAGE;

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
		return <p>Loading</p>;
	}

	return (
		<Stack alignItems='center' justifyContent='space-evenly' minHeight='100vh'>
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
				count={10}
				onChange={(event, pageNumber) => handlePagination(pageNumber)}
				page={currentPage}
			/>
		</Stack>
	);
}
