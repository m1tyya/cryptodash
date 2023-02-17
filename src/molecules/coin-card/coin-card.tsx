import { type z } from 'zod';

import { type CoinSchema } from '~/hooks/fetch';

type Props = z.infer<typeof CoinSchema>;

export function CoinCard({
	current_price,
	id,
	image,
	name,
	price_change_percentage_24h,
	symbol,
	total_volume,
}: Props) {
	return <div>{name}</div>;
}
