import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';

// Lazy load the components for code splitting
const Cart = lazy(() => import('./components/Cart'));
const ProductList = lazy(() => import ('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Checkout = lazy(() => import ('./components/Checkout'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'))

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className='flex-grow'>
          <Suspense fallback={<div className='text-center py-8'>Loading...</div>}>
            <Routes>
              <Route element={<ProductList />} path="/" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Checkout/>} path="/checkout"/>
              <Route element={<ProductDetail />} path="/products/:id" />
              <Route element={<NotFoundPage />} path="*" />
            </Routes>
          </Suspense>
        </main>
        <Footer/>
        <Toaster/>
      </div>
    </Router>
  );
}
export default App;