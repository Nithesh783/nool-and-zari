import type { Category, Product, Testimonial } from "@/types/homepage";

export const categories: Category[] = [
  {
    id: "kanjivaram",
    name: "Kanjivaram Treasures",
    origin: "Tamil Nadu Looms",
    technique: "Korvai Weave",
    startingPrice: "$680",
    image: "/images/category-kanjivaram-new.jpg",
    imageAlt: "Model wearing a slate-blue Kanjivaram saree with traditional gold motifs",
  },
  {
    id: "banarasi",
    name: "Banarasi Brocade",
    origin: "Varanasi Heritage",
    technique: "Kadhwa Technique",
    startingPrice: "$590",
    image: "/images/category-banarasi-new.jpg",
    imageAlt: "Model wearing an ivory Banarasi saree with delicate embellishment",
  },
  {
    id: "organza",
    name: "Organza & Chanderi",
    origin: "Madhya Pradesh Weft",
    technique: "Tissue & Resham",
    startingPrice: "$420",
    image: "/images/category-organza-chanderi.jpg",
    imageAlt: "Model wearing an ivory Organza and Chanderi saree with delicate gold motifs",
  },
  {
    id: "lehenga",
    name: "Heritage Lehengas",
    origin: "Custom Atelier",
    technique: "Haute Trousseau",
    startingPrice: "$1,450",
    image: "/images/category-heritage-lehengas.jpg",
    imageAlt: "Model wearing a slate-blue heritage lehenga with intricate gold embroidery",
  },
];

const availableSizes = ["S", "M", "L", "XL", "2XL"];

export const featuredProducts: Product[] = [
  {
    id: "rani-pink-brocade",
    name: "The Rani Pink Gold Brocade",
    origin: "Varanasi Looms",
    weave: "Pure Katan Silk",
    description:
      "Hand-knotted gold zari pallu with traditional floral shikargah motifs.",
    price: 920,
    image: "/images/product-rani-pink.jpg",
    imageAlt: "Rani pink Banarasi brocade sari in a vintage courtyard",
    category: "bridal",
    sizes: availableSizes,
    swatches: [
      { name: "Rosewater Blush", color: "#e0a99e" },
      { name: "Gold Zari", color: "#d4af37" },
      { name: "Midnight Indigo", color: "#111e38" },
    ],
  },
  {
    id: "midnight-neelambari",
    name: "Midnight Neelambari Silk",
    origin: "Kanchipuram Heritage",
    weave: "Heavy Korvai Silk",
    description:
      "Contrasting temple gopuram borders in 24K electroplated zari cord.",
    price: 1150,
    image: "/images/product-neelambari.jpg",
    imageAlt: "Midnight navy Kanjivaram sari with gold temple borders",
    category: "limited",
    sizes: availableSizes,
    swatches: [
      { name: "Midnight Neelambari", color: "#111e38" },
      { name: "Champagne Gold", color: "#d4af37" },
      { name: "Royal Sapphire", color: "#182b50" },
    ],
  },
  {
    id: "ivory-noor",
    name: "Ivory Noor Zari Set",
    origin: "Chanderi Valley",
    weave: "Tissue Silk & Organza",
    description:
      "Featherlight spun silk overlay accompanied by an unstitched silk blouse.",
    price: 740,
    image: "/images/product-ivory-noor.jpg",
    imageAlt: "Ivory Chanderi tissue sari with champagne zari edges",
    category: "all",
    sizes: availableSizes,
    swatches: [
      { name: "Ivory Noor", color: "#fdf8f6" },
      { name: "Basra Pearl", color: "#ebddd5" },
      { name: "Pure Zari", color: "#d4af37" },
    ],
  },
  {
    id: "saffron-gulab",
    name: "Saffron Gulab Lehenga",
    origin: "Bridal Atelier",
    weave: "Raw Matka Silk",
    description: "Hand-sewn over 420 artisan hours with spun silver and gold wires.",
    price: 2450,
    image: "/images/product-saffron-gulab.jpg",
    imageAlt: "Saffron bridal lehenga with hand-embroidered gold detailing",
    category: "bridal",
    sizes: availableSizes,
    swatches: [
      { name: "Rosewater Champagne", color: "#e0a99e" },
      { name: "Gold Thread", color: "#d4af37" },
      { name: "Midnight Indigo", color: "#111e38" },
    ],
  },
];

export const allFabricsProducts: Product[] = [
  ...featuredProducts,
  {
    id: "emerald-kadhwa",
    name: "Emerald Banarasi Kadhwa",
    origin: "Varanasi Heritage",
    weave: "Kadhwa Silk",
    description: "Handwoven emerald silk with antique-gold floral motifs.",
    price: 880,
    image: "/images/category-banarasi-new.jpg",
    imageAlt: "Emerald Banarasi silk saree with antique-gold motifs",
    category: "all",
    sizes: availableSizes,
    swatches: [
      { name: "Emerald", color: "#315b49" },
      { name: "Antique Gold", color: "#c5a15b" },
    ],
  },
  {
    id: "slate-blue-kanjivaram",
    name: "Slate Blue Kanjivaram",
    origin: "Tamil Nadu Looms",
    weave: "Korvai Pure Silk",
    description: "A classic Kanjivaram drape finished with a temple border.",
    price: 1080,
    image: "/images/category-kanjivaram-new.jpg",
    imageAlt: "Slate-blue Kanjivaram saree with traditional gold motifs",
    category: "bridal",
    sizes: availableSizes,
    swatches: [
      { name: "Slate Blue", color: "#64758b" },
      { name: "Gold Zari", color: "#d4af37" },
    ],
  },
  {
    id: "ivory-chanderi-tissue",
    name: "Ivory Chanderi Tissue",
    origin: "Chanderi Valley",
    weave: "Tissue & Resham",
    description: "Lightweight ivory silk with delicate zari detailing.",
    price: 520,
    image: "/images/category-organza-chanderi.jpg",
    imageAlt: "Ivory Chanderi saree with subtle gold motifs",
    category: "all",
    sizes: availableSizes,
    swatches: [
      { name: "Ivory", color: "#fdf8f6" },
      { name: "Champagne", color: "#cbb279" },
    ],
  },
  {
    id: "heritage-zardozi-lehenga",
    name: "Heritage Zardozi Lehenga",
    origin: "Bridal Atelier",
    weave: "Raw Silk & Zardozi",
    description: "A richly embroidered heirloom silhouette for celebrations.",
    price: 1980,
    image: "/images/category-heritage-lehengas.jpg",
    imageAlt: "Heritage lehenga with intricate gold embroidery",
    category: "bridal",
    sizes: availableSizes,
    swatches: [
      { name: "Midnight Indigo", color: "#111e38" },
      { name: "Gold Thread", color: "#d4af37" },
    ],
  },
  {
    id: "rosewood-tussar-zari",
    name: "Rosewood Tussar Zari",
    origin: "Bhagalpur Looms",
    weave: "Tussar Silk & Zari",
    description: "Textured tussar silk woven with a softly gleaming zari edge.",
    price: 650,
    image: "/images/tussar-zari-model.jpg",
    imageAlt: "Model wearing a rosewood tussar silk saree with zari",
    category: "all",
    sizes: availableSizes,
    swatches: [
      { name: "Rosewood", color: "#7b4e50" },
      { name: "Zari Gold", color: "#d4af37" },
    ],
  },
  {
    id: "temple-border-kanchipuram",
    name: "Temple Border Kanchipuram",
    origin: "Kanchipuram Heritage",
    weave: "Heavy Korvai Silk",
    description: "Traditional temple-border silk, woven for lasting occasions.",
    price: 1320,
    image: "/images/kanchipuram-silk-model.jpg",
    imageAlt: "Kanchipuram silk saree with a traditional temple border",
    category: "limited",
    sizes: availableSizes,
    swatches: [
      { name: "Royal Blue", color: "#233b6c" },
      { name: "Gold Zari", color: "#d4af37" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The pure mulberry weight of the Kanjivaram is unlike anything made today. Draping it felt like wearing a piece of family history.",
    initials: "AP",
    name: "Ananya Parthasarathy",
    details: "Bridal Patron • London",
  },
  {
    quote:
      "The virtual atelier fitting was impeccable. The team zoomed into the hand-dipped zari wire before weaving started. Utterly bespoke.",
    initials: "RM",
    name: "Dr. Radhika Mehta",
    details: "Atelier Member • New York",
  },
  {
    quote:
      "My daughter’s wedding trousseau centered entirely around Nool & Zari’s Banarasi Kadhwa sari. A masterpiece in genuine craftsmanship.",
    initials: "SC",
    name: "Sunita Chandra",
    details: "Patron • Mumbai",
  },
  {
    quote:
      "Every detail felt personal and deeply considered. The silk drape, the hand-finished border, and the final fitting were all exceptional.",
    initials: "NV",
    name: "Nisha Venkatesh",
    details: "Bride • Bengaluru",
  },
  {
    quote:
      "I ordered a festive sari for a family celebration and it arrived with the most exquisite finish. It felt couture without being excessive.",
    initials: "AK",
    name: "Aditi Kapoor",
    details: "Patron • Dubai",
  },
  {
    quote:
      "The craft is extraordinary, but the experience is what makes it unforgettable. The atelier team truly listens and understands your story.",
    initials: "SM",
    name: "Sana Mirza",
    details: "Private Client • London",
  },
];
