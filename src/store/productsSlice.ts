import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/src/types";

interface ProductSlice {
  products: Product[];
}

const initialState: ProductSlice = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
