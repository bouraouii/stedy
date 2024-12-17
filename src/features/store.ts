// src/store.ts

import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import adminReducer from "./userSlice"

import storageSession from 'redux-persist/lib/storage/session'; // Pour sessionStorage

import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage:storageSession
};

const rootReducer = combineReducers({
  data: dataReducer,
  admin:adminReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {data: DataState, count: CountState}
export type AppDispatch = typeof store.dispatch;
