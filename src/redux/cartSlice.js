import { createSlice } from "@reduxjs/toolkit";
import isEqual from "lodash.isequal";
const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
