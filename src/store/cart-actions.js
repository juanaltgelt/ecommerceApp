import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://dummyjson.com/products/search?q="

export const fetchCartData = createAsyncThunk(
    "cart/fetchCartData ",
    async (item) => {
     
      try {
        const response = await axios.get(url+item);
        const cartData = response.data.products;
        return cartData
      } catch (error) {
        console.log(error);
      }
    }
  );
  

