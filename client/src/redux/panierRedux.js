import { createSlice } from "@reduxjs/toolkit";
const panier = createSlice({
  name: "panier",
  initialState: {
    produits: [],// Array to store the products in the cart
    quantite: 0,// Quantity of products in the cart
    total: 0,   // Total price of all products in the cart
   },
  reducers: {
    ajouterproduitPanier: (state, action) => {
      // Adds a product to the cart
    const prod = state.produits.filter(produit => produit._id === action.payload.produit._id);      
      // If the product is already in the cart, update its price and quantity
      if(prod.length !== 0 ){
          prod[0].price += action.payload.produit.price;
          prod[0].quantite += action.payload.produit.quantite;
          state.produits= state.produits.filter(produit => produit._id !== action.payload.produit._id);
          state.produits.push(prod[0]);
      }else{
         // If the product is not in the cart, add it to the cart and increase the quantity
        state.quantite += 1;
        state.produits.push(action.payload.produit);
      }
            // Update the total price by adding the price of the added product

      state.total += action.payload.produit.price ;

    },
          // Updates the cart state with the products, quantity, and total from the API response

    ajouterPanier : (state,action) => {
      state.produits = action.payload.products;
      state.quantite = action.payload.panierQuantity;
      state.total= action.payload.Total;
    },
          // Clears the cart by resetting the products, quantity, and total to their initial values

    supprimerPanier : (state) => {
      state.produits = [];
      state.quantite = 0;
      state.total= 0;
    },
          // Removes a product from the cart

    supprimerProduitPanier : (state, action) => {
      state.quantite -= 1;
            // Updates the total price by subtracting the price of the removed product

      state.total -= state.produits.filter(produit => produit._id === action.payload.produit._id)[0].price
            // Removes the product from the cart by filtering out its ID

      state.produits= state.produits.filter(produit => produit._id !== action.payload.produit._id);
    },
  },
});

export const { ajouterproduitPanier,supprimerPanier,supprimerProduitPanier,ajouterPanier } = panier.actions;
export default panier.reducer;