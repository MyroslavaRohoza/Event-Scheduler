import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer.ts";

// Selectors for accessing state
export const selectEvents = (state: RootState) => state.events.eventList;
export const selectIsEditEvent = (state: RootState) => state.events.editEvent;
export const selectTitleEvent = (state: RootState) => state.filter?.eventTitle;
export const selectDateRange=(state: RootState) => state.filter?.dateRange;


export const selectFilteredEventsByDate = createSelector(
  [selectEvents, selectDateRange],
  (events, dateRange) => {
    const { startDate, endDate } = dateRange || { startDate: null, endDate: null };

    return events?.filter((event) => {
      const eventDate = new Date(event.eventDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      return (!start || eventDate >= start) && (!end || eventDate <= end);
    });
  }
);
