import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventItem } from "../../types/eventTypes";
import { initialState } from "../initialState.ts";

// Define the initial state structure

const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<EventItem>) => {
      state.events.eventList.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.events.eventList = state.events.eventList.filter(
        (event) => event.id !== action.payload
      );
    },
    editEvent: (
      state,
      action: PayloadAction<{ id: number; updatedEvent: Partial<EventItem> }>
    ) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.eventList.findIndex(
        (event) => event.id === id
      );
      if (index !== -1) {
        state.events.eventList[index] = {
          ...state.events.eventList[index],
          ...updatedEvent,
        };
      }
    },
    turnOnEditEvent: (state) => {
      state.events.editEvent = true;
    },
    turnOffEditEvent: (state) => {
      state.events.editEvent = false;
    },
    filterChange: (state, action: PayloadAction<string>) => {
      state.filter.eventTitle = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filter.selectedCategory = action.payload;
    },
    setDateFilter: (
      state,
      action: PayloadAction<{
        startDate: string | null;
        endDate: string | null;
      }>
    ) => {
      state.filter.dateRange = action.payload;
    },
  },
});

export const {
  addEvent,
  deleteEvent,
  editEvent,
  turnOnEditEvent,
  turnOffEditEvent,
  filterChange,
  setCategoryFilter,
  setDateFilter,
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
