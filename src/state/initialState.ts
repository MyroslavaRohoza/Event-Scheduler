export const initiaState = {
  events: {
    eventList: [
      {
        id: "1",
        title: "Meeting with team",
        date: "2025-01-16",
        time: "10:00 AM",
        category: "Work",
        description: "Discuss the project timeline and deliverables",
      },
      {
        id: "2",
        title: "Doctor appointment",
        date: "2025-01-17",
        time: "3:00 PM",
        category: "Personal",
        description: "Annual check-up with Dr. Smith",
      },
    ],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};
