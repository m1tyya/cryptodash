/** @type {import("prettier").Config} */
module.exports = {
	bracketSameLine: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'html',
			},
		},
	],
	plugins: [],
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
};
