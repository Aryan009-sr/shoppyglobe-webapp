import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-800">
      <Link to={`/products/${product.id}`} className="block">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
          <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
        </div>
      </Link>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500   text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};


export default ProductItem;