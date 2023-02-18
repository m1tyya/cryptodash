// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	env: {
		browser: true,
		es2022: true,
		jest: true,
		node: true,
	},
	extends: ['plugin:storybook/recommended'],
	overrides: [
		{
			files: ['*.stories.*'],
			rules: {
				'storybook/csf-component': 'warn',
			},
		},
		{
			files: ['*.tsx', '*.jsx'],
			rules: {
				'react/boolean-prop-naming': [
					'warn',
					{
						message: "Use 'has' or 'is' before boolean prop name.",
						propTypeNames: ['boolean'],
						validateNested: true,
					},
				],
				'react/destructuring-assignment': ['warn', 'always'],
				'react/function-component-definition': [
					'warn',
					{
						namedComponents: 'function-declaration',
					},
				],
				'react/hook-use-state': 'warn',
				'react/jsx-boolean-value': ['warn', 'always'],
				'react/jsx-fragments': ['warn', 'syntax'],
				'react/jsx-key': 'warn',
				'react/jsx-pascal-case': 'warn',
				'react/jsx-sort-props': [
					'warn',
					{
						ignoreCase: true,
					},
				],
				'react/no-array-index-key': 'warn',
				'react/no-children-prop': 'error',
				'react-hooks/exhaustive-deps': 'off',
			},
		},
		{
			files: ['./*.ts', './.storybook/*.ts', './src/**/*.stories.*'],
			rules: {
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off',
			},
		},
		{
			files: ['*.html'],
			parser: '@html-eslint/parser',
			rules: {
				'@html-eslint/indent': ['warn', 'tab'],
				'@html-eslint/no-trailing-spaces': 'warn',
			},
		},
		{
			files: ['*.json', '*.jsonc'],
			parser: 'jsonc-eslint-parser',
			rules: {
				'jsonc/indent': ['warn', 'tab'],
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				'@typescript-eslint/array-type': [
					'warn',
					{
						default: 'generic',
					},
				],
				'@typescript-eslint/consistent-type-imports': [
					'warn',
					{
						/* To be released
																"fixStyle": "inline-type-imports",
																*/
					},
				],
				'@typescript-eslint/method-signature-style': ['warn', 'property'],

				'@typescript-eslint/naming-convention': [
					'warn',
					{
						format: ['UPPER_CASE', 'strictCamelCase', 'StrictPascalCase'],
						leadingUnderscore: 'allow',
						selector: 'variable',
					},
				],
				'@typescript-eslint/no-array-constructor': 'warn',
				'@typescript-eslint/no-explicit-any': 'warn',
				'@typescript-eslint/no-for-in-array': 'warn',
				'@typescript-eslint/no-restricted-imports': [
					'error',
					{
						message: 'Import from index.',
						patterns: [
							'~/components/*/*',
							'~/features/*/*',
							'~/layouts/*/*',
							'~/styles/*',
							'~/types/*',
							'~/utils/*',
						],
					},
				],
				'@typescript-eslint/no-useless-constructor': 'warn',
				'@typescript-eslint/padding-line-between-statements': [
					'warn',
					{
						blankLine: 'always',
						next: 'return',
						prev: '*',
					},
				],
				'@typescript-eslint/sort-type-constituents': 'warn',
				'@typescript-eslint/triple-slash-reference': [
					'warn',
					{
						lib: 'never',
						path: 'never',
						types: 'never',
					},
				],
			},
		},
		{
			files: ['*.js', '*.ts', '*.jsx', '*.tsx', '*.mjs', '*.cjs'],
			rules: {
				'prettier/prettier': 'warn',
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@html-eslint',
		'sort-exports',
		'typescript-sort-keys',
		'sort-keys-fix',
		'autofix',
		'canonical',
		'css',
		'destructuring',
		'import',
		'jsonc',
		'jest',
		'jsx-a11y',
		'simple-import-sort',
		'sort-class-members',
		'sort-destructure-keys',
		'sort-keys-fix',
		'prettier',
		'promise',
		'react',
		'react-hooks',
		'sort',
		'sort-react-dependency-arrays',
		'unicorn',
		'unused-imports',
		'@typescript-eslint',
	],
	root: true,
	rules: {
		'arrow-body-style': ['warn', 'as-needed'],
		'autofix/prefer-destructuring': [
			'warn',
			{
				array: false,
				object: true,
			},
		],
		'canonical/prefer-inline-type-import': 'warn',
		curly: ['warn', 'all'],
		'dot-notation': 'warn',
		eqeqeq: ['warn', 'smart'],
		'import/first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-default-export': 'error',
		'import/no-duplicates': [
			'warn',
			{
				'prefer-inline': true,
			},
		],
		'no-case-declarations': 'warn',
		'no-confusing-arrow': 'warn',
		'no-dupe-class-members': 'warn',
		'no-eval': 'warn',
		'no-iterator': 'warn',
		'no-loop-func': 'warn',
		'no-multi-assign': 'warn',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-wrappers': 'warn',
		'no-param-reassign': 'error',
		'no-unneeded-ternary': 'warn',
		'no-useless-escape': 'warn',
		'no-var': 'warn',
		'object-shorthand': 'warn',
		'one-var': ['warn', 'never'],
		'prefer-arrow-callback': 'warn',
		'prefer-const': 'warn',
		'prefer-object-spread': 'warn',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'prefer-template': 'warn',
		'prettier/prettier': 'warn',
		'promise/prefer-await-to-then': 'warn',
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': 'warn',
		'sort/type-properties': 'warn',
		'sort-class-members/sort-class-members': [
			'warn',
			{
				order: [],
			},
		],
		'sort-destructure-keys/sort-destructure-keys': [
			'warn',
			{
				caseSensitive: false,
			},
		],
		'sort-exports/sort-exports': ['warn', { sortDir: 'asc' }],
		'sort-keys-fix/sort-keys-fix': ['warn', 'asc', { natural: true }],
		'sort-react-dependency-arrays/sort': 'warn',
		'spaced-comment': [
			'warn',
			'always',
			{
				markers: ['/'],
			},
		],
		'unicorn/better-regex': 'warn',
		'unicorn/consistent-destructuring': 'warn',
		'unicorn/consistent-function-scoping': 'warn',
		'unicorn/escape-case': 'warn',
		'unicorn/explicit-length-check': 'warn',
		'unicorn/new-for-builtins': 'warn',
		'unicorn/no-array-callback-reference': 'warn',
		'unicorn/no-array-for-each': 'warn',
		'unicorn/no-array-push-push': 'warn',
		'unicorn/no-array-reduce': 'warn',
		'unicorn/no-hex-escape': 'warn',
		'unicorn/no-instanceof-array': 'warn',
		'unicorn/no-negated-condition': 'warn',
		'unicorn/no-nested-ternary': 'warn',
		'unicorn/no-null': 'warn',
		'unicorn/no-typeof-undefined': 'warn',
		'unicorn/no-unnecessary-await': 'warn',
		'unicorn/no-unreadable-array-destructuring': 'warn',
		'unicorn/no-useless-spread': 'warn',
		'unicorn/number-literal-case': 'warn',
		'unicorn/prefer-array-some': 'warn',
		'unicorn/prefer-at': ['warn'],
		'unicorn/prefer-date-now': 'warn',
		'unicorn/prefer-default-parameters': 'warn',
		'unicorn/prefer-includes': 'warn',
		'unicorn/prefer-logical-operator-over-ternary': 'warn',
		'unicorn/prefer-math-trunc': 'warn',
		'unicorn/prefer-negative-index': 'warn',
		'unicorn/prefer-spread': 'warn',
		'unicorn/prefer-string-replace-all': 'warn',
		'unicorn/prefer-string-starts-ends-with': 'warn',
		'unicorn/prefer-switch': [
			'warn',
			{
				emptyDefaultCase: 'no-default-case',
			},
		],
		'unicorn/prefer-ternary': 'warn',
		'unicorn/relative-url-style': 'warn',
		'unicorn/require-array-join-separator': 'warn',
		'unicorn/switch-case-braces': 'warn',
		'unicorn/template-indent': 'warn',
		'unicorn/throw-new-error': 'warn',
		'unused-imports/no-unused-imports': 'warn',
		yoda: 'warn',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		react: {
			version: 'detect',
		},
	},
});
