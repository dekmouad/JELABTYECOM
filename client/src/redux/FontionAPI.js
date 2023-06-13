import { connexionCommence, connexionReussi, connexionEchoue ,deconnexion, registerStart, registerSuccess, registerFailure} from "./utilisateurRedux"
import {ajouterPanier, ajouterproduitPanier, supprimerPanier, supprimerProduitPanier} from "./panierRedux"
import { suppFavori } from "./FavoriteRedux"
import { publicRequest,userRequest } from "../requestMethods";

  // Dispatches the 'startconnexion' action to indicate the login process has started

export const login = async (dispatch, user) => {
  dispatch(connexionCommence());
  try {
        // Sends a login request to the server and retrieves the user's data

    const res = await userRequest.post(`/auth/login`, user);
        // Retrieves the user's cart data from the server

    const res2 = await publicRequest.get(`/panier/find/${res.data._id}`);
        // Dispatches the 'addcart' and 'connexionReussi' actions with the API response data

    dispatch(ajouterPanier(res2.data))
    dispatch(connexionReussi(res.data));
  } catch (err) {
        // Dispatches the 'connexionFailled' action if an error occurs during login

    dispatch(connexionEchoue());
  }
};

  // Dispatches the 'delleteCart' and 'suppFavori' actions to clear the cart and favorites

export const logout = async (dispatch) => {
    dispatch(supprimerPanier());
    dispatch(suppFavori());
    dispatch(deconnexion());
 };
  // Sends a request to empty the user's cart on the server

export const viderPanier = async (dispatch,panierItem) => {
    await publicRequest.put(`/panier/${panierItem.userId}`, {userId: panierItem.userId , products :[] ,Total : 0,panierQuantity : 0 } );
      // Dispatches the 'deleteCart' action to clear the cart locally

    dispatch(supprimerPanier());
 };

export const suppProduitPanierAPI = async (dispatch, panierItem) => {
    try {
      // Removes a product from the user's cart on the server
    // by filtering out the specified product from the existing products
        const oldProducts = panierItem.produits;
        const produitSupp = panierItem.produit;

        const products = oldProducts.filter(product =>  product._id !== produitSupp._id )
            // Calculates the new total by summing the prices of the remaining products

        const total = products.reduce((total, produit) => total + (produit.price ),0);
    // Updates the user's cart on the server with the new product list and total

        await publicRequest.put(`/panier/${panierItem.userId}`, {userId: panierItem.userId , products :products ,Total : total,panierQuantity : products.length } );
     // Updates the user's cart on the server with the new product list and total

        dispatch(supprimerProduitPanier({produit:produitSupp}));
    } catch (err) {
          // Handle any errors that occur during the process

    }
};



 export const sendMail = async (mail) => {
  try {
        // Sends a request to the server to subscribe the provided email to the newsletter

    await publicRequest.post("/newsletter/signup", mail);
  } catch (err) {    // Handle any errors that occur during the process
  }
};

 export const inscrire = async (dispatch, user) => {
    // Dispatches the 'registerStart' action to indicate the registration process has started

  dispatch(registerStart());
  try {  
        // Sends a registration request to the server and retrieves the user's data

    const res = await publicRequest.post("/auth/inscrire", user);
        // Creates an empty cart for the newly registered user

    await publicRequest.post("/panier/", {userId: res.data._id , products:[]} );
        // Dispatches the 'registerSuccess' action with the API response data

    dispatch(registerSuccess(res.data));
  } catch (err) {
        // Dispatches the 'registerFailure' action if an error occurs during registration

    dispatch(registerFailure());
  }
};

export const ajouterProduitPanierAPI = async (dispatch, panierItem) => {
   try {
     // Adds a product to the user's cart on the server
    // by appending the new product to the existing products
        const oldProducts = panierItem.produits;
        const products = [...oldProducts , panierItem.produit];
            // Calculates the new total by summing the prices of all products

        const total = products.reduce((total, produit) => total + (produit.price),0);
    // Updates the user's cart on the server with the new product list and total

        await publicRequest.put(`/panier/${panierItem.userId}`, {userId: panierItem.userId , products :products ,Total : total,panierQuantity : products.length } );
            // Dispatches the 'ajouterproduitPanier' action to add the product to the cart locally

        dispatch(ajouterproduitPanier(panierItem));
    } catch (err) {    // Handle any errors that occur during the process
    }
};

