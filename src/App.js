import "./App.css";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsList);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      {cartItems ? <Products cartItems={cartItems} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
