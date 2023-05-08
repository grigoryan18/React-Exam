import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    addToCart(state, {payload}) {
      state.cartItems.push({...payload, quantity: 1});
    }
  }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;