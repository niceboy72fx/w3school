import { createSlice } from "@reduxjs/toolkit";
import { ActionLogin, ActionRegister } from "../../action/auth";
import axios from "axios";
import { Auth } from "../../../service/apiInstance";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logIn: (state, action) => {
      Auth(action.payload, "login");
    },
    logOut: (state, action) => action.payload,
    register: (state, action) => Auth(action.payload, "register"),
    forgotPassword: (state, action) => action.payload,
    resetPassword: (state, action) => action.payload,
  },
});

export const {
  logIn,
  logOut,
  register,
  forgotPassword,
  resetPassword,
} = AuthSlice.actions;

export default AuthSlice.reducer;
