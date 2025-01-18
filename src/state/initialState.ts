export const initialState = {
  events: {
    eventList: [], 
    loading: false,
    error: null,
    editEvent: false,
  },
  filter: {
    eventTitle: "",
    selectedCategory: "all",
    dateRange: {
      startDate: null,
      endDate: null,
    },
  },
}