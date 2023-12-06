import { createSlice } from "@reduxjs/toolkit";
import { ActionLogin, ActionRegister } from "../../action/auth";
import axios from "axios";
import {
  Auth,
  LogOut,
  ResetPasswordEmail,
  UpdateInfor,
} from "../../../service/apiInstance";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logIn: (state, action) => {
      Auth(action.payload, "login");
    },
    logOut: (state, action) => LogOut(),
    register: (state, action) => Auth(action.payload, "register"),
    forgotPassword: (state, action) =>
      ResetPasswordEmail({ email: action.payload }),
    resetPassword: (state, action) =>
      ResetPasswordEmail({
        oldPassword: action.payload,
        newPassword: action.payload,
      }),
    updateInfor: (state, action) => UpdateInfor(action.payload),
  },
});

export const {
  logIn,
  logOut,
  register,
  forgotPassword,
  resetPassword,
  updateInfor,
} = AuthSlice.actions;

export default AuthSlice.reducer;
