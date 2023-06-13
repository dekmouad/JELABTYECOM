import { createSlice } from "@reduxjs/toolkit";

const utilisateurRedux = createSlice({
  name: "utilisateur",
  initialState: {
    utilisateursCourant: null,// Current user information, initially set to null
    chercher: false,// Flag indicating if authentication or registration process is in progress
    error: false,// Flag indicating if an error occurred during authentication or registration
  },
  reducers: {
    //startconnection
    connexionCommence: (state) => {
      state.chercher = true;// Set search flag to true when authentication process starts
    },
    //connection success
    connexionReussi: (state, action) => {
      state.chercher = false;// Set search flag to false when authentication process is successful
      state.utilisateursCourant = action.payload;// Update the current user information with the authenticated user data
    },
    //connection faillure
    connexionEchoue: (state) => {
      state.chercher = false;// Set search flag to false when authentication process fails
      state.error = true;// Set error flag to true to indicate an authentication error
    },
    //disconnect
    deconnexion: (state) => {
      state.utilisateursCourant=null;// Set CurrentUser to null when user logs out
      state.chercher = false; // Set search flag to false on logout
      state.error = false; // Set error flag to false on logout
    },
    registerStart: (state) => {
      state.chercher = true;// Set search flag to true when registration process starts
    },
    registerSuccess: (state, action) => {
      state.chercher = false;// Set search flag to false when registration process is successful
      state.utilisateursCourant = action.payload;// Update the current user information with the registered user data
    },
    registerFailure: (state) => {
      state.chercher = false;// Set search flag to false when registration process fails
      state.error = true;// Set error flag to true to indicate a registration error
    },
  },
});

export const { connexionCommence } = utilisateurRedux.actions;
export const { connexionReussi } = utilisateurRedux.actions;
export const { connexionEchoue } = utilisateurRedux.actions;
export const { deconnexion } = utilisateurRedux.actions;
export const { registerStart,registerSuccess,registerFailure } = utilisateurRedux.actions;

export default utilisateurRedux.reducer;