import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Pin,
  Youtube,
} from "lucide-react";

const footerColumns = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "#craft" },
      { label: "Our Story", href: "#craft" },
      { label: "Stores", href: "#salon" },
      { label: "FAQs", href: "#footer" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact Us", href: "#salon" },
      { label: "Orders & Shipping", href: "#footer" },
      { label: "Return & Exchange", href: "#footer" },
      { label: "Terms & Conditions", href: "#footer" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main section-shell">
        {footerColumns.map((column) => (
          <section className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section aria-labelledby="footer-help-title" className="footer-column">
          <h2 id="footer-help-title">Need Help</h2>
          <ul className="footer-help-list">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chepauk%20Stadium%2C%20Chennai"
                rel="noreferrer"
                target="_blank"
              >
                <MapPin aria-hidden="true" size={16} />
                Store Location
              </a>
            </li>
            <li>
              <a href="mailto:shoponline@noolzaari.com">
                <Mail aria-hidden="true" size={16} />
                shoponline@noolzaari.com
              </a>
            </li>
            <li>
              <a href="tel:9876543210">
                <Phone aria-hidden="true" size={16} />
                9876543210
              </a>
            </li>
          </ul>
        </section>
        <section aria-labelledby="footer-brand-title" className="footer-brand">
          <h2 className="footer-brand-name" id="footer-brand-title">
            <Link aria-label="Nool & Zari home" href="/">
              <span>Nool</span>
              <span aria-hidden="true">&amp;</span>
              <span>Zari</span>
            </Link>
          </h2>
          <p className="footer-motto">
            Celebrating the art of Indian craftsmanship through timeless silks,
            intricate zari and contemporary elegance.
          </p>
          <nav aria-label="Social media" className="footer-social">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram aria-hidden="true" size={17} />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook aria-hidden="true" size={17} />
            </a>
            <a
              aria-label="Pinterest"
              href="https://www.pinterest.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Pin aria-hidden="true" size={17} />
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Youtube aria-hidden="true" size={17} />
            </a>
          </nav>
        </section>
      </div>
      <div className="footer-legal">
        <p>
          <span>© 2026 - Nool&amp;Zari</span>
          <span aria-hidden="true" className="footer-legal-divider">
            |
          </span>
          <span>
            Website by <strong>Nithesh</strong>
          </span>
        </p>
      </div>
    </footer>
  );
}
