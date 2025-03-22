"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { cn } from "@/src/utils/cn";
import {
  addToCart,
  clearCart,
  removeFromCart,
  toggleCartModal,
} from "@/src/store/cartSlice";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function CartSheet() {
  const dispatch = useDispatch();
  const cartModal = useSelector((state: RootState) => state.cart.cartModal);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const products = useSelector((state: RootState) => state.products.products);

  let totalAmount = 0;

  // Calculate the number of times ids are repeated in the cart array
  const cartCount = cart.reduce<Record<number, number>>((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  // Create new cart array
  const cartWithProducts = Object.entries(cartCount)
    .map(([id, amount]) => {
      const product = products.find((p) => p.id === Number(id));
      return product ? { ...product, amount } : null;
    })
    .filter(Boolean);

  // Disable scroll when sheet open
  React.useEffect(() => {
    if (cartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartModal]);

  // Calculate total amount
  cartWithProducts.map((c) => {
    if (!c) return;

    totalAmount += c?.amount * c?.price;
  });

  return (
    <div
      className={cn(
        "w-full h-screen fixed left-0 top-0 right-0 bottom-0 pointer-events-none overflow-hidden z-50",
        { "pointer-events-auto": cartModal }
      )}
    >
      {/* overlay */}
      <div
        className={cn(
          "w-full h-full bg-black transition-all opacity-0 z-10 duration-500",
          {
            "opacity-60": cartModal,
          }
        )}
        onClick={() => dispatch(toggleCartModal())}
      />

      {/* sidebar */}
      <div
        className={cn(
          "flex flex-col w-[80%] md:w-[400px] h-screen fixed -right-full top-0 bg-white z-50 p-3 md:p-10 transition-all duration-500 gap-6",
          { "right-0": cartModal }
        )}
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-semibold">Sepetim</h2>

          <X
            onClick={() => dispatch(toggleCartModal())}
            className="cursor-pointer"
          />
        </div>

        {cartWithProducts.length === 0 ? (
          <div className="text-center p-6 bg-slate-200 rounded-md text-black/60">
            Sepetiniz boş
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-2 overflow-scroll pr-2">
            {cartWithProducts
              .filter((c) => !!c)
              .map((item) => (
                <div
                  key={item?.id}
                  className="flex flex-row gap-2 items-center justify-between border-b-[1px] border-black/20 py-2"
                >
                  <div className="flex flex-col gap-2 overflow-hidden w-28">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full aspect-square object-contain"
                    />
                    <p className="text-xs line-clamp-2 overflow-hidden text-ellipsis">
                      {item?.title}
                    </p>

                    <p className="text-sm font-semibold">{`${item.price}$`}</p>
                  </div>

                  {/* Amount */}
                  <div className="flex items-center gap-2">
                    <button
                      className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95"
                      onClick={() => dispatch(addToCart(item.id))}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-sm">
                    <p>Fiyat</p>
                    <p className="font-semibold">{`${(
                      item.price * item.amount
                    ).toFixed(2)}$`}</p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {cartWithProducts.length > 0 ? (
          <div className="flex flex-col gap-2">
            {/* Total amount */}
            <div className="flex items-center justify-between font-semibold">
              <span>Toplam Miktar:</span>
              <span>{`${totalAmount.toFixed(2)}$`}</span>
            </div>

            <button className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold cursor-pointer hover:bg-blue-400 transition-all active:scale-95">
              Sepeti Onayla
            </button>

            <button
              className="w-full py-3 bg-red-500 rounded-md text-white font-semibold cursor-pointer hover:bg-red-400 transition-all active:scale-95"
              onClick={() => dispatch(clearCart())}
            >
              Sepeti Sıfırla
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
