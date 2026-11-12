import type { Metadata } from "next";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import ProductShowcase from "@/components/sections/product-showcase";
import { allFabricsProducts } from "@/data/homepage";

export const metadata: Metadata = {
  title: "All Fabrics | Nool & Zari",
  description:
    "Explore ten sample Nool & Zari silk sarees, lehengas, and heirloom fabrics.",
};

export default function AllFabricsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="all-fabrics-page section-shell">
          <div className="all-fabrics-heading">
            <span className="section-kicker">The Nool &amp; Zari Collection</span>
            <h1>All Fabrics</h1>
          </div>
          <ProductShowcase products={allFabricsProducts} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
