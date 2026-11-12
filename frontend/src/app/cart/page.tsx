import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import CartContents from "@/components/cart/cart-contents";

export const metadata: Metadata = {
  title: "Shopping Bag | Nool & Zari",
};

export default function CartPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CartContents />
      </main>
      <SiteFooter />
    </>
  );
}
