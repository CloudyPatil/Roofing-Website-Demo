import Link from "next/link";
import { ArrowUpRight, Home, Wrench, CloudLightning, Building2, Search, Droplets } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description: "Complete tear-off and brand new premium roof installation with lifetime warranty.",
    href: "/services/roof-replacement",
    color: "#FF4D2E",
    image: "🏠"
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "Fast, reliable repairs for leaks, missing shingles, and storm damage.",
    href: "/services/roof-repair",
    color: "#FFB800",
    image: "🔨"
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Emergency response for hail, wind, and storm-related roof damage.",
    href: "/services/storm-damage",
    color: "#3B82F6",
    image: "⛈️"
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Flat and commercial roof systems built for businesses & properties.",
    href: "/services/commercial",
    color: "#10B981",
    image: "🏢"
  },
  {
    icon: Search,
    title: "Free Inspection",
    description: "100% free professional roof inspection with detailed photo report.",
    href: "/free-inspection",
    color: "#8B5CF6",
    image: "🔍"
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    description: "Professional gutter installation, cleaning, and repair services.",
    href: "/services/gutters",
    color: "#06B6D4",
    image: "💧"
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 relative" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="badge mb-4">
            <span>✦</span> Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
            Everything Your Roof <br/>
            <span className="gradient-text">Needs & Deserves</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            From minor repairs to complete replacements — we handle it all with premium craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={i}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  background: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.05)"
                }}
              >
                {/* Hover gradient bg */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${service.color}08, ${service.color}15)` }} />
                
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${service.color}, transparent)` }} />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}>
                    <Icon size={26} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 font-bold text-sm transition-colors"
                    style={{ color: service.color }}>
                    <span>Learn More</span>
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}