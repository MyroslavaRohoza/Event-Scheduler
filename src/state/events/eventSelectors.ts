import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export const selectEvents = (state: RootState) => state.events.eventList;
export const selectIsEditEvent = (state: RootState) => state.events.editEvent;
export const selectTitleEvent = (state: RootState) => state.filter?.eventName;

export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitleEvent],
  (events, filter) =>
    Array.isArray(events) &&
    events.filter((event) =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    )
);
