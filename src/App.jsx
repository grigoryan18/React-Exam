import React from "react";
import "./index.css";
import Navbar from "./components/ui/Navbar";
import { v4 as uuid } from "uuid";
import Cart from "./pages/Cart"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";
import DynamicShop from "./pages/DynamicShop";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:cat" element={<DynamicShop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
