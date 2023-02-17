import { useEffect, useState } from 'react';
import { z } from 'zod';

export const CoinSchema = z.object({
	current_price: z.number(),
	id: z.string(),
	image: z.string(),
	name: z.string(),
	price_change_percentage_24h: z.number(),
	symbol: z.string(),
	total_volume: z.number(),
});

type Status = {
	data?: Array<z.infer<typeof CoinSchema>>;
	error?: Error;
	loading: boolean;
};

export function useData(): Status {
	const [status, setStatus] = useState<Status>({
		loading: false,
	});

	async function fetchData() {
		setStatus({ loading: true });
		try {
			const fetchedData = (await (
				await fetch(
					'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
				)
			).json()) as Array<z.infer<typeof CoinSchema>>;
			console.log(fetchedData.at(0));
			CoinSchema.array().parse(fetchedData)
				? setStatus({ loading: false })
				: setStatus({
						error: new Error('Incorrect data fetched. Try again later'),
						loading: false,
				  });
		} catch (error) {
			if (error instanceof Error) {
				setStatus({ error, loading: false });
			}
			throw error;
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return status;
}
