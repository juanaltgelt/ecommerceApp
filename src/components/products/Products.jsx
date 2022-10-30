import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../store/cart-actions";
import { calculateTotals } from "../../store/cart-slice";
import Product from "../product/Product";
import SearchInput from "../input/SearchInput";
import { useState } from "react";

function Products() {
  const dispatch = useDispatch();
  const { itemsList, cartItems } = useSelector((store) => store.cart);
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);


  useEffect(() => {
    dispatch(fetchCartData(searchFilter));
  }, [dispatch, searchFilter]);


  return (
    <div>

      <div className="bg-white">

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <SearchInput setSearchFilter={setSearchFilter} />
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {itemsList.length ? itemsList.map((product) => <Product key={product.id} {...product} />)

              : <h1>No results found!</h1>
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default Products