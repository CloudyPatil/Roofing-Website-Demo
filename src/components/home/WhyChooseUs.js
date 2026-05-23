import { ShieldCheck, Award, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description: "State licensed contractor with $2M liability insurance for your complete protection and peace of mind.",
  },
  {
    icon: Award,
    title: "GAF Master Elite Certified",
    description: "Top 3% of all roofing contractors in North America — verified excellence you can trust.",
  },
  {
    icon: Clock,
    title: "Fast 1-2 Day Turnaround",
    description: "Most residential roofs completed in just 1-2 days. We respect your time and property.",
  },
  {
    icon: BadgeCheck,
    title: "Lifetime Workmanship Warranty",
    description: "Every roof backed by our lifetime warranty plus full manufacturer material warranty.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full"
            style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
            <span style={{ color: "#FFB800" }}>★</span>
            <span className="text-sm font-semibold text-white">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
            Built On <span className="gradient-text">Trust</span>,<br/>
            Backed By Excellence
          </h2>
          <p className="text-lg text-white/70 mt-6">
            Join 500+ homeowners who chose quality, reliability, and craftsmanship that lasts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i}
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                
                {/* Hover shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(255,77,46,0.05), rgba(255,184,0,0.05))" }} />

                <div className="relative flex gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-2 text-white"
                      style={{ fontFamily: "var(--font-heading)" }}>
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}