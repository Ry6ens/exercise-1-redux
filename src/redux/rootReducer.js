import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterCartReducer } from "./reducer";
import { cartReducer } from "./toolkit/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
}

const combreducer = combineReducers({
  items: cartReducer,
  filter: filterCartReducer,
});

export const persistedReducer = persistReducer(persistConfig, combreducer)