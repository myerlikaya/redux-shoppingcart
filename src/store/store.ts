import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/slices/product/productSlice";
import cartReducer from "../features/slices/cart/cartSlice";
import { productApi } from "../services/productService";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] 
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      cart: persistedCartReducer,
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
        }
      }).concat(productApi.middleware),
  });
  
  return store;
};

export const persistor = persistStore(makeStore());

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];