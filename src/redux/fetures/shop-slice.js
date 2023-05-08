import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/DataBase";


const initialState = {
  shopProducts: productsDB
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {}
})

export const {} = shopSlice.actions;
export default shopSlice.reducer;