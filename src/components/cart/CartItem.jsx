import { useDispatch } from "react-redux";
import { increase, decrease } from "../../store/cart-slice";

function CartItem({ title, quantity, id }) {
  const dispatch = useDispatch();

  return (
    <li className="my-3 flex flex-row items-center relative">
      <p className="my-1">
        {title} 
      </p>
      <div className="mr-3 flex items-center absolute top-0 right-0">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l" onClick={()=> dispatch(decrease(id))}>-</button>
      <p className="mx-2">{quantity}</p>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r" onClick={()=> dispatch(increase(id))}>+</button>
      </div>
      
    </li>
  );
}

export default CartItem;
