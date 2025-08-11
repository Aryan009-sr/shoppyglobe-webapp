import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-400 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
     <Link to="/" className="flex items-center">
              <img src="https://static.vecteezy.com/system/resources/previews/011/401/535/non_2x/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg" className="h-12 me-3" alt="ShoppyGlobe Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">ShoppyGlobe</span>
            </Link>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/cart" className="relative text-gray-600 hover:text-blue-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.183 1.747.707 1.747H19m0-11a2 2 0 110 4 2 2 0 010-4z"
            />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
