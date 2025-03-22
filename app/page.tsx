import CartSheet from "@/src/components/CartSheet";
import Filter from "@/src/components/Filter";
import ProductsList from "@/src/components/ProductsList";
import ToastProvider from "@/src/components/ToastProvider";

export default function Home() {
  return (
    <>
      <CartSheet />
      <ToastProvider />

      <div className="pt-0 md:pt-20 max-w-[1200px] relative mx-auto w-full flex gap-4 md:gap-8 flex-col md:flex-row">
        <Filter />
        <ProductsList />
      </div>
    </>
  );
}
