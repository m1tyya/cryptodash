export function formatFixedPoint(num: number, decimals: number): string {
	if (decimals < 0) {
		throw new Error('Cannot format with negative decimals.');
	}

	return num.toFixed(decimals);
}

export function formatPrice(price: number): string {
	return `$ ${formatThousandSeparators(formatFixedPoint(price, 2), ' ')}`;
}

export function formatPriceChange(priceChange: number): string {
	return `${formatFixedPoint(Math.abs(priceChange), 2)} %`;
}

export function formatThousandSeparators(num: number | string, separator: string): string {
	if (separator.length !== 1) {
		throw new Error('You must specify one character to separate thousands.');
	}

	return num.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, separator);
}
