import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack/Stack';
import { useState } from 'react';

import { CARDS_PER_PAGE } from '~/constants';
import { useData } from '~/hooks/fetch';
import { CoinCard } from '~/molecules/coin-card';

export function CardGrid() {
	const [currentPage, setCurrentPage] = useState(1);
	const { data, error, loading } = useData();

	const lastPostIndex = currentPage * CARDS_PER_PAGE;
	const firstPostIndex = lastPostIndex - CARDS_PER_PAGE;
	const currentCards = data?.slice(firstPostIndex, lastPostIndex);

	function handlePagination(event: any, pageNumber: number) {
		setCurrentPage(pageNumber);
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
				{currentCards?.map((coin) => (
					<CoinCard key={coin.id} {...coin} />
				))}
			</Box>
			<Pagination
				color='primary'
				count={10}
				onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
			/>
		</Stack>
	);
}
