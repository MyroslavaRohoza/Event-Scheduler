export const initialState = {
  events: {
    eventList: [
      {
        id: "1",
        title: "Event1",
        date: "2025-01-01",
        time: "10:00",
        category: "Music",
        description: "A music event featuring local bands.",
      },
      {
        id: "2",
        title: "Event2",
        date: "2025-01-02",
        time: "14:00",
        category: "Art",
        description: "An art exhibition showcasing contemporary works.",
      },
      {
        id: "3",
        title: "Event3",
        date: "2025-01-03",
        time: "18:00",
        category: "Technology",
        description:
          "A tech talk about the latest trends in software development.",
      },
      {
        id: "4",
        title: "Event",
        date: "2025-01-04",
        time: "09:00",
        category: "Food",
        description: "A culinary workshop for food lovers.",
      },
      {
        id: "5",
        title: "Event",
        date: "2025-01-05",
        time: "15:00",
        category: "Education",
        description: "A seminar on modern teaching methods.",
      },
    ],
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
