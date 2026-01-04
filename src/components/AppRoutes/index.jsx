import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

import Home from "../../pages/Home";
import Brands from "../../pages/Brands";
import Contact from "../../pages/Contact";

import ProductMen from "../../pages/Products/productMen";
import ProductWomen from "../../pages/Products/productWomen";

import LookBook01 from "../../pages/LookBook/Book01";
import LookBook02 from "../../pages/LookBook/Book02";
import LookBook03 from "../../pages/LookBook/Book03";
import LookBook04 from "../../pages/LookBook/Book04";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="brands" element={<Brands />} />

        {/* PRODUCTS */}
        <Route path="products">
          <Route path="men" element={<ProductMen />} />
          <Route path="women" element={<ProductWomen />} />
        </Route>

        {/* LOOK BOOK */}
        <Route path="look-book">
          <Route path="book01" element={<LookBook01 />} />
          <Route path="book02" element={<LookBook02 />} />
          <Route path="book03" element={<LookBook03 />} />
          <Route path="book04" element={<LookBook04 />} />
        </Route>

        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}


 
