import { createSelector } from "@reduxjs/toolkit";
import { selectEvents } from "../events/eventSelectors";
import { RootState } from "../rootReducer";

export const selectDateRange = (state: RootState) =>
  state.filter.dateRange;

export const selectCategoryFilter = (state: RootState) =>
  state.filter.selectedCategory;

export const selectTitleEvent = (state: RootState) =>
  state.filter.eventTitle

export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitleEvent, selectCategoryFilter, selectDateRange],
  (events, filter, category, dateRange) => {
    const { startDate = "", endDate = "" } = dateRange || {};

    return (
      Array.isArray(events) && events.length>0&&
      events.filter((event) => {
        const matchesTitle = event.title
          .toLowerCase()
          .includes(filter.toLowerCase());

        const matchesCategory =
          category && category !== "all" ? event.category === category : true;

        const eventDate = new Date(event.date);
        const start = startDate ? new Date(startDate) : "";
        const end = endDate ? new Date(endDate) : "";

        const matchesDate =
          (!start || eventDate >= start) && (!end || eventDate <= end);

        return matchesTitle && matchesCategory && matchesDate;
      })
    );
  }
);
