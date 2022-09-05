
import { persistStore } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./rootReducer";

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistedStore = persistStore(store)