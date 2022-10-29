import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsOpen: false,
  deleteModalIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
        
      if (action.payload === "cart") {
        state.cartIsOpen = true;
      } else {
        console.log(action.payload);
        state.deleteModalIsOpen = true;
      }
    },
    closeModal: (state, action) => {
        if (action.payload === "cart") {
            state.cartIsOpen = false;
          } else {
            state.deleteModalIsOpen = false;
          }
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
