// import { useDispatch } from "react-redux";
// import { increase } from "../../store/cart-slice";

function CartItem({ title, quantity}) {
  // const dispatch = useDispatch()
  return (
    <li>
      <p>{title} \\ Quantity: {quantity}.</p>
      {/* <button
        onClick={dispatch(increase(id))}>
        increase
      </button> */}
    </li>
  )
}

export default CartItem