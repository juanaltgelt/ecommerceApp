import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
    },
    reducers: {
        replaceData(state, action) {
            state.itemsList = action.payload;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;