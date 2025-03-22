"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import ProductCard from "@/src/components/ProductCard";
import { Categories } from "../types";

export default function ProductsList() {
  const products = useSelector((state: RootState) => state.products.products);
  const search = useSelector((state: RootState) => state.cart.search);
  const selectedCategory = useSelector(
    (state: RootState) => state.cart.selectedCategory
  );

  // Filter products by category
  const filteredPropsByCategory =
    selectedCategory.categoryName === Categories[0].categoryName
      ? products
      : products.filter((p) => p.category === selectedCategory.categoryName);

  // Filter products by search
  const searchedResults =
    search === ""
      ? filteredPropsByCategory
      : filteredPropsByCategory.filter((fp) =>
          fp.title.toLowerCase().includes(search.toLowerCase())
        );

  // Filtrelemede React.useMemo hookuna gerek duymadim cunku proje React 19 surumu ile yazildigi icin
  // memorize islemlerine gerek duyulmuyor.
  // Eski react surumlerinde bu filtrelemeler useMemo ile yapilmalidir.

  return (
    <main className="flex-1 border-[1px] border-black/20 rounded-md p-5 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-10 md:mt-0">
      {searchedResults.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
