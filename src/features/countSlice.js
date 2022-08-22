import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 1
};

const counterSlice = createSlice({
	initialState,
	name: 'count',
	reducers: {
		increase: state => {
			state.value++;
		}
	}
});

export const { increase } = counterSlice.actions;

export default counterSlice.reducer;
