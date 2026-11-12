import type { Metadata } from "next";
import ProductShowcase from "@/features/products/product-showcase";
import { allFabricsProducts } from "@/data/catalog";
import { searchProducts } from "@/services/catalog";

export const metadata: Metadata = {
  title: "All Fabrics | Nool & Zari",
  description:
    "Explore ten sample Nool & Zari silk sarees, lehengas, and heirloom fabrics.",
};

export default async function AllFabricsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const queryParam = params.q;
  const query = (Array.isArray(queryParam) ? queryParam[0] : queryParam)?.trim() ?? "";
  const products = query
    ? searchProducts(allFabricsProducts, query)
    : allFabricsProducts;

  return (
    <main>
      <section className="all-fabrics-page section-shell">
        <div className="all-fabrics-heading">
          <span className="section-kicker">The Nool &amp; Zari Collection</span>
          <h1>{query ? `Results for "${query}"` : "All Fabrics"}</h1>
          {query && (
            <p aria-live="polite" className="all-fabrics-search-count">
              {products.length} {products.length === 1 ? "product" : "products"}{" "}
              found
            </p>
          )}
        </div>
        {products.length > 0 ? (
          <ProductShowcase products={products} />
        ) : (
          <p className="empty-products" role="status">
            No products match &quot;{query}&quot;. Try a different name, fabric,
            or keyword.
          </p>
        )}
      </section>
    </main>
  );
}
