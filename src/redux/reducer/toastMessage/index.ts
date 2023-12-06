import { createSlice } from "@reduxjs/toolkit";
import { runCode } from "../../../service/apiRadpidInstances";

const toastMessage = createSlice({
  name: "toastMessage",
  initialState: {},
  reducers: {
    TOAST_MESSAGE: (state, action) => {
      return action.payload;
    },
  },
});

export const { TOAST_MESSAGE } = toastMessage.actions;

export default toastMessage.reducer;
