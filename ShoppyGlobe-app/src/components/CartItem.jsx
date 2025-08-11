// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  
  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };
  
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-gray-600">Price: <span className="font-bold">₹{product.price}</span></p>
        <div className="flex items-center justify-center sm:justify-start space-x-2 mt-1">
          <button onClick={handleDecrease} className="text-gray-600 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="font-bold">{product.quantity}</span>
          <button onClick={handleIncrease} className="text-gray-600 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <button
        onClick={handleRemoveFromCart}
        className="flex items-center space-x-1 text-red-500 hover:text-red-700 transition duration-300 font-semibold text-sm mt-2 sm:mt-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span>Remove</span>
      </button>
    </div>
  );
};

export default CartItem;