import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total cost of all items in the cart
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h2>
        
        {/* Conditional rendering for an empty cart */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty. Start shopping now! 🛒</p>
        ) : (
          <div>
            {/* List of Cart Items */}
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} product={item} />
              ))}
            </div>

            {/* Checkout Section with Total Cost */}
            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-800">
                Total: ${totalCost.toFixed(2)}
              </span>
              <Link
                to="/checkout"
                className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-red-800 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;