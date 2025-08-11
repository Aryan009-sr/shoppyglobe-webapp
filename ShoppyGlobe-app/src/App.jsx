import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/footer';
import Checkout from './components/Checkout';

// Lazy load the components for code splitting
const Cart = lazy(() => import('./components/Cart'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
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
      </div>
    </Router>
  );
}
export default App;