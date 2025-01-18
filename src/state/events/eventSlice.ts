import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventItem } from "../../types/eventTypes";

// Define the initial state structure
export const initialState = {
  events: {
    eventList: [] as EventItem[],
    loading: false,
    error: null as string | null,
    editEvent: false,
  },
  filter: {
    eventTitle: "",
  },
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
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
  },
});

export const {
  addEvent,
  deleteEvent,
  editEvent,
  turnOnEditEvent,
  turnOffEditEvent,
  filterChange,
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
