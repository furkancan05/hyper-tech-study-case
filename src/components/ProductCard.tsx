import React from "react";
import { Categories, Product } from "@/src/types";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/store/cartSlice";
import StarRating from "@/src/components/StarRating";
import { ToastService } from "@/src/utils/toastService";

interface Props {
  product: Product;
}

export default function ProductCard(props: Props) {
  const { product } = props;

  const dispatch = useDispatch();

  const category = Categories.find((c) => c.categoryName === product.category);

  return (
    <div className="w-full max-w-full md:max-w-[300px] border-[1px] border-black/20 rounded-md overflow-hidden flex flex-col gap-2 p-2 shadow-lg group">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={300}
        className="w-full aspect-[4/5] object-contain group-hover:scale-95 transition-all duration-700"
      />

      <p className="font-semibold">{product.title}</p>
      <small className="text-sm">{`Kategori: ${category?.title}`}</small>

      {/* Ratings */}
      <div className="flex items-center gap-2">
        <span>{product.rating.rate}</span>

        <StarRating value={product.rating.rate} />

        <span>{`(${product.rating.count})`}</span>
      </div>

      {/* Whitespace for align cart button bottom */}
      <div className="flex-1 min-h-10" />

      <p className="font-bold">{`${product.price} $`}</p>

      <button
        className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold cursor-pointer hover:bg-blue-400 transition-all active:scale-95"
        onClick={() => {
          dispatch(addToCart(product.id));
          ToastService.showToast();
        }}
      >
        Sepete Ekle
      </button>
    </div>
  );
}
