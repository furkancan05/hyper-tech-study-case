import Link from "next/link";
import Image from "next/image";
import React from "react";
import LOGO from "@/src/assets/logo.webp";
import { HelpfulLinks } from "@/src/lib/config";

export default function Footer() {
  return (
    <footer className="relative w-full border-t-[1px] border-black/20 pt-12 mt-8 ">
      <div className="flex flex-1 flex-col max-w-[1200px] mx-auto">
        {/* main */}
        <div className="flex sm:flex-row flex-col flex-wrap items-start justify-start gap-10 pb-8">
          {/* logo */}
          <div className="flex flex-col flex-1 max-w-[200px]">
            <div className="flex flex-col gap-y-5">
              <Link href="/" className="flex">
                <Image
                  src={LOGO}
                  alt="Hyper Teknoloji"
                  width={180}
                  height={63}
                />
              </Link>

              <p className="text-sm font-medium">
                Kaliteli ürünleri en uygun fiyatlarla sunuyoruz. Güvenli
                alışverişin adresine hoş geldiniz!
              </p>
            </div>
          </div>

          {/* navigation */}
          <nav
            role="navigation"
            className="flex flex-1 flex-wrap items-start justify-evenly  md:justify-center gap-5"
          >
            {Object.entries(HelpfulLinks).map(([key, values], index) => (
              <div key={index} className="flex flex-col min-w-[230px] gap-y-4">
                <h6 className="text-xl font-bold capitalize">{key}</h6>

                <ul className="flex flex-col gap-y-2">
                  {values.map((v, i) => (
                    <Link
                      key={i}
                      href={v.path}
                      target={v.target}
                      rel={v.target === "_blank" ? "norefeerer noopenner" : ""}
                      className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-150"
                    >
                      {v.title}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* copyright */}
        <div className="flex items-center justify-between flex-col sm:flex-row gap-3 py-3 text-xs text-muted-foreground font-medium">
          <span className="mx-auto">
            {new Date().getFullYear()} © All rights reserved by{" "}
            <Link href="#" target="_self">
              Hyper Teknoloji
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
