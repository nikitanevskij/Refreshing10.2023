import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  activeCategory: 0,
  sort: [
    { name: "популярности (ask)", searchName: "rating", order: "ask" },
    { name: "популярности (desc)", searchName: "rating", order: "desc" },
    { name: "цене (ask)", searchName: "price", order: "ask" },
    { name: "цене (desc)", searchName: "price", order: "desc" },
    { name: "алфавиту (ask)", searchName: "name", order: "ask" },
    { name: "алфавиту (desc)", searchName: "name", order: "desc" },
  ],
  activeSort: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActiveSort: (state, action) => {
      state.activeSort = action.payload;
    },
  },
});

export const { setCategories, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;
