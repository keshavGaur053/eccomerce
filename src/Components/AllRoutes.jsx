import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Product from "./Product";

import Products from "./Products";
import Cart from "./Cart";


const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Homepage/>} />
     
      <Route path="/products" element={<Products/>} />

      <Route path="/products/:id" element={<Product />} />

      <Route path="/cart" element={<Cart />} />
      
    </Routes>
  );
};

export default AllRoutes;
