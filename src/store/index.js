import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice';
import cartSlice from './cart-slice'
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    modal: modalSlice.reducer
  },
});

export default store;
