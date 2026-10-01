import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

//  export store
export default store;
