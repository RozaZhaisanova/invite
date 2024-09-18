import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../../lib/types";
import { RootState } from "..";

interface CartState {
  items: ICartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartProduct>) => {
      const { title } = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      if (existingItem) {
        // Увеличиваем счетчик товара
        existingItem.quantity++;
      } else {
        // Добавляем новый товар
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.title !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((item) => {
        return item.title === action.payload;
      });

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity++;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity--;
        if (state.items[itemIndex].quantity === 0) {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
