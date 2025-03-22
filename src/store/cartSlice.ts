import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, CategoryType } from "@/src/types";

interface CartSlice {
  search: string;
  selectedCategory: CategoryType;
  cart: number[];
  cartModal: boolean;
}

const initialState: CartSlice = {
  search: "",
  selectedCategory: Categories[0],
  cart: [],
  cartModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.indexOf(action.payload);
      state.cart =
        index !== -1
          ? [...state.cart.slice(0, index), ...state.cart.slice(index + 1)]
          : state.cart;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    toggleCartModal: (state) => {
      state.cartModal = !state.cartModal;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleCartModal,
  setSearch,
  setSelectedCategory,
} = cartSlice.actions;
export default cartSlice.reducer;
