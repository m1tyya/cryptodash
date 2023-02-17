import { useData } from '~/hooks/fetch';
import { CoinCard } from '~/molecules/coin-card';

export function CardGrid() {
	const { data, error, loading } = useData();

	if (error) {
		return <p>Error</p>;
	}

	if (loading) {
		return <p>Loading</p>;
	}

	return (
		<>
			{data?.map((coin) => (
				<CoinCard key={coin.id} {...coin} />
			))}
		</>
	);
}
