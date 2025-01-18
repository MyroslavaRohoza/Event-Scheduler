import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { categories } from "../../utils/eventConstants";

export const selectEvents = (state: RootState) => state.events.events.eventList;
export const selectIsEditEvent = (state: RootState) =>
  state.events.events.editEvent;
export const selectTitleEvent = (state: RootState) =>
  state.events.filter?.eventTitle;
export const selectDateRange = (state: RootState) =>
  state.events.filter?.dateRange;
export const selectCategoryFilter = (state: RootState) =>
  state.events.filter?.selectedCategory;

export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitleEvent, selectCategoryFilter, selectDateRange],
  (events, filter, category, dateRange) => {
    // Дефолтные значения startDate и endDate
    const { startDate = "", endDate = "" } = dateRange || {};

    return (
      Array.isArray(events) &&
      events.filter((event) => {
        // Фильтрация по названию
        const matchesTitle = event.title
          .toLowerCase()
          .includes(filter.toLowerCase());

        // Фильтрация по категории
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
