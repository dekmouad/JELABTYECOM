import { configureStore,combineReducers  } from "@reduxjs/toolkit";
import wishlistReducer from "./FavoriteRedux";
import panierReducer from "./panierRedux";
import utilisateurRedux from "./utilisateurRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  }; 
 
/*const persistedReducerWishlist = persistReducer(persistConfig,wishlistReducer);
const persistedReducerPanier = persistReducer(persistConfig,panierReducer);
const persistedReducerUser = persistReducer(persistConfig,utilisateurRedux);
*/

// Combine the reducers

const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    panier: panierReducer,
    utilisateur: utilisateurRedux,
});
// Apply redux-persist to the root reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Configure the store

export const store= configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    
  });
// Create the persistor

export let persistor = persistStore(store);
  