export const initialState = {
  events: {
    eventList: [],
    loading: false,
    error: null,
    editEvent: false,
  },
  filter: {
    eventTitle: "",
    selectedCategory: "",
    dateRange: { startDate: null, endDate: null }, 
  },
};
