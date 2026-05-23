"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero is 500vh, so end position = 5 * windowHeight
      // 90% of hero = 4.5 * windowHeight
      const hero90Position = windowHeight * 4.5;
      const heroEndPosition = windowHeight * 5;
      
      if (scrollY < windowHeight * 0.15) {
        // Very top - transparent navbar visible
        setHidden(false);
        setScrolled(false);
      } else if (scrollY < hero90Position) {
        // During main animation - HIDDEN
        setHidden(true);
      } else if (scrollY < heroEndPosition) {
        // 90%-100% of hero - reappear with transparent style
        setHidden(false);
        setScrolled(false);
      } else {
        // After hero - white background navbar
        setHidden(false);
        setScrolled(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hidden 
          ? "-translate-y-full opacity-0 pointer-events-none" 
          : "translate-y-0 opacity-100"
      } ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-xl"
            style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
            R
          </div>
          <span className={`text-xl md:text-2xl font-extrabold transition-colors ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}
            style={{ fontFamily: "var(--font-heading)" }}>
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full"
          style={{
            background: scrolled ? "rgba(0,0,0,0.05)" : "rgba(10, 14, 39, 0.6)",
            backdropFilter: "blur(15px)",
            border: scrolled ? "none" : "1px solid rgba(255,255,255,0.1)"
          }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all hover:bg-white hover:shadow-md ${
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phone}`}
            className={`flex items-center gap-2 font-bold text-sm ${scrolled ? "text-gray-900" : "text-white drop-shadow-lg"}`}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center animate-pulse-ring"
              style={{ background: "linear-gradient(135deg, #FF4D2E, #FF7A5C)" }}>
              <Phone size={16} className="text-white" />
            </div>
            <span className="hidden xl:inline">{COMPANY.phoneDisplay}</span>
          </a>
          <Link href="/free-inspection" className="btn-primary !py-3 !px-5 !text-sm">
            Free Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-full ${scrolled ? "bg-gray-100 text-gray-900" : "bg-white/20 text-white backdrop-blur-md"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium py-3 px-4 rounded-xl hover:bg-gray-50 text-gray-800"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 font-bold py-3 px-4 text-gray-900 border-t border-gray-100 mt-2"
            >
              <Phone size={18} style={{ color: "var(--color-accent)" }} />
              {COMPANY.phoneDisplay}
            </a>
            <Link
              href="/free-inspection"
              onClick={() => setIsOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}