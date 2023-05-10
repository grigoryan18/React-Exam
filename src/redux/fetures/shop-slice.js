import { createSlice } from "@reduxjs/toolkit";
import { productsDB } from "../../data/DataBase";


const initialState = {
  shopProducts: productsDB,
  uniqueCategories: []
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getUniqueCategories: (state, {payload}) => {
      state.uniqueCategories = [...new Set(productsDB.map(item => item.categoryName))];
    }
  }
})

export const {getUniqueCategories} = shopSlice.actions;
export default shopSlice.reducer;