import { createSlice } from "@reduxjs/toolkit";

// Create a user slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Login actions
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
      // Logout action
    logout: (state) => {
      state.currentUser = null;
    },
  },
});
// Extract the action creators and reducer
export const { loginStart, loginSuccess, loginFailure ,logout} = userSlice.actions;
export default userSlice.reducer;
