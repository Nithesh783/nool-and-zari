"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { allFabricsProducts } from "@/data/homepage";
import { formatPrice } from "@/services/catalog";
import {
  clearCheckoutNowItem,
  getCartItems,
  getCheckoutNowItem,
} from "@/services/cart";
import type { CartItem } from "@/services/cart";
import styles from "@/components/cart/commerce.module.css";

export default function CheckoutContent() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    try {
      const isBuyNow =
        new URLSearchParams(window.location.search).get("mode") === "now";
      if (isBuyNow) {
        const item = getCheckoutNowItem();
        if (!item) {
          setError("Your quick checkout selection has expired. Please select the product again.");
        } else {
          setItems([item]);
        }
      } else {
        setItems(getCartItems());
      }
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Checkout could not be loaded.",
      );
    } finally {
      setIsReady(true);
    }
  }, []);

  const subtotal = items.reduce((total, item) => {
    const product = allFabricsProducts.find(
      (candidate) => candidate.id === item.productId,
    );
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearCheckoutNowItem();
    setFeedback(
      "Checkout preview complete. This storefront has no payment or fulfilment service connected, so no order was placed and your bag remains unchanged.",
    );
  }

  if (!isReady) {
    return <p className={styles.notice}>Preparing checkout…</p>;
  }

  return (
    <section aria-labelledby="checkout-title" className={styles.page}>
      <header className={styles.pageHeading}>
        <span className={styles.kicker}>A considered final selection</span>
        <h1 id="checkout-title">Checkout</h1>
      </header>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      {!error && items.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Your bag is empty.</p>
          <Link className={styles.primaryLink} href="/all-fabrics">
            Explore All Fabrics
          </Link>
        </div>
      ) : (
        !error && (
          <div className={styles.checkoutLayout}>
            <form className={styles.checkoutForm} onSubmit={handleSubmit}>
              <h2>Delivery details</h2>
              <label>
                Full name
                <input autoComplete="name" name="name" required />
              </label>
              <label>
                Email address
                <input
                  autoComplete="email"
                  name="email"
                  required
                  type="email"
                />
              </label>
              <label>
                Delivery address
                <textarea
                  autoComplete="street-address"
                  name="address"
                  required
                  rows={3}
                />
              </label>
              <p className={styles.checkoutDisclaimer}>
                This checkout preview does not process payments or send orders
                for fulfilment.
              </p>
              <button type="submit">Complete Demo Checkout</button>
              <p aria-live="polite" className={styles.checkoutFeedback} role="status">
                {feedback}
              </p>
            </form>
            <aside className={styles.checkoutSummary}>
              <h2>Order Summary</h2>
              {items.map((item, index) => {
                const product = allFabricsProducts.find(
                  (candidate) => candidate.id === item.productId,
                );
                if (!product) {
                  return null;
                }
                return (
                  <div
                    className={styles.summaryItem}
                    key={`${item.productId}-${index}`}
                  >
                    <span>
                      {product.name} × {item.quantity}
                      <br />
                      {item.color}
                      {item.size ? ` · ${item.size}` : ""}
                    </span>
                    <strong>
                      {formatPrice(product.price * item.quantity)}
                    </strong>
                  </div>
                );
              })}
              <div className={styles.summaryTotal}>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
            </aside>
          </div>
        )
      )}
    </section>
  );
}
