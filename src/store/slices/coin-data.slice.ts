import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { type z } from 'zod';

import { type CoinSchema } from '~/hooks/fetch';

type DataState = Array<z.infer<typeof CoinSchema>>;

const initialState: DataState = [];

export const coinDataSlice = createSlice({
	initialState,
	name: 'coin-data',
	reducers: {
		setCoinData: (state, action: PayloadAction<Array<z.infer<typeof CoinSchema>>>) =>
			action.payload,
	},
});

export const { setCoinData } = coinDataSlice.actions;
export const { reducer: coinDataReducer } = coinDataSlice;
