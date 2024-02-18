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

import { carsReducer } from "./cars/carsSlice";
import { favoriteReducer } from "./favourite/favouriteSlice";

const favoriteConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoriteArray"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: persistReducer(favoriteConfig, favoriteReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);