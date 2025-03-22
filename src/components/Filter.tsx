"use client";

import { Search } from "lucide-react";
import React from "react";
import { cn } from "@/src/utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { setSearch, setSelectedCategory } from "@/src/store/cartSlice";
import { Categories } from "@/src/types";

export default function Filter() {
  const [focus, setFocus] = React.useState(false);

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.cart.search);
  const selectedCategory = useSelector(
    (state: RootState) => state.cart.selectedCategory
  );

  return (
    <aside className="md:py-0 bg-slate-100 md:bg-white sticky top-16 md:top-20 z-30">
      <div className="w-full md:w-[380px] h-min border-0 md:border-[1px] border-black/20 rounded-md p-2 md:p-5 sticky top-16 md:top-20">
        {/* Search Input */}
        <p className="mb-2 font-semibold  text-sm md:text-base">Ara</p>
        <div
          className={cn(
            "w-full relative p-2 pl-10 border-[1px] border-black/20 rounded-md transition-colors mb-8",
            { "border-black": focus }
          )}
        >
          <Search
            size={20}
            className={cn(
              "absolute left-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-black/20",
              { "text-black": focus }
            )}
          />

          <input
            type="text"
            placeholder="Aradığınız ürünü yazın..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>

        {/* Category */}
        <p className="mb-2 font-semibold text-sm md:text-base">Kategori</p>
        <div className="flex gap-4 flex-nowrap overflow-scroll md:overflow-auto md:flex-wrap pb-2">
          {Categories.map((c) => {
            return (
              <button
                key={c.title}
                className={cn(
                  "py-1 px-2 md:py-2 md:px-4 border-[1px] border-black/20 rounded-md text-sm md:text-base transition-all cursor-pointer hover:bg-black/80 hover:text-white active:scale-95 whitespace-nowrap",
                  {
                    "bg-black/80 text-white":
                      c.title === selectedCategory.title,
                  }
                )}
                onClick={() => dispatch(setSelectedCategory(c))}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
