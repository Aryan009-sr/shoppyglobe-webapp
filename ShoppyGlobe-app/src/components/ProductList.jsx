import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://dummyjson.com/products');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (loading) return <div className="text-center mt-8 text-gray-700">Loading products...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center my-6 text-gray-800">Our Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;