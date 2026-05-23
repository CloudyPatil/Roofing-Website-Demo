"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Phone, Star, Shield, Clock, Award, Loader2, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { sendLeadEmails } from "@/lib/emailjs";

export default function FreeInspectionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "", service: "Free Inspection"
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (phoneDigits.length < 10) newErrors.phone = "Enter valid 10-digit phone";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter valid email";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (field, value) => {
    if (field === "phone") value = formatPhone(value);
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setLoading(true);
    const result = await sendLeadEmails(formData);
    if (result.success) setSubmitted(true);
    else setSubmitError("Please call us at " + COMPANY.phoneDisplay);
    setLoading(false);
  };

  const inputClass = (field) => 
    `w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-100 focus:border-orange-400"
    }`;

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
      
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB800, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
              style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
              <span>🎁</span>
              <span className="text-sm font-semibold">100% FREE — Limited Time</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}>
              Get Your FREE <span className="gradient-text">Roof Inspection</span> Today
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              No obligation. No pressure. Just an honest assessment from licensed experts.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Professional roof inspection (30-45 minutes)",
                "Detailed photo report sent to your email",
                "Damage assessment with repair recommendations",
                "Insurance claim assistance if needed",
                "No high-pressure sales tactics — ever",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, text: "Licensed" },
                { icon: Award, text: "GAF Certified" },
                { icon: Clock, text: "2hr Response" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Icon size={14} style={{ color: "#FFB800" }} />
                  <span className="text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-3 text-white/80">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFB800" stroke="#FFB800" />
                ))}
              </div>
              <span className="text-sm font-semibold">{COMPANY.rating}/5 from {COMPANY.reviews} reviews</span>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-3xl p-8 md:p-10"
            style={{ background: "white", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
            
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="text-3xl font-extrabold mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                    Book My FREE Inspection
                  </div>
                  <p className="text-gray-500">Takes 30 seconds. Response in 2 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <input type="text" value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Full Name *" className={inputClass("name")} />
                    {errors.name && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                  </div>

                  <div>
                    <input type="tel" value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="Phone Number *" maxLength={14} className={inputClass("phone")} />
                    {errors.phone && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                  </div>

                  <div>
                    <input type="email" value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Email (optional, for photo report)" className={inputClass("email")} />
                    {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                  </div>

                  <div>
                    <input type="text" value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="Property Address *" className={inputClass("address")} />
                    {errors.address && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.address}</p>}
                  </div>

                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200">
                      <AlertCircle size={18} className="inline mr-2" />{submitError}
                    </div>
                  )}

                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center !py-5 text-lg disabled:opacity-70">
                    {loading ? (<><Loader2 size={20} className="animate-spin" />Sending...</>) : (<>Claim My FREE Inspection <ArrowRight size={20} /></>)}
                  </button>

                  <div className="text-center pt-2">
                    <a href={`tel:${COMPANY.phone}`} className="text-sm font-semibold text-gray-600 hover:text-gray-900">
                      Or call us directly: <span style={{ color: "var(--color-accent)" }}>{COMPANY.phoneDisplay}</span>
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 text-center">
                    🔒 Your info is 100% secure. We never spam.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                  <CheckCircle2 size={48} className="text-white" />
                </div>
                <h3 className="text-3xl font-extrabold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                  You're All Set! 🎉
                </h3>
                <p className="text-gray-600 mb-2">We received your request.</p>
                <p className="text-gray-600 mb-6">Our team will call you within 2 hours to schedule your FREE inspection.</p>
                <div className="p-4 rounded-xl bg-gray-50">
                  <div className="text-sm text-gray-500">Need help now?</div>
                  <a href={`tel:${COMPANY.phone}`} className="text-2xl font-extrabold" style={{ color: "var(--color-accent)" }}>
                    {COMPANY.phoneDisplay}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}