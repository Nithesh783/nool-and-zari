"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { formatPrice, getProductById } from "@/services/catalog";
import {
  clearCheckoutNowItem,
  getCartItems,
  getCheckoutNowItem,
  getCartSubtotal,
} from "@/services/cart";
import type { CartItem } from "@/types/cart";
import styles from "@/features/commerce/commerce.module.css";

const INCLUDED_TAX_RATE = 0.18;

function formatTaxAmount(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function CheckoutContent() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountFeedback, setDiscountFeedback] = useState("");

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

  const subtotal = getCartSubtotal(items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const includedTax = subtotal - subtotal / (1 + INCLUDED_TAX_RATE);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearCheckoutNowItem();
    setFeedback(
      "Checkout preview complete. This storefront has no payment or fulfilment service connected, so no order was placed and your bag remains unchanged.",
    );
  }

  function handleDiscountSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDiscountFeedback(
      discountCode.trim()
        ? "Discount codes are not enabled in this checkout preview."
        : "Enter a discount code to apply it.",
    );
  }

  if (!isReady) {
    return <p className={styles.notice}>Preparing checkout…</p>;
  }

  return (
    <section aria-labelledby="checkout-title" className={styles.page}>
      <header className={styles.pageHeading}>
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
                This checkout preview does not process payments, calculate
                shipping, or send orders for fulfilment.
              </p>
              <button type="submit">Checkout</button>
              {feedback && (
                <p
                  aria-live="polite"
                  className={styles.checkoutFeedback}
                  role="status"
                >
                  {feedback}
                </p>
              )}
            </form>
            <aside className={styles.checkoutSummary}>
              <h2>Order Summary</h2>
              <ul className={styles.checkoutItemList}>
                {items.map((item, index) => {
                  const product = getProductById(item.productId);
                  if (!product) {
                    return null;
                  }
                  return (
                    <li
                      className={styles.checkoutItem}
                      key={`${item.productId}-${index}`}
                    >
                      <div className={styles.checkoutItemImage}>
                        <Image
                          alt={product.imageAlt}
                          fill
                          loading={index < 3 ? "eager" : "lazy"}
                          sizes="72px"
                          src={product.image}
                        />
                        <span className={styles.checkoutItemQuantity}>
                          {item.quantity}
                        </span>
                      </div>
                      <div className={styles.checkoutItemInfo}>
                        <p>{product.name}</p>
                        <span>
                          {item.size ? `${item.size} / ` : ""}
                          {item.color}
                        </span>
                      </div>
                      <strong className={styles.checkoutItemPrice}>
                        {formatPrice(product.price * item.quantity)}
                      </strong>
                    </li>
                  );
                })}
              </ul>
              <form
                className={styles.discountForm}
                onSubmit={handleDiscountSubmit}
              >
                <label className="visually-hidden" htmlFor="discount-code">
                  Discount code
                </label>
                <input
                  autoComplete="off"
                  id="discount-code"
                  onChange={(event) => {
                    setDiscountCode(event.target.value);
                    setDiscountFeedback("");
                  }}
                  placeholder="Discount code"
                  value={discountCode}
                />
                <button type="submit">Apply</button>
              </form>
              {discountFeedback && (
                <p
                  aria-live="polite"
                  className={styles.discountFeedback}
                  role="status"
                >
                  {discountFeedback}
                </p>
              )}
              <div className={styles.checkoutTotals}>
                <div className={styles.checkoutTotalRow}>
                  <span>
                    Subtotal · {itemCount} {itemCount === 1 ? "item" : "items"}
                  </span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>
                <div className={styles.checkoutTotalRow}>
                  <span className={styles.checkoutShippingLabel}>
                    Shipping
                    <span
                      aria-label="Shipping cost is not calculated in this preview"
                      className={styles.shippingHelp}
                      role="img"
                      title="Shipping cost is not calculated in this preview"
                    >
                      ?
                    </span>
                  </span>
                  <span className={styles.checkoutShippingValue}>
                    Enter shipping address
                  </span>
                </div>
                <div className={styles.checkoutGrandTotal}>
                  <span>Total</span>
                  <strong>
                    <span>INR</span>
                    {formatPrice(subtotal)}
                  </strong>
                </div>
                <p>Including {formatTaxAmount(includedTax)} in taxes</p>
              </div>
            </aside>
          </div>
        )
      )}
    </section>
  );
}
