"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Shield, Award, Clock, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import LeadFormSection from "@/components/home/LeadFormSection";

export default function ServicePageTemplate({ service }) {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${service.color}, transparent)` }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
                style={{ background: `${service.color}25`, border: `1px solid ${service.color}50` }}>
                <span>{service.emoji}</span>
                <span className="text-sm font-semibold">{service.tagline}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}>
                {service.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="gradient-text">{service.heroTitle.split(" ").slice(-2).join(" ")}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                {service.heroDescription}
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.quickBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} style={{ color: service.color }} />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/free-inspection" className="btn-primary">
                  Get Free Quote <ArrowRight size={18} />
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
                  <Phone size={16} /> {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="hidden lg:block">
              <div className="rounded-3xl p-10 text-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${service.color}40`
                }}>
                <div className="text-9xl mb-4">{service.emoji}</div>
                <h3 className="text-3xl font-extrabold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <p className="text-white/70">{COMPANY.reviews} happy homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="badge mb-4"><span>✦</span> What's Included</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
              Everything You Get With <br />
              <span className="gradient-text">{service.title}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.included.map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl transition-all hover:-translate-y-1"
                style={{ background: "#FAFAFA", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}>
                  <CheckCircle2 size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-extrabold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: `radial-gradient(circle, ${service.color}, transparent)` }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full"
              style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
              <span style={{ color: "#FFB800" }}>★</span>
              <span className="text-sm font-semibold text-white">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-heading)" }}>
              How We <span className="gradient-text">Get It Done</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px -translate-x-1/2"
                    style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)" }} />
                )}
                <div className="rounded-3xl p-6 text-center text-white relative"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY/TRUST */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #FAFAFA, #fff)",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.06)"
            }}>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Award, text: "GAF Certified" },
                { icon: Clock, text: "Lifetime Warranty" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: "rgba(255,77,46,0.1)", color: "var(--color-accent)" }}>
                  <Icon size={16} />
                  <span className="text-sm font-bold">{text}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
              Backed By Our <span className="gradient-text">100% Guarantee</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Every project includes our lifetime workmanship warranty plus full manufacturer warranty on all materials.
            </p>

            <Link href="/free-inspection" className="btn-primary">
              Get Started Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge mb-4"><span>?</span> FAQs</div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.05)" }}>
                <summary className="flex items-center justify-between font-bold text-lg list-none"
                  style={{ color: "var(--color-primary)" }}>
                  {faq.q}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                    style={{ background: "var(--color-accent)" }}>
                    <span className="text-white text-xl">+</span>
                  </div>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LeadFormSection />
    </>
  );
}