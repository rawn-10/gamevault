import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Products from './components/Products';
import FlashSale from './components/FlashSale';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="products" element={<Products />} />
          <Route path="flash-sale" element={<FlashSale />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;