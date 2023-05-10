import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/ui/Navbar";
import Cart from "./pages/Cart"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";
import DynamicShop from "./pages/DynamicShop";
import Layout from "./layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "./redux/fetures/cart-slice";
import SingleProduct from "./pages/SingleProduct";

export default function App() {

  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getTotalPrice())
  }, [dispatch, cartItems])

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:cat" element={<DynamicShop />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct/>} />
        </Route>
      </Routes>
    </div>
  );
}
