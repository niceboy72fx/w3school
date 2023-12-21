import { ThunkAction, thunk } from "redux-thunk";
import { Action, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducer/index.ts";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;
export default store;
