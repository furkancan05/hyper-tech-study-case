import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/src/lib/Provider";
import "./globals.css";
import { Product } from "@/src/types";
import ProductStore from "@/src/components/ProductStore";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyper Teknoloji | E-Ticarette yeni dönem",
  description:
    "Kaliteli ürünleri en uygun fiyatlarla sunuyoruz. Güvenli alışverişin adresine hoş geldiniz!",
};

// Get all items
export const getItems = async (): Promise<Product[]> => {
  const items = await fetch("https://fakestoreapi.com/products").then(
    async (res) => await res.json()
  );

  if (!items || items.length === 0) return [];

  return items;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = (await getItems()) as Product[];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ProductStore products={products}>
            <Header />
            {children}
            <Footer />
          </ProductStore>
        </Providers>
      </body>
    </html>
  );
}
