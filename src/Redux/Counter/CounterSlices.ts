import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
