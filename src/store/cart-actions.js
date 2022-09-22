import { cartActions } from "./cart-slice";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await axios.get("https://dummyjson.com/products");
    const cartData = response.data.products
    dispatch(cartActions.replaceData(cartData));
  };
};


