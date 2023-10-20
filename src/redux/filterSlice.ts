import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSort = {
  name: string;
  searchName: string;
  order: string;
};

interface IFilterSliceState {
  categories: string[];
  activeCategory: number;
  sort: TSort[];
  activeSort: number;
  searchValue: string;
}

const initialState: IFilterSliceState = {
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
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setActiveSort: (state, action: PayloadAction<number>) => {
      state.activeSort = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategories, setActiveSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
