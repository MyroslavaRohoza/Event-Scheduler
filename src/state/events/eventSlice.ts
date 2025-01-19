import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventItem } from "../../types/eventTypes.ts";
import { initialState } from "../initialState.ts";

const eventsSlice = createSlice({
  name: "events",
  initialState: initialState.events,
  reducers: {
    addEvent: (state, action: PayloadAction<EventItem>) => {
      const newEvent = action.payload;

      if (Array.isArray(state.eventList) && state.eventList.length > 0) {
        const isDuplicate = state.eventList.some(
          (event) => event.title.toLowerCase() === newEvent.title.toLowerCase()
        );

        if (isDuplicate) {
          state.error = "An event with that name already exists!";
          return;
        }
      }

      state.eventList.push(newEvent);
      state.error = null;
    },

    deleteEvent: (state, action: PayloadAction<number>) => {
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
        state.eventList[index] = {
          ...state.eventList[index],
          ...updatedEvent,
        };
      }
    },
    turnOnEditEvent: (state) => {
      state.editEvent = true;
    },
    turnOffEditEvent: (state) => {
      state.editEvent = false;
    },
  },
});

export const {
  addEvent,
  deleteEvent,
  editEvent,
  turnOnEditEvent,
  turnOffEditEvent,
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
