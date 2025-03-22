"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../types";
import { setProducts } from "../store/productsSlice";

export default function ProductStore({
  products,
  children,
}: {
  products: Product[];
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  if (products.length > 0) dispatch(setProducts(products));

  return children;
}
