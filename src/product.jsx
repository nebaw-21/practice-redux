import Navbar from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Slice/CartSlice";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    img: "https://via.placeholder.com/150",
  },
];

const ProductCard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                {isProductInCart(product.id) ? (
                  <button
                    disabled
                    className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 cursor-not-allowed"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
