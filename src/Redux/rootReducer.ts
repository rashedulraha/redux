import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasks.slice";
import filtersReducer from "./features/filters/filters.slice";

export const rootReducer = combineReducers({
  task: taskReducer,
  filters: filtersReducer,
});
