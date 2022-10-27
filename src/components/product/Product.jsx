import { increase } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

function Product({ id, images, title, price }) {
  const dispatch = useDispatch();
  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" />
            {title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <div>
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            onClick={() => dispatch(increase({ id, images, title, price }))}
            className="w-full inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
