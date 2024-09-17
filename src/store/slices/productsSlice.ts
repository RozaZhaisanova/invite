import { headphones } from "./../../lib/mocks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [...headphones],
  wired: [],
  wireless: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
