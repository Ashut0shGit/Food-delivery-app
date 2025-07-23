import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const isCartEmpty = cartItems.length === 0;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
      </div>

      <div className="w-6/12 mx-auto flex-grow">
        {!isCartEmpty && (
          <>
            <div className="flex justify-end mb-4">
              <button
                className="rounded-lg px-4 py-2 bg-red-100 text-red-600 font-medium hover:bg-red-200"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <ItemList items={cartItems} />
          </>
        )}
      </div>

      {isCartEmpty && (
        <div className="text-center text-gray-700 pb-6 self-center">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-sm">
            You can go to the home page to view more restaurants.
          </p>

          <button>
            <Link to="/" className="text-blue-500 hover:underline">
              Go to Home
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
