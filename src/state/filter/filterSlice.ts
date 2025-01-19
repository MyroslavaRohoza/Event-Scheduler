import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../initialState.ts";

const eventsSlice = createSlice({
  name: "filter",
  initialState: initialState.filter,
  reducers: {
    filterChange: (state, action: PayloadAction<string>) => {
      state.eventTitle = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setDateFilter: (
      state,
      action: PayloadAction<{
        startDate: string | null;
        endDate: string | null;
      }>
    ) => {
      state.dateRange = action.payload;
    },
  },
});

export const { filterChange, setCategoryFilter, setDateFilter } =
  eventsSlice.actions;

export const filterReducer = eventsSlice.reducer;
