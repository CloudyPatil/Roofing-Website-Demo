import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

      {/* CTA Banner */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        <div className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #FF4D2E 0%, #FF7A5C 100%)" }}>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Transform Your Roof?
            </h3>
            <p className="text-white/90 text-lg">Get your FREE inspection today — no obligation.</p>
          </div>
          <Link href="/free-inspection" className="btn-dark flex-shrink-0">
            Book Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xl"
                style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                R
              </div>
              <span className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
                {COMPANY.name}
              </span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Premium roofing experts delivering quality craftsmanship & unbeatable service since 2010.
            </p>
            <div className="text-xs text-white/40 uppercase tracking-wider">License {COMPANY.license}</div>
            
            <div className="flex gap-2 mt-6">
              {["facebook", "instagram", "youtube"].map((social) => (
                <a key={social} href="#" aria-label={social}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  style={{ background: "rgba(255,255,255,0.08)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    {social === "facebook" && <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>}
                    {social === "instagram" && <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.899 1.113 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428-.254.66-.598 1.216-1.153 1.772-.556.555-1.113.899-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>}
                    {social === "youtube" && <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "var(--color-accent-light)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Gallery", "Financing", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "var(--color-accent-light)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: "var(--color-accent-light)" }}>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,77,46,0.15)" }}>
                  <Phone size={14} style={{ color: "var(--color-accent-light)" }} />
                </div>
                <a href={`tel:${COMPANY.phone}`} className="text-white/80 hover:text-white text-sm">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,77,46,0.15)" }}>
                  <Mail size={14} style={{ color: "var(--color-accent-light)" }} />
                </div>
                <a href={`mailto:${COMPANY.email}`} className="text-white/80 hover:text-white text-sm break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,77,46,0.15)" }}>
                  <MapPin size={14} style={{ color: "var(--color-accent-light)" }} />
                </div>
                <span className="text-white/80 text-sm">{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,77,46,0.15)" }}>
                  <Clock size={14} style={{ color: "var(--color-accent-light)" }} />
                </div>
                <div className="text-sm">
                  <p className="text-white/80">{COMPANY.hours}</p>
                  <p className="font-semibold mt-1" style={{ color: "var(--color-accent-light)" }}>
                    {COMPANY.emergency}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}