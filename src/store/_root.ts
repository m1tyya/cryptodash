import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import { uiReducer } from './slices/ui.slice';

export type AppDispatch = typeof store.dispatch;

const persistConfig = {
	key: 'root',
	storage: localStorage,
	version: 1,
};

const reducer = combineReducers({
	ui: uiReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
	reducer: persistedReducer,
});
