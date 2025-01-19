import { RootState } from "../rootReducer.ts";

export const selectEvents = (state: RootState) => state.events.eventList;

export const selectEditEventId = (state: RootState) => state.events.editEventId;

export const selectError = (state: RootState) => state.events.error;
