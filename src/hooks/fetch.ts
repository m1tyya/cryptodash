import { useEffect, useState } from 'react';
import { z } from 'zod';

import { FETCHED_COINS_COUNT } from '~/constants';

export const CoinSchema = z.object({
	current_price: z.number(),
	id: z.string(),
	image: z.string(),
	name: z.string(),
	price_change_percentage_24h: z.number(),
	symbol: z.string(),
});

type Response =
	| {
			data: Array<z.infer<typeof CoinSchema>>;
			error?: undefined;
			loading: false;
	  }
	| { data?: undefined; error: Error; loading: false }
	| { data?: undefined; error?: undefined; loading: true };

export function useData(): Response {
	const [response, setResponse] = useState<Response>({ loading: true });

	async function fetchData() {
		try {
			const fetchedData = (await (
				await fetch(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${FETCHED_COINS_COUNT}&page=1`,
				)
			).json()) as Array<z.infer<typeof CoinSchema>>;
			CoinSchema.array().parse(fetchedData)
				? setResponse({ data: fetchedData, loading: false })
				: setResponse({
						error: new Error('Incorrect data fetched. Try again later'),
						loading: false,
				  });
		} catch (error) {
			if (error instanceof Error) {
				setResponse({ error, loading: false });
			}
			throw error;
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return response;
}
