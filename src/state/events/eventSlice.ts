import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initiaState } from "../initialState.ts";
import { RootState } from "../rootReducer.ts";

type Event = {
  id: number;
  text: string;
  completed: boolean;
};

const initialState= initiaState.events;

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state: RootState, action: PayloadAction<Event>) => {
      state.items.push(action.payload);
    },

    deleteEvent: (state: RootState, action: PayloadAction<number>) => {
      state.items = state.items.filter((event) => event.id !== action.payload);
    },

    editEvent: (
      state: RootState,
      action: PayloadAction<{ id: number; updatedEvent: Partial<Event> }>
    ) => {
      const { id, updatedEvent } = action.payload;
      const index = state.items.findIndex((event) => event.id === id);

      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...updatedEvent };
      }
    },
  },
});

export const { addEvent, deleteEvent, editEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
