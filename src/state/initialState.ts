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
};
