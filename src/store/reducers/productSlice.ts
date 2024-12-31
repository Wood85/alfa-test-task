import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type IProduct from '../../interfaces/Product';

export interface IState {
  details: IProduct;
}

const initialState: IState = {
	details: {
    id: 1,
	  title: "",
	  description: "", 
	  price: 1,
	  images: [""],
	  isLiked: false,
	}
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: { 
    details: (state, action: PayloadAction<IProduct>) => {
      const currentState = state;
      currentState.details.id = action.payload.id;
			currentState.details.title = action.payload.title;
			currentState.details.description = action.payload.description;
			currentState.details.price = action.payload.price;
			currentState.details.images = action.payload.images;
			currentState.details.isLiked = action.payload.isLiked;
    },
    
  },
});

export const { details } = productSlice.actions;

export default productSlice.reducer;