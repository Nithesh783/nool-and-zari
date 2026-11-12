"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { allFabricsProducts } from "@/data/homepage";
import { formatPrice } from "@/services/catalog";
import { getCartItems, removeCartItem } from "@/services/cart";
import type { CartItem } from "@/services/cart";
import styles from "./commerce.module.css";

export default function CartContents() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setItems(getCartItems());
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Your bag could not be loaded.",
      );
    } finally {
      setIsReady(true);
    }
  }, []);

  function removeItem(index: number) {
    try {
      removeCartItem(index);
      setItems(getCartItems());
      setError("");
    } catch (removeError) {
      setError(
        removeError instanceof Error
          ? removeError.message
          : "The item could not be removed.",
      );
    }
  }

  const subtotal = items.reduce((total, item) => {
    const product = allFabricsProducts.find(
      (candidate) => candidate.id === item.productId,
    );
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  if (!isReady) {
    return <p className={styles.notice}>Loading your bag…</p>;
  }

  return (
    <section aria-labelledby="cart-title" className={styles.page}>
      <header className={styles.pageHeading}>
        <span className={styles.kicker}>Your Nool &amp; Zari selection</span>
        <h1 id="cart-title">Shopping Bag</h1>
      </header>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      {!error && items.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Your bag is waiting for a piece from the atelier.</p>
          <Link className={styles.primaryLink} href="/all-fabrics">
            Explore All Fabrics
          </Link>
        </div>
      ) : (
        !error && (
          <div className={styles.cartLayout}>
            <div className={styles.itemList}>
              {items.map((item, index) => {
                const product = allFabricsProducts.find(
                  (candidate) => candidate.id === item.productId,
                );
                if (!product) {
                  return null;
                }

                return (
                  <article className={styles.cartItem} key={`${item.productId}-${index}`}>
                    <div className={styles.itemImage}>
                      <Image
                        alt={product.imageAlt}
                        fill
                        sizes="120px"
                        src={product.image}
                      />
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.brand}>{product.origin}</p>
                      <h2>{product.name}</h2>
                      <p className={styles.variant}>
                        Colour: {item.color}
                        {item.size ? ` · Size: ${item.size}` : ""}
                      </p>
                      <p className={styles.variant}>Quantity: {item.quantity}</p>
                      <strong>{formatPrice(product.price * item.quantity)}</strong>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(index)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            <aside className={styles.summary}>
              <h2>Order Summary</h2>
              <div>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping and any applicable taxes are confirmed at checkout.</p>
              <Link className={styles.primaryLink} href="/checkout">
                Continue to Checkout
              </Link>
            </aside>
          </div>
        )
      )}
    </section>
  );
}
