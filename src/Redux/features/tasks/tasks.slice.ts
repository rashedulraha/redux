import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  name: string;
  description: string;
  priority: string;
  status: string;
}

const initialState = {
  name: "",
  description: "",
  priority: "",
  status: "",
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
