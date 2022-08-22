import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
import divisibleByFourReducer from '../features/divisibleByFour';

const store = configureStore({
	reducer: {
		count: countReducer,
		even: divisibleByFourReducer
	}
});

export default store;
