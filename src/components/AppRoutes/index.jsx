import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

import Home from "../../pages/Home";
import Brands from "../../pages/Brands";
import Contact from "../../pages/Contact";

import ProductMen from "../../pages/Products/productMen";
import ProductWomen from "../../pages/Products/productWomen";

import LookBook01 from "../../pages/LookBook/LookBook01";
import LookBook02 from "../../pages/LookBook/LookBook02";
import LookBook03 from "../../pages/LookBook/LookBook03";
import LookBook04 from "../../pages/LookBook/LookBook04";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />

        {/* REAL product pages */}
        <Route path="/products/men" element={<ProductMen />} />
        <Route path="/products/women" element={<ProductWomen />} />

        {/* LOOK BOOK */}
        <Route path="/look-book/look-book01" element={<LookBook01 />} />
        <Route path="/look-book/look-book02" element={<LookBook02 />} />
        <Route path="/look-book/look-book03" element={<LookBook03 />} />
        <Route path="/look-book/look-book04" element={<LookBook04 />} />

        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
