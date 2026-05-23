import { Shield, Award, Clock, Wrench } from "lucide-react";

const items = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "GAF Certified" },
  { icon: Wrench, text: "15+ Years Experience" },
  { icon: Clock, text: "24/7 Emergency Service" },
];

export default function TrustBar() {
  return (
    <section className="relative py-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center justify-center md:justify-start gap-3 text-white">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(255,77,46,0.2), rgba(255,184,0,0.2))" }}>
                <Icon size={18} style={{ color: "#FFB800" }} />
              </div>
              <span className="font-semibold text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}