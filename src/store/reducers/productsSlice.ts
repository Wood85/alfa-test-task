import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type IProduct from "../../interfaces/Product";

export interface IState {
  products: IProduct[];
  favorites: number[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  searchQuery: string;
}

const initialState: IState = {
  products: [],
  favorites: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 10,
  searchQuery: ""
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
      } else {
        state.favorites.push(productId);
      }
      state.products = state.products.map((product) =>
        product.id === productId ? { ...product, isLiked: !product.isLiked } : product
      );
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId);
      state.favorites = state.favorites.filter((id) => id !== productId);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  }
});

export const {
  setProducts,
  toggleFavorite,
  deleteProduct,
  setLoading,
  addProduct,
  setCurrentPage,
  setSearchQuery
} = productsSlice.actions;

export default productsSlice.reducer;
