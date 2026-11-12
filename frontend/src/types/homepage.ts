export interface Category {
  id: string;
  name: string;
  origin: string;
  technique: string;
  startingPrice: string;
  image: string;
  imageAlt: string;
}

export interface ProductSwatch {
  name: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  origin: string;
  weave: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
  category: "bridal" | "limited" | "all";
  swatches: ProductSwatch[];
  sizes?: string[];
  sizeChartUrl?: string;
}

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  details: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
