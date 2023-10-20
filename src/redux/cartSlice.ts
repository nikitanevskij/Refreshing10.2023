import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type TCartItems = {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  count: number;
  price: number;
};

export interface ICartSliceState {
  items: TCartItems[];
  totalPrice: number;
  totalCount: number;
}
const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const counterPizzas = (state: ICartSliceState) => {
  state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const filterItems = state.items.find((item) => item.id === action.payload.id);

      if (filterItems) {
        filterItems.count++;
      } else state.items.push({ ...action.payload, count: 1 });
      counterPizzas(state);
      state.totalCount = state.items.length;
    },
    minusPizza: (state, action) => {
      const pizza = state.items.find((item) => item.id === action.payload);
      if (pizza) {
        pizza.count--;
      }
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
      state.totalCount = state.items.length;
    },
    clearItem: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cartSlice;

export const { addProduct, clearItem, removeItem, minusPizza } = cartSlice.actions;

export default cartSlice.reducer;
