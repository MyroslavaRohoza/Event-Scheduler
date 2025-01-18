import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

// Selectors for accessing state
export const selectEvents = (state: RootState) => state.events.events.eventList;
export const selectIsEditEvent = (state: RootState) => state.events.events.editEvent;
export const selectTitleEvent = (state: RootState) => state.events.filter.eventTitle;

// Memoized selector for filtered events
export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitleEvent],
  (events, filter) =>
    events.filter((event) =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    )
);
