import { RootState } from "../rootReducer";

export const selectEvents = (state: RootState) => state.events.eventList;

