import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../fetures/shop-slice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
