import { createSlice } from "@reduxjs/toolkit";

// Create the orders slice
export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderss: [],// Array to store orders
    isFetching: false,// Flag indicating if the fetching operation is in progress
    error: false, // Flag indicating if an error occurred
  },
  reducers: {
    // Actions for getting orders
    // Start fetching orders
    //GET ALL
    getordersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
     // Successfully fetched orders
    getordersSuccess: (state, action) => {
      state.isFetching = false;
      state.orderss = action.payload;
    },
     // Failed to fetch orders
    getordersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
     // Actions for deleting orders
     // Start deleting an order
    //DELETE
    deleteordersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
     // Successfully deleted an order
    deleteordersSuccess: (state, action) => {
      state.isFetching = false;
      state.orderss.splice(
        state.orderss.findIndex((item) => item._id === action.payload),
        1
      );
    },
     // Failed to delete an order
    deleteordersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
      // Actions for updating orders
        // Start updating an order
    //UPDATE
      updateordersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
     // Successfully updated an order
    updateordersSuccess: (state, action) => {
      state.isFetching = false;
      state.orderss[
        state.orderss.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.orders;
    },
        // Failed to update an order
    updateordersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
// Export actions
export const {
  getordersStart,
  getordersSuccess,
  getordersFailure,
  deleteordersStart,
  deleteordersSuccess,
  deleteordersFailure,
  updateordersStart,
  updateordersSuccess,
  updateordersFailure,
  addordersStart,
  addordersSuccess,
  addordersFailure,
} = ordersSlice.actions;
// Export the orders reducer
export default ordersSlice.reducer;
