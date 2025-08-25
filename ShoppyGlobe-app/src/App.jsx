// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';

// Use React.lazy for code splitting
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

// Create a new component to handle conditional rendering of Header and Footer
const AppContent = () => {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/invalid-path') || location.pathname.startsWith('/404'); 
  // You might need to adjust the condition based on how you handle your 404 route

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Conditionally render Header */}
      {!hideNav && <Header />}
      
      <main className="flex-grow">
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Conditionally render Footer */}
      {!hideNav && <Footer />}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;