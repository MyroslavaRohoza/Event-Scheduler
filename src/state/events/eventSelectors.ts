import { RootState } from "../rootReducer.ts";

export const selectEvents = (state: RootState) => state.events.eventList;

export const selectIsEditEvent = (state: RootState) => state.events.editEvent;

export const selectError = (state: RootState) => state.events.error;
