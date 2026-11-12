import type { Metadata } from "next";
import CartContents from "@/features/cart/cart-contents";

export const metadata: Metadata = {
  title: "Shopping Bag | Nool & Zari",
};

export default function CartPage() {
  return (
    <main>
      <CartContents />
    </main>
  );
}
