import { ArrowRight, Award, CheckCircle2, Video, Users } from "lucide-react";
import HeroSareeCarousel from "@/components/sections/hero-saree-carousel";

const weavePattern = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g stroke="#b89962" stroke-width=".7">
      <path d="M20 0 40 20 20 40 0 20 20 0Z"/>
      <path d="M20 5 35 20 20 35 5 20 20 5Z" opacity=".72"/>
      <path d="M0 0 20 20 40 0M0 40 20 20 40 40" opacity=".48"/>
      <path d="M20 7v6m0 14v6m-13-13h6m14 0h6" opacity=".55"/>
    </g>
    <g fill="#b89962">
      <circle cx="20" cy="20" r="1.25"/>
      <circle cx="0" cy="0" r=".8"/>
      <circle cx="40" cy="0" r=".8"/>
      <circle cx="0" cy="40" r=".8"/>
      <circle cx="40" cy="40" r=".8"/>
    </g>
  </svg>`,
)}")`;

const credentials = [
  { label: "100% Pure Mulberry Silk", Icon: CheckCircle2 },
  { label: "Master Craftsmen Guild", Icon: Users },
  { label: "Certified Zari Purity", Icon: Award },
];

export default function HeroSection() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#FAF7F2] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-6"
      id="new-arrivals"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{ backgroundImage: weavePattern, backgroundSize: "40px 40px" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(250,247,242,0.84)_0%,rgba(250,247,242,0.67)_48%,rgba(253,251,247,0.34)_100%)]"
      />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex min-w-0 flex-col gap-6 md:gap-5">
          <div>
            <h1
              className="text-[clamp(2rem,6vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.04em] text-[#0D1B2A]"
              style={{ fontFamily: "var(--hero-serif)" }}
            >
              Where Thread
              <br />
              <em className="font-normal">Meets Poetry</em>
            </h1>
            <p
              className="mt-5 max-w-[52ch] text-base leading-7 text-slate-600 sm:text-lg sm:leading-7"
              style={{ fontFamily: "var(--hero-sans)" }}
            >
              Handwoven heirloom silks, gilded zari borders, and contemporary
              grace tailored exclusively for the modern discerning woman.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap bg-[#0D1B2A] px-5 py-3 text-[11px] font-semibold tracking-[0.08em] text-white uppercase shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:text-xs"
              href="#products"
              style={{ color: "#fff", fontFamily: "var(--hero-sans)" }}
            >
              Explore The Festive Edit
              <ArrowRight
                className="text-[#d4af37] transition-transform group-hover:translate-x-1"
                size={16}
                aria-hidden="true"
              />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap border border-[#e4d8c8] bg-[#fdfbf7]/80 px-5 py-3 text-[11px] font-semibold tracking-[0.06em] text-[#0D1B2A] uppercase transition duration-200 hover:border-[#cbb279] hover:bg-white sm:text-xs"
              href="#salon"
              style={{ color: "#0D1B2A", fontFamily: "var(--hero-sans)" }}
            >
              <Video size={16} aria-hidden="true" />
              Virtual Atelier Fitting
            </a>
          </div>
          <div className="grid min-h-[68px] grid-cols-3 divide-x divide-[#d9cbb8] border border-[#e8dacb] bg-[#f4ece1]/60 px-2 py-3 shadow-sm backdrop-blur-sm sm:px-3">
            {credentials.map(({ label, Icon }, index) => (
              <div
                className={`flex min-w-0 items-center justify-center gap-1.5 px-1 text-center text-[8px] font-medium leading-[1.4] tracking-[0.06em] text-[#293344] uppercase sm:gap-2 sm:px-2 sm:text-[10px] ${
                  index === 0 ? "border-r-0" : ""
                }`}
                key={label}
                style={{ fontFamily: "var(--hero-sans)" }}
              >
                <Icon
                  className="shrink-0 text-[#b89962]"
                  size={16}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroSareeCarousel />
      </div>
    </section>
  );
}
