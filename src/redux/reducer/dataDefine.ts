import { createSlice } from "@reduxjs/toolkit";

interface PostsState {
  data: null;
  loading: boolean;
  error: string | null;
}

export const initialState: PostsState = {
  data: null,
  loading: false,
  error: null,
};

const dataDefault = createSlice({
  name: "dataDefault",
  initialState,
  reducers: {
    getPostStart: (state) => {
      console.log("oke");
      state.loading = true;
    },
    getPostSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getPostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPostStart,
  getPostSuccess,
  getPostFailure,
} = dataDefault.actions;
export default dataDefault.reducer;
