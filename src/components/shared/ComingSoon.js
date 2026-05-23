import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ComingSoon({ 
  title = "Coming Soon", 
  description = "This page is currently being built. Check back soon!",
  emoji = "🚧"
}) {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        {/* Big Emoji */}
        <div className="text-8xl md:text-9xl mb-8 animate-float">
          {emoji}
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
          style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
          <Sparkles size={14} style={{ color: "#FFB800" }} />
          <span className="text-sm font-semibold text-white">Coming Soon</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] text-white"
          style={{ fontFamily: "var(--font-heading)" }}>
          {title.split(" ").length > 1 ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{title.split(" ").slice(-1)}</span>
            </>
          ) : (
            <span className="gradient-text">{title}</span>
          )}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
          {description}
        </p>

        {/* Info Box */}
        <div className="rounded-3xl p-8 max-w-2xl mx-auto mb-10"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
          <p className="text-white/80 mb-6">
            In the meantime, get in touch with us directly — we're always here to help!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/free-inspection" className="btn-primary">
              Get Free Inspection <ArrowRight size={18} />
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>

        {/* Back Home */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}