import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((product) => {
        return product.id === action.payload.id;
      });
      if (findProduct) {
        findProduct.amount += 1;
      } else {
        const cloneProduct = { ...action.payload, amount: 1 };
        state.push(cloneProduct);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
