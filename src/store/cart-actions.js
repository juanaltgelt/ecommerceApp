import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://dummyjson.com/products"

export const fetchCartData = createAsyncThunk(
    "cart/fetchCartData ",
    async () => {
      try {
        const response = await axios.get(url);
        const cartData = response.data.products;
        return cartData
      } catch (error) {
        console.log(error);
      }
    }
  );
  

