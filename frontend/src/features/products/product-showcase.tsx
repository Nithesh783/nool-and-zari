"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Plus } from "lucide-react";
import type { Product } from "@/types/catalog";
import { formatPrice } from "@/services/catalog";
import QuickViewModal from "@/features/products/quick-view-modal";
import styles from "./product-showcase.module.css";

interface ProductShowcaseProps {
  products: Product[];
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeQuickView = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <div className={styles.grid}>
        {products.map((product) => {
          const productHref = `/products/${product.id}`;

          return (
            <article className={styles.card} key={product.id}>
              <div className={styles.image}>
                <Link
                  aria-label={`View ${product.name}`}
                  className={styles.imageLink}
                  href={productHref}
                >
                  <Image
                    alt={product.imageAlt}
                    className={styles.imageContent}
                    fill
                    sizes="(max-width: 600px) 46vw, (max-width: 850px) 46vw, 23vw"
                    src={product.image}
                  />
                </Link>
                <button
                  aria-label={`Quick view ${product.name}`}
                  className={styles.quickViewButton}
                  onClick={() => setSelectedProduct(product)}
                  type="button"
                >
                  <Plus aria-hidden="true" size={18} strokeWidth={1.5} />
                </button>
              </div>
              <Link className={styles.infoLink} href={productHref}>
                <div className={styles.info}>
                  <p className={styles.brand}>{product.origin}</p>
                  <h2 className={styles.name}>{product.name}</h2>
                  <p className={styles.price}>{formatPrice(product.price)}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
      {selectedProduct && (
        <QuickViewModal
          key={selectedProduct.id}
          onClose={closeQuickView}
          product={selectedProduct}
        />
      )}
    </>
  );
}