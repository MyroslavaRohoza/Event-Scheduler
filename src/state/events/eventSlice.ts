import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer.ts";
import { initiaState } from "../initialState.ts";
import { EventItem } from "../../types/eventTypes.ts";

const initialState = initiaState.events;

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state: RootState, action: PayloadAction<EventItem>) => {
      state.eventList.push(action.payload);
    },

    deleteEvent: (state: RootState, action: PayloadAction<number>) => {
      state.eventList = state.eventList.filter(
        (event) => event.id !== action.payload
      );
    },
    editEvent: (
      state,
      action: PayloadAction<{ id: number; updatedEvent: Partial<EventItem> }>
    ) => {
      const { id, updatedEvent } = action.payload;
      const index = state.eventList.findIndex((event) => event.id === id);
      if (index !== -1) {
        state.eventList[index] = { ...state.eventList[index], ...updatedEvent };
      }
    },

    turnOnEditEvent: (state: RootState) => {
      state.editEvent = true;
    },
    turnOffEditEvent: (state: RootState) => {
      state.editEvent = false;
    },
    filterChange(state:RootState, action) {
      state.filter.eventName= action.payload;
    },
  },
});

export const {
  addEvent,
  deleteEvent,
  editEvent,
  toggleEditEvent,
  turnOnEditEvent,
  turnOffEditEvent,
} = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
