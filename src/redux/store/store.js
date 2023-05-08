import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../fetures/shop-slice";
import cartReducer from "../fetures/cart-slice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});

export default store;
