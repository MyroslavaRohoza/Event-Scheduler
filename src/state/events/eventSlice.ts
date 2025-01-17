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
      state.items = state.eventList.filter((event) => event.id !== action.payload);
    },

    editEvent: (
      state: RootState,
      action: PayloadAction<{ id: number; updatedEvent: Partial<EventItem> }>
    ) => {
      const { id, updatedEvent } = action.payload;
      const index = state.eventList.findIndex((event) => event.id === id);

      if (index !== -1) {
        state.items[index] = { ...state.eventList[index], ...updatedEvent };
      }
    },
  },
});

export const { addEvent, deleteEvent, editEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
