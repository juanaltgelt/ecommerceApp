import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "https://dummyjson.com/auth/login";

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async ({username, password}) => {
    try {
      const response = await axios.post(url, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
