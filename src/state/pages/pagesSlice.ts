import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState as globalInitialState } from "../initialState.ts";
import { PagesInitState } from "../../types/eventTypes.ts";

const initialState = globalInitialState.pages as PagesInitState;

const eventsSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setItemsPerPage } = eventsSlice.actions;

export const pagesReducer = eventsSlice.reducer;
