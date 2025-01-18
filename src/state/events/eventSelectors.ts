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

// export const selectFilteredEvents = createSelector(
//   [selectEvents, selectTitleEvent, selectDateRange],
//   (events, filter, dateRange) => {
//     const { startDate, endDate } = dateRange || { startDate: null, endDate: null };

//     return events?.filter((event) => {
//       const matchesTitle = event.title
//         .toLowerCase()
//         .includes(filter?.toLowerCase() || "");

//       const eventDate = new Date(event.eventDate);
//       const start = startDate ? new Date(startDate) : null;
//       const end = endDate ? new Date(endDate) : null;

//       const matchesDate =
//         (!start || eventDate >= start) && (!end || eventDate <= end);

//       return matchesTitle && matchesDate;
//     });
//   }
// );

export const selectFilteredEvents = createSelector(
  [selectEvents, selectTitleEvent, selectCategoryFilter, selectDateRange],
  (events, filter, category) => {
    return (
      Array.isArray(events) &&
      events.filter((event) => {
        const matchesTitle = event.title
          .toLowerCase()
          .includes(filter.toLowerCase());

       const matchesCategory = category && category !== "all" ? event.category === category : true;

        return matchesTitle && matchesCategory;
      })
    );
  }
);
