export const initialState = {
  events: {
    eventList: [],
    error: null,
    editEvent: false,
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
