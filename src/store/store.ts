import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/src/store/cartSlice";
import productReducer from "@/src/store/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
