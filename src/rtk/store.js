import { configureStore } from '@reduxjs/toolkit';
import productsSlices from './slices/products-slices';
import cartSlice from './slices/cart-slice';

export const store = configureStore({
  reducer: {
    products: productsSlices,
    cart: cartSlice,
  },
});
