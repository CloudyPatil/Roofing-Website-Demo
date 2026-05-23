import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sitemap",
  description: "Complete sitemap of our website.",
};

const links = [
  { section: "Main Pages", items: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Free Inspection", href: "/free-inspection" },
  ]},
  { section: "Services", items: [
    { label: "Roof Replacement", href: "/services/roof-replacement" },
    { label: "Roof Repair", href: "/services/roof-repair" },
    { label: "Storm Damage", href: "/services/storm-damage" },
    { label: "Commercial Roofing", href: "/services/commercial" },
    { label: "Gutter Services", href: "/services/gutters" },
  ]},
  { section: "Resources", items: [
    { label: "Gallery", href: "/gallery" },
    { label: "Financing", href: "/financing" },
    { label: "Insurance Claims", href: "/insurance" },
    { label: "Blog", href: "/blog" },
  ]},
  { section: "Legal", items: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]},
];

export default function SitemapPage() {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
            Site<span className="gradient-text">map</span>
          </h1>
          <p className="text-lg text-white/70">All pages on our website</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {links.map((section, i) => (
            <div key={i} className="rounded-3xl p-8"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
              <h2 className="text-2xl font-extrabold mb-4 gradient-text"
                style={{ fontFamily: "var(--font-heading)" }}>
                {section.section}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link href={item.href} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}