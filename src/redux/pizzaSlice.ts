import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type TPizzas = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};
type TFetchPizzas = {
  items: TPizzas[];
  count: number;
};

interface PizzaSliceState {
  pizzas: TPizzas[];
  loading: boolean;
}

const initialState: PizzaSliceState = {
  pizzas: [],
  loading: true,
};

export const fetchPizzas = createAsyncThunk<TPizzas[], Record<string, string>>(
  "pizza/fetchPizzas",
  async (params) => {
    const { searchValue, category, sortBy, order } = params;
    const { data } = await axios.get<TFetchPizzas>(
      `https://634fde2edf22c2af7b5c5141.mockapi.io/items?search=${searchValue}${category}&sortBy=${sortBy}&order=${order}`,
    );
    return data.items;
  },
);

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
      state.pizzas = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.loading = false;
      state.pizzas = [];
    });
  },
});

export default pizzaSlice.reducer;
