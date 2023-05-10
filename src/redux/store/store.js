import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../fetures/shop-slice";
import cartReducer from "../fetures/cart-slice";
import productReducer from "../fetures/product-slice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    product: productReducer
  },
});

export default store;
