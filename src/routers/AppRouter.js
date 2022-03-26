import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
