// src/components/Checkout.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Checkout</h2>
        <p className="text-gray-600 text-lg">Your cart is empty. Please add items to proceed to checkout.</p>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
          Back to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-4">
                  <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                  <p className="font-semibold">{item.title}</p>
                </div>
                <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center font-bold text-xl text-gray-800">
            <span>Total:</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
        </div>

        {/* User Information Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <input type="text" id="address" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;