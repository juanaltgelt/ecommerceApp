import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../store/cart-actions";
import { calculateTotals } from "../../store/cart-slice";
import Product from "../product/Product";

function Products() {

  const dispatch = useDispatch();
  const {itemsList, cartItems} = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);


  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  return (
    <div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {itemsList && itemsList.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </div>
       

    </div>
  )
}

export default Products