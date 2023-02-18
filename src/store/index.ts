import { configureStore } from '@reduxjs/toolkit';

import { uiReducer } from './slices/ui.slice';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
	reducer: {
		ui: uiReducer,
	},
});
