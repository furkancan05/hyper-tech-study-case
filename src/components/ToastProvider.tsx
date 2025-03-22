"use client";

import React from "react";
import { cn } from "@/src/utils/cn";
import { X } from "lucide-react";

export default function ToastProvider() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const showToast = () => {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 3000);
    };

    window.addEventListener("show-toast", showToast);

    return () => {
      window.removeEventListener("show-toast", showToast);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-white border-[1px] border-black/20 rounded-md px-8 py-4 fixed right-10 -bottom-10 opacity-0 z-50 transition-all",
        { "opacity-100 bottom-10": isOpen }
      )}
    >
      <span className="text-green-500 font-semibold whitespace-nowrap text-sm md:text-base">
        Ürün sepetinize eklendi!
      </span>

      <X
        size={16}
        className="cursor-pointer absolute top-2 right-2"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
