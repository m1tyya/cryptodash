import { FormatListBulleted, GridViewRounded } from '@mui/icons-material';
import {
	Alert,
	Box,
	CircularProgress,
	Pagination,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { type z } from 'zod';

import { IconButton } from '~/atoms/icon-button';
import { COINS_PER_PAGE, FETCHED_COINS_COUNT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { type CoinSchema } from '~/hooks/fetch';
import { useData } from '~/hooks/fetch';
import { CoinItem } from '~/molecules/coin-item';
import { type RootState } from '~/store';
import { setPage, setView } from '~/store/slices/ui.slice';

export function CardGrid() {
	const { page: currentPage, view } = useAppSelector((state) => state.ui);
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
		return (
			<Alert severity='error' sx={{ backgroundColor: '#361515' }}>
				Error fetching data. Try again later.
			</Alert>
		);
	}

	if (loading) {
		return <CircularProgress />;
	}

	function switchView(): JSX.Element {
		switch (view) {
			case 'card': {
				return (
					<Box
						display='grid'
						gap={3}
						gridTemplateColumns={{
							lg: 'repeat(4, 1fr)',
							md: 'repeat(3, 1fr)',
							sm: 'repeat(2, 1fr)',
						}}>
						{filterCards().map((coin) => (
							<CoinItem key={coin.id} {...coin} view={view} />
						))}
					</Box>
				);
			}
			case 'list': {
				return (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell sx={{ minWidth: '50%' }}>Name</TableCell>
								<TableCell sx={{ minWidth: '30%' }}>Price</TableCell>
								<TableCell>24 %</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filterCards().map((coin) => (
								<CoinItem key={coin.id} {...coin} view={view} />
							))}
						</TableBody>
					</Table>
				);
			}
		}
	}

	function changeView(view: RootState['ui']['view']) {
		dispatch(setView(view));
	}

	return (
		<Stack alignItems='center' gap={10} paddingY={10} width='90%'>
			<Stack direction='row' gap={3}>
				<IconButton
					Icon={GridViewRounded}
					label='Grid View'
					onClick={() => changeView('card')}
					size='40px'
				/>
				<IconButton
					Icon={FormatListBulleted}
					label='List View'
					onClick={() => changeView('list')}
					size='40px'
				/>
			</Stack>
			{switchView()}
			<Pagination
				color='primary'
				count={Math.ceil(FETCHED_COINS_COUNT / COINS_PER_PAGE)}
				onChange={(event, pageNumber) => handlePagination(pageNumber)}
				page={currentPage}
			/>
		</Stack>
	);
}
