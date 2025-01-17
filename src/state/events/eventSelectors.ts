import { RootState } from "../rootReducer";

export const selectEvents = (state: RootState) => state.events.eventList;

// export const selectFilteredEvents = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) =>
//     Array.isArray(contacts) &&
//     contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filter.toLowerCase())
//     )
// );