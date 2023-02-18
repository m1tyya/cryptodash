import { configureStore } from '@reduxjs/toolkit';

import { coinDataReducer } from './slices/coin-data.slice';
import { uiReducer } from './slices/ui.slice';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
	reducer: {
		coinData: coinDataReducer,
		ui: uiReducer,
	},
});
