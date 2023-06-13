import { createSlice } from "@reduxjs/toolkit";
// Create a Redux slice for the wishlist

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    produits: [],
    quantite: 0,
    istrue:false
  },
  reducers: {
        // Reducer functions for updating the wishlist state
    // Add a product to the wishlist
    ajouterproduitFavori : (state, action) => {
      state.quantite += 1;
      state.istrue = true;
      state.produits.push(action.payload.produit);      
    },
    // Remove a product from the wishlist
    supprimerproduitFavori : (state, action) => {
     if (state.quantite>0) {
      state.produits= state.produits.filter(produit => produit._id !== action.payload.produit._id)
      state.quantite -= 1;
    }
    },
    // Clear the wishlist
    suppFavori : (state) => {
      state.produits=[];
      state.istrue = false;
      state.quantite = 0;
    }
  },
});
// Extract the action creators from the wishlist slice

export const { ajouterproduitFavori  } = wishlist.actions;
export const { supprimerproduitFavori,suppFavori  } = wishlist.actions;
// Export the wishlist reducer

export default wishlist.reducer;