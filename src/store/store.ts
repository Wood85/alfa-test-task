import { configureStore } from '@reduxjs/toolkit';
import detailsReducers from './reducers/productSlice';

export const store = configureStore({
  reducer: {
		details: detailsReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;