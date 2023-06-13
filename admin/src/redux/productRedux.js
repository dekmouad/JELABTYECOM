import { createSlice } from "@reduxjs/toolkit";

// Create the product slice
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],// Array to store products
    isFetching: false,// Flag indicating if the fetching operation is in progress
    error: false, // Flag indicating if an error occurred
  },
  reducers: {
    // Actions for getting products

    // Start fetching products
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
      // Successfully fetched products
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
      // Failed to fetch products
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Actions for deleting products

    // Start deleting a product
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
     // Successfully deleted a product
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    // Failed to delete a product
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
        // Actions for updating products

    // Start updating a product
    //UPDATE
      updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    // Successfully updated a product
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
        // Failed to update a product
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
      // Actions for adding products

    // Start adding a product
    //ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
      // Successfully added a product
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    // Failed to add a product
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Export actions
export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

// Export the product reducer
export default productSlice.reducer;
