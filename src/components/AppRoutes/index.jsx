import { Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";

// pages
 

import Home from "../../pages/Home";
import Brands from "../../pages/Brands";
import Products from "../../pages/Products";
import LookBook from "../../pages/LookBook";
import Contact from "../../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
         
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/look-book" element={<LookBook />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
