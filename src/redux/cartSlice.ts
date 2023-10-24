import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getCartFromLS } from "../components/utils/getCartFromLS";

export type TCartItems = {
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

const { items, countPizzas, totalPrice } = getCartFromLS();
const initialState: ICartSliceState = {
  items: items,
  totalPrice: countPizzas,
  totalCount: totalPrice,
};

const counterPizzas = (state: ICartSliceState) => {
  state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TCartItems>) => {
      const filterItems = state.items.find((item) => item.id === action.payload.id);

      if (filterItems) {
        filterItems.count++;
      } else state.items.push({ ...action.payload, count: 1 });
      counterPizzas(state);
      state.totalCount = state.items.length;
    },
    minusPizza: (state, action: PayloadAction<string>) => {
      const pizza = state.items.find((item) => item.id === action.payload);
      if (pizza) {
        pizza.count--;
      }
      counterPizzas(state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const json = JSON.stringify(state.items);
      localStorage.setItem("cartItems", json);
      counterPizzas(state);
      state.totalCount = state.items.length;
    },
    clearItem: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      localStorage.clear();
    },
  },
});

export const cartSelector = (state: RootState) => state.cartSlice;

export const { addProduct, clearItem, removeItem, minusPizza } = cartSlice.actions;

export default cartSlice.reducer;
