import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  // State for cart item count
  const cartlength = useSelector((state) => state.cart.length);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
        <div className="text-white font-bold text-xl">MyShop</div>
        </Link>

        {/* Cart Icon with Item Count */}
        <div className="relative">
          <button
            className="text-gray-300 hover:text-white flex items-center"
        
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.93-.63L17 13M7 13h10m-5 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
            {/* Cart item count badge */}
         
         <Link to={"/cart"}>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartlength}
              </span>

         </Link>
          
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
