"use client";

import { useState } from "react";
import { Phone, MessageCircle, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { sendLeadEmails } from "@/lib/emailjs";

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "Roof Inspection",
  });

  // === VALIDATION RULES ===
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters";
    }

    // Phone validation (US format)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    } else if (phoneDigits.length > 11) {
      newErrors.phone = "Phone number is too long";
    }

    // Email validation (optional but if filled, must be valid)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Property address is required";
    } else if (formData.address.trim().length < 5) {
      newErrors.address = "Please enter a complete address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // === AUTO-FORMAT PHONE NUMBER ===
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  // === HANDLE INPUT CHANGE (clears error on type) ===
  const handleChange = (field, value) => {
    if (field === "phone") {
      value = formatPhone(value);
    }
    setFormData({ ...formData, [field]: value });
    
    // Clear error for this field as user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  // === SUBMIT ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) {
      // Scroll to first error
      const firstError = document.querySelector(".error-field");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setLoading(true);
    const result = await sendLeadEmails(formData);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError("Something went wrong. Please call us directly at " + COMPANY.phoneDisplay);
    }

    setLoading(false);
  };

  const whatsappMessage = encodeURIComponent("Hi, I'm interested in a free roof inspection for my home.");
  const whatsappLink = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`;

  // Input class helper
  const inputClass = (field) => 
    `w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
      errors[field] 
        ? "border-red-400 bg-red-50 error-field" 
        : "border-gray-100 focus:border-orange-400"
    }`;

  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FF4D2E 0%, #FF7A5C 50%, #FFB800 100%)" }}>
      
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl bg-white" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "#0A0E27" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span>🔥</span>
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}>
              Is Your Roof Hiding<br/>
              <span className="italic">Damage</span> You Can't See?
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Get a FREE professional roof inspection — no obligation, no pressure.
              We'll give you an honest assessment with detailed photo report.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "100% Free — No Hidden Costs",
                "Detailed Photo Report Included",
                "Insurance Claim Assistance",
                "We Respond Within 2 Hours"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20 backdrop-blur-md">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${COMPANY.phone}`} className="btn-dark flex-1 justify-center">
                <Phone size={18} /> {COMPANY.phoneDisplay}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex-1 justify-center inline-flex items-center gap-2 font-bold py-4 px-6 rounded-full text-white transition-all hover:-translate-y-1"
                style={{ background: "#25D366", boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)" }}>
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-3xl p-8 md:p-10"
            style={{ background: "white", boxShadow: "0 30px 80px rgba(0,0,0,0.2)" }}>
            
            {!submitted ? (
              <>
                <h3 className="text-3xl font-extrabold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                  Get Your Free Inspection
                </h3>
                <p className="text-gray-500 mb-8">Fill out the form — we'll call within 2 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Smith"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* PHONE + EMAIL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        maxLength={14}
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-gray-400 text-xs">(optional)</span>
                      </label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="you@email.com"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="123 Main Street, City, State"
                      className={inputClass("address")}
                    />
                    {errors.address && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.address}
                      </p>
                    )}
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-colors bg-white"
                    >
                      <option>Roof Inspection</option>
                      <option>Roof Replacement</option>
                      <option>Roof Repair</option>
                      <option>Storm Damage</option>
                      <option>Commercial Roofing</option>
                      <option>Emergency Service</option>
                    </select>
                  </div>

                  {/* SUBMIT ERROR */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200 flex items-start gap-2">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary w-full justify-center !py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get FREE Inspection <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 100% Secure · No Spam · We respond within 2 hours
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-extrabold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                  Thank You! 🎉
                </h3>
                <p className="text-gray-600 mb-6">
                  We received your request and will contact you within 2 hours during business hours.
                  {formData.email && " Check your email for confirmation."}
                </p>
                <div className="text-sm text-gray-500">
                  Need immediate help? Call us at{" "}
                  <a href={`tel:${COMPANY.phone}`} className="font-bold" style={{ color: "var(--color-accent)" }}>
                    {COMPANY.phoneDisplay}
                  </a>
                </div>

                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                    setFormData({name: "", phone: "", email: "", address: "", service: "Roof Inspection"});
                  }}
                  className="mt-6 text-sm text-gray-500 underline hover:text-gray-700"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}