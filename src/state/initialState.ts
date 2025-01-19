export const initialState = {
  events: {
    eventList: [],
    error: null,
    editEventId: null,
  },
  filter: {
    eventTitle: "",
    selectedCategory: "all",
    dateRange: {
      startDate: "",
      endDate: "",
    },
  },
  pages: {
    currentPage: 1,
    itemsPerPage: 4,
    totalItems: 0,
  },
};
