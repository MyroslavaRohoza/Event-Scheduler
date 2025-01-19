import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { eventsReducer } from "./events/eventSlice";
import { filterReducer } from "./filter/filterSlice";
import { pagesReducer } from "./pages/pagesSlice";

const eventsPersistConfig = {
  key: "events",
  storage,
};
const pagestConfig = {
  key: "pages",
  storage,
};
const persistedEventsReducer = persistReducer(
  eventsPersistConfig,
  eventsReducer
);
const persistedPagesReducer = persistReducer(pagestConfig, pagesReducer);
export const store = configureStore({
  reducer: {
    events: persistedEventsReducer,
    filter: filterReducer,
    pages: persistedPagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

