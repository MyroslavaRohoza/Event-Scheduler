import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const eventsSlice = createSlice({
  name: "pages",
  initialState: initialState.pages,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems += action.payload;
    },
  },
});

export const { setCurrentPage, setItemsPerPage, setTotalItems } =
  eventsSlice.actions;

export const pagesReducer = eventsSlice.reducer;
