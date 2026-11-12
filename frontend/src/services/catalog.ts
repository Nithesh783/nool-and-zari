import { categories, featuredProducts } from "@/data/homepage";
import type { Category, Product } from "@/types/homepage";

export function getCategories(): Category[] {
  return categories;
}

export function getFeaturedProducts(): Product[] {
  return featuredProducts;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
