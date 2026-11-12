import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import CheckoutContent from "@/components/checkout/checkout-content";

export const metadata: Metadata = {
  title: "Checkout | Nool & Zari",
};

export default function CheckoutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CheckoutContent />
      </main>
      <SiteFooter />
    </>
  );
}
