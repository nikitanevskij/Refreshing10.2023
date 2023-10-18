import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizzas: [],
  loading: true,
};

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async (params) => {
  const { searchValue, category, sortBy, order } = params;
  const { data } = await axios.get(
    `https://634fde2edf22c2af7b5c5141.mockapi.io/items?search=${searchValue}${category}&sortBy=${sortBy}&order=${order}`,
  );
  return data;
});

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.loading = true;
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload.items;
      state.loading = false;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.loading = false;
      state.pizzas = [];
    });
  },
});

export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
