import { RootState } from "..";
import { Product } from "../../lib/types";
import { headphones } from "./../../lib/mocks";
import { createSlice } from "@reduxjs/toolkit";
interface ProductState {
  products: Product[];
}
const initialState: ProductState = {
  products: [...headphones],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export const selectProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer;
