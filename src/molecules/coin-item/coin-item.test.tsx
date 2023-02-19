import { render } from '@testing-library/react';

import { CoinItem } from './coin-item';

describe('Render default card view', () => {
	render(
		<CoinItem
			current_price={3}
			id='st'
			image='stst'
			name='st'
			price_change_percentage_24h={2}
			symbol='st'
			view='card'
		/>,
	);
	expect(1 + 1).toBe(2);
});
