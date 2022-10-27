import { createSlice } from "@reduxjs/toolkit";

import { fetchCartData } from "./cart-actions";

const initialState = {
  itemsList: [],
  cartItems: [],
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // increase: (state, action) => {
    //   const item = state.cartItems.find((item) => item.id === action.payload.id);
    //   item.quantity++;
    // },
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

export const { clearCart, addToCart, increase } = cartSlice.actions;

export default cartSlice;
