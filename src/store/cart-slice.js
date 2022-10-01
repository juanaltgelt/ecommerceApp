import { createSlice } from "@reduxjs/toolkit";
import { fetchCartData } from "./cart-actions";

const initialState = {
  itemsList: [],
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCartData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCartData.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.itemsList = action.payload
      },
      [fetchCartData.rejected]: (state) => {
        state.isLoading = false;
      },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
