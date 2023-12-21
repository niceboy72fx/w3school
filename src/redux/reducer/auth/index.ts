import { PostsState } from "./../../../type";
import { createSlice } from "@reduxjs/toolkit";
import { ActionLogin, ActionRegister } from "../../action/auth";
import axios from "axios";
import {
  Auth,
  LogOut,
  ResetPasswordEmail,
  UpdateInfor,
} from "../../../service/apiInstance";

const AuthReducer = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    logIn: (state, action) => {
      console.log("test"); //
      Auth(action.payload, "login"); // not working
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
} = AuthReducer.actions;

export default AuthReducer.reducer;
