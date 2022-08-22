import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false
};

const divisibleByFour = createSlice({
	initialState,
	name: 'divisibleByFour',
	reducers: {
		toggle: (state, action) => {
			state.value = action.payload % 4 === 0 ? true : false;
		}
	}
});

export const { toggle } = divisibleByFour.actions;

export default divisibleByFour.reducer;