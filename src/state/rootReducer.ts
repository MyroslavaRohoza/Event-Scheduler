import { combineReducers } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/eventSlice";

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;


