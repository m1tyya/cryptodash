import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type UiState = {
	page: number;
	view: 'cards' | 'list';
};

const initialState: UiState = {
	page: 1,
	view: 'cards',
};

export const uiSlice = createSlice({
	initialState,
	name: 'ui-data',
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setView: (state, action: PayloadAction<UiState['view']>) => {
			state.view = action.payload;
		},
	},
});

export const {
	actions: { setPage, setView },
	reducer: uiReducer,
} = uiSlice;
