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
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    increase: (state, { payload }) => {
      const cartItem = {...payload, quantity: 1}
      console.log(cartItem);
    },
  },
  extraReducers: {
    [fetchCartData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCartData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.itemsList = action.payload;
    },
    [fetchCartData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, increase } = cartSlice.actions;

export default cartSlice;
