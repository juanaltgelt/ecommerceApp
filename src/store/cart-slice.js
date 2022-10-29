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
     increase: (state, action) => {
       const item = state.cartItems.find((item) => item.id === action.payload);
       item.quantity++;
     },
     decrease: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload);
      if (itemInCart === 1) {
        itemInCart.quantity = 1;
      } else {
        itemInCart.quantity--;
      }
    },
    removeItem: (state,action) => {
      const itemInCart = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = itemInCart
    }
    ,
    calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach(item => {
            amount += item.quantity;
            total += item.quantity * item.price;
        });
        state.amount = amount;
        state.total = total;
      }
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

export const { clearCart, addToCart, increase, decrease, calculateTotals, removeItem } = cartSlice.actions;

export default cartSlice;
