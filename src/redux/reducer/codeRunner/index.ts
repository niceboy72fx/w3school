import { createSlice } from "@reduxjs/toolkit";
import { runCode } from "../../../service/apiRadpidInstances";

const CodeRunner = createSlice({
  name: "codeRunner",
  initialState: {},
  reducers: {
    postCode: (state, action) => {
      runCode(action.payload);
      console.log(action.payload);
    },
  },
});

export const { postCode } = CodeRunner.actions;

export default CodeRunner.reducer;
