"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { toggleCartModal } from "@/src/store/cartSlice";

export default function CartButton() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div
      className="relative cursor-pointer flex items-center gap-1"
      onClick={() => dispatch(toggleCartModal())}
    >
      <ShoppingCart size={20} />

      <span className="hidden md:block text-sm">Sepetim</span>

      {cart.length > 0 ? (
        <div className="w-5 h-5 bg-red-500 text-white text-sm rounded-full absolute flex items-center justify-center -left-3 -bottom-1/2">
          {cart.length}
        </div>
      ) : null}
    </div>
  );
}
