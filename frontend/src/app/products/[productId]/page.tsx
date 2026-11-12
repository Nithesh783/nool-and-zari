import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allFabricsProducts } from "@/data/homepage";
import { formatPrice } from "@/services/catalog";
import ProductPurchaseOptions from "@/components/products/product-purchase-options";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import styles from "./product-details.module.css";

export const metadata: Metadata = {
  title: "Product Details | Nool & Zari",
};

export function generateStaticParams() {
  return allFabricsProducts.map((product) => ({ productId: product.id }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = allFabricsProducts.find((item) => item.id === productId);
  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <article className={styles.page}>
          <div className={styles.image}>
            <Image
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 750px) 100vw, 50vw"
              src={product.image}
            />
          </div>
          <div className={styles.details}>
            <p className={styles.brand}>{product.origin}</p>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>{formatPrice(product.price)}</p>
            <p className={styles.description}>{product.description}</p>
            <dl className={styles.meta}>
              <div>
                <dt>Weave</dt>
                <dd>{product.weave}</dd>
              </div>
              <div>
                <dt>Atelier</dt>
                <dd>{product.origin}</dd>
              </div>
            </dl>
            <ProductPurchaseOptions product={product} />
            <Link className={styles.backLink} href="/all-fabrics">
              Return to All Fabrics
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
