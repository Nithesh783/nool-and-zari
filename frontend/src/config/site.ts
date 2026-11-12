import type { FooterColumn } from "@/types/homepage";

export const navigationLinks = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Couture Saris", href: "#categories" },
  { label: "Lehengas & Silks", href: "#categories" },
  { label: "Bridal Edit", href: "#products" },
  { label: "Atelier & Heritage", href: "#craft" },
  { label: "Reviews", href: "#stories" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Collections",
    links: [
      { label: "Kanjivaram Silks", href: "#categories" },
      { label: "Banarasi Weaves", href: "#categories" },
      { label: "Organza Chanderi", href: "#categories" },
      { label: "Bespoke Bridal", href: "#products" },
    ],
  },
  {
    title: "Atelier",
    links: [
      { label: "Our Weavers", href: "#craft" },
      { label: "The Zari Story", href: "#craft" },
      { label: "Sustainable Craft", href: "#craft" },
      { label: "Private Appointments", href: "#salon" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Bespoke Fitting", href: "#salon" },
      { label: "Shipping & Returns", href: "#footer" },
      { label: "Care Instructions", href: "#footer" },
      { label: "Client Concierge", href: "#salon" },
    ],
  },
];
