import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState as globalInitialState } from "../initialState.ts";
import { FilterInitState } from "../../types/eventTypes.ts";

const initialState = globalInitialState.filter as FilterInitState;

const eventsSlice = createSlice({
  name: "filter",
  initialState,
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
      state.dateRange = {
        startDate: action.payload.startDate ?? "",
        endDate: action.payload.endDate ?? "",
      };
    },
  },
});

export const { filterChange, setCategoryFilter, setDateFilter } =
  eventsSlice.actions;

export const filterReducer = eventsSlice.reducer;
