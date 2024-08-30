import { useSelector, useDispatch } from 'react-redux';
import Navbar from './navbar';
import { removeFromCart, updateQuantity } from './Slice/CartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  // Calculate total amount
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="space-y-4">
        {cart.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 relative">
            {/* Remove button */}
            <button
              onClick={() => handleRemove(product.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img src={product.img} alt={product.name} className="w-32 h-32 object-cover rounded-lg" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-2">
                <label htmlFor={`quantity-${product.id}`} className="text-gray-800">Quantity:</label>
                <input
                  id={`quantity-${product.id}`}
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  className="border rounded-lg px-2 py-1 w-20"
                />
              </div>
            </div>
            <p className="text-gray-800 font-bold ml-4">${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Total Amount</h2>
        <p className="text-gray-800 text-lg">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
