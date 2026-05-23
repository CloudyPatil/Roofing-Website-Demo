import Link from "next/link";
import { Award, Users, ShieldCheck, Heart, ArrowRight, Phone, Star, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import LeadFormSection from "@/components/home/LeadFormSection";

export const metadata = {
  title: "About Us",
  description: "Learn about ProRoof Experts — 15+ years of premium roofing service. Licensed, insured, and trusted.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity First", description: "Honest assessments, transparent pricing, no high-pressure sales." },
  { icon: Award, title: "Quality Craftsmanship", description: "Premium materials installed by certified professionals." },
  { icon: Heart, title: "Customer Care", description: "We treat every home like it's our own — with respect and care." },
  { icon: Users, title: "Community Focus", description: "Locally owned and operated — proud to serve our community." },
];

const certifications = [
  "GAF Master Elite Contractor",
  "Owens Corning Preferred Contractor",
  "BBB A+ Accredited Business",
  "HAAG Certified Inspector",
  "Better Business Bureau Member",
  "State Licensed & Insured",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
            style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
            <span style={{ color: "#FFB800" }}>★</span>
            <span className="text-sm font-semibold text-white">About {COMPANY.name}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] text-white max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}>
            15 Years of <span className="gradient-text">Premium</span> Roofing
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Family-owned roofing experts dedicated to quality craftsmanship and complete customer satisfaction since 2010.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Roofs Installed" },
              { number: "300+", label: "5-Star Reviews" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl"
                style={{ background: "#FAFAFA" }}>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="badge mb-4"><span>✦</span> Our Story</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
              Built On <span className="gradient-text">Trust</span>
            </h2>
          </div>

          <div className="rounded-3xl p-10 md:p-14"
            style={{ background: "white", boxShadow: "0 30px 80px rgba(0,0,0,0.06)" }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {COMPANY.name} was founded in 2010 with a simple mission: to bring premium roofing 
                services with the honesty, quality, and care that homeowners deserve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                What started as a small family operation has grown into one of the most trusted roofing 
                companies in the region — but we've never lost our personal touch. Every customer matters. 
                Every roof matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to have completed over 500 roofing projects with hundreds of 5-star reviews. 
                But what makes us most proud is the trust our customers place in us — many of whom refer 
                their friends and family to us year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="badge mb-4"><span>💎</span> Our Values</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="p-8 rounded-3xl text-center transition-all hover:-translate-y-1"
                  style={{ background: "#FAFAFA", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full"
              style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
              <Award size={14} style={{ color: "#FFB800" }} />
              <span className="text-sm font-semibold text-white">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-heading)" }}>
              <span className="gradient-text">Verified</span> Excellence
            </h2>
            <p className="text-white/70 text-lg">License #{COMPANY.license}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <span className="text-white font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}