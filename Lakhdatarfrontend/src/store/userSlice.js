import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//  THis is opur intial state
const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSucess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
      window.localStorage.setItem("user", JSON.stringify(action.payload.data));
      window.localStorage.setItem(
        "cartQuantity",
        JSON.stringify(action.payload.cartlength)
      );
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      window.localStorage.clear("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, loginFail, loginSucess, logout } =
  counterSlice.actions;

export default counterSlice.reducer;
