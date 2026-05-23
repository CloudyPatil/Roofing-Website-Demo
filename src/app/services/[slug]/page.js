import { SERVICES, COMPANY } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import LeadFormSection from "@/components/home/LeadFormSection";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const features = [
    { icon: ShieldCheck, title: "Full Warranty", desc: "Long-term protection for your peace of mind." },
    { icon: Clock, title: "Fast Execution", desc: "Most projects completed in 1-2 days." },
    { icon: Award, title: "#1 Materials", desc: "We only use premium-grade materials." },
    { icon: CheckCircle2, title: "Final Cleanup", desc: "We leave your property spotless." }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
            style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
            <span style={{ color: "#FFB800" }}>✦</span>
            <span className="text-sm font-semibold text-white">Professional Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] text-white max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}>
            Premium <span className="gradient-text">{service.title}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            {service.description} We provide top-tier {service.title.toLowerCase()} services with unmatched quality and durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-inspection" className="btn-primary">
              Request Free Estimate <ArrowRight size={18} />
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-secondary">
              <Phone size={18} /> Call {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Why This Service */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-4"><span>✓</span> Why Choose Our {service.title}</div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                Excellence in Every <span className="gradient-text">Detail</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that your roof is your home's first line of defense. Our specialized 
                {service.title.toLowerCase()} process ensures that every inch of your roof is 
                inspected, secured, and finished to the highest industry standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0"
                      style={{ color: "var(--color-accent)" }}>
                      <f.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{f.title}</h4>
                      <p className="text-sm text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl relative group">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
                   <div className="absolute inset-0 opacity-20" 
                        style={{ 
                          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
                          backgroundSize: "20px 20px" 
                        }} />
                   <div className="text-white/20 text-9xl font-black rotate-12 select-none">ROOFING</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-dark rounded-2xl border border-white/10">
                   <p className="text-white font-bold text-xl mb-1">High-Quality Finish</p>
                   <p className="text-white/70 text-sm">Every project is a masterpiece of durability.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl z-[-1]"
                style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section from Home */}
      <LeadFormSection title={`Get Your Free ${service.title} Quote`} />
    </>
  );
}

export async function generateStaticParams() {
  return SERVICES.filter(s => s.id !== 'inspection').map((service) => ({
    slug: service.id,
  }));
}
