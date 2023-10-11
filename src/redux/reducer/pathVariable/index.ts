import { createSlice } from "@reduxjs/toolkit";

const PathVariable = createSlice({
  name: "emitPathVariable",
  initialState: {},
  reducers: {
    emitPathVariable: (state, action) => {
      console.log(action);
      return action.payloads;
    },
  },
});

export const { emitPathVariable } = PathVariable.actions;
export default PathVariable.reducer;
