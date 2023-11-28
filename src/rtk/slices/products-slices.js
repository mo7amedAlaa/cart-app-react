import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk(
  'productsSlice/fethProducts',
  async () => {
    const res = await fetch('http://localhost:1000/products');
    const data = await res.json();
    return data;
  }
);
const productsSlice = createSlice({
  initialState: [],
  name: 'productsSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productsSlice.actions;

export default productsSlice.reducer;
