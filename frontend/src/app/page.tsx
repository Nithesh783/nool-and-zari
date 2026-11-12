import CraftsmanshipSection from "@/components/sections/craftsmanship-section";
import CategorySection from "@/components/sections/category-section";
import HeroSection from "@/components/sections/hero-section";
import OccasionSection from "@/components/sections/occasion-section";
import SalonInvitation from "@/components/sections/salon-invitation";
import TestimonialsSection from "@/components/sections/testimonials-section";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { getCategories } from "@/services/catalog";
import { testimonials } from "@/data/homepage";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection categories={getCategories()} />
        <OccasionSection />
        <CraftsmanshipSection />
        <TestimonialsSection testimonials={testimonials} />
        <SalonInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
