import type { Metadata } from "next";
import CheckoutContent from "@/features/checkout/checkout-content";

export const metadata: Metadata = {
  title: "Checkout | Nool & Zari",
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutContent />
    </main>
  );
}
