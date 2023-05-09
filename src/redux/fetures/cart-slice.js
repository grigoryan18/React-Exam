import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push({ ...payload, quantity: 1 });
      state.cartCount += 1;
    },
    removeCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item?.id !== payload);
      state.cartCount -= 1;
    },
    incrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === payload?.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item?.id === payload?.id
      );
      if (state.cartItems[itemIndex].quantity <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item?.id !== payload?.id
        );
        state.cartCount -= 1;
      } else {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    clearCartItem: (state, { payload }) => {
      state.cartItems = [];
    },
    getTotalPrice: (state, { payload }) => {
      state.cartTotal = state.cartItems.reduce((total, value) => {
        return (total += value?.quantity * value?.price);
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
  getTotalPrice,
  clearCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
