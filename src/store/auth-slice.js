import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./auth-actions";

const initialState = {
  userData: [],
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
            state.userData = []
            state.isLoggedIn = false;
    }
  },
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.isLoggedIn = false;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    [getUserData.rejected]: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const {signout} = authSlice.actions;

export default authSlice;
