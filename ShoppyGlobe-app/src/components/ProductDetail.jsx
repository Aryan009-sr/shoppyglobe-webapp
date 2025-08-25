import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found.');
        const data = await response.json();
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      } catch (err) {
        if(isMounted){
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchProduct();
    //Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleAddToCart = () => {
    if (product) dispatch(addToCart(product));
  };

  if (loading) return <div className="text-center mt-8 text-gray-700">Loading product details...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center mt-8 text-red-500">Product not found.</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-900">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex-shrink-0">
          <img src={product.thumbnail} alt={product.title} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
          <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 text-white py-3 rounded-lg cursor-pointer font-semibold text-lg hover:bg-green-800 transition "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;