import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        
        {/* 404 Number */}
        <div className="text-[150px] md:text-[200px] font-extrabold leading-none mb-4 gradient-text animate-float"
          style={{ fontFamily: "var(--font-heading)" }}>
          404
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white"
          style={{ fontFamily: "var(--font-heading)" }}>
          Oops! Page Not Found
        </h1>

        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          Looks like this page took a detour. But don't worry — we'll get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
            <Phone size={16} /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
}