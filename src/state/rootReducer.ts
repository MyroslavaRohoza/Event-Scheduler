import { combineReducers } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/eventSlice.ts";
import { filterReducer } from "./filter/filterSlice.ts";
import { pagesReducer } from "./pages/pagesSlice.ts";

const rootReducer = combineReducers({
  events: eventsReducer,
  filter:filterReducer,
  pages:pagesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;


