import Image from "next/image";
import React from "react";
import LOGO from "@/src/assets/logo.webp";
import CartButton from "./CartButton";
import { Heart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 fixed top-0 shadow-md border-b-[1px] border-black/20 z-40 bg-white">
      <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between px-5">
        <Image alt="Hyper Tech" src={LOGO} height={40} />

        <nav>
          <ul className="flex items-center gap-4 md:gap-10">
            <li className="cursor-pointer flex items-center gap-1 text-sm nav_underline">
              <User size={20} />
              <span className="hidden md:block">Hesabım</span>
            </li>
            <li className="cursor-pointer flex items-center gap-1 text-sm nav_underline">
              <Heart size={20} />
              <span className="hidden md:block">Favorilerim</span>
            </li>
            <li className="nav_underline">
              <CartButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
