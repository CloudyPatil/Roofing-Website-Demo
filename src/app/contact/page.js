"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { sendLeadEmails } from "@/lib/emailjs";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", address: "", service: "General Inquiry", message: ""
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name too short";

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (phoneDigits.length < 10) newErrors.phone = "Enter valid 10-digit phone";

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

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
    const result = await sendLeadEmails({
      ...formData,
      address: formData.address || "Not provided",
    });

    if (result.success) setSubmitted(true);
    else setSubmitError("Something went wrong. Please call " + COMPANY.phoneDisplay);
    setLoading(false);
  };

  const inputClass = (field) => 
    `w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-100 focus:border-orange-400"
    }`;

  const whatsappLink = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I have a question about your roofing services.")}`;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF4D2E, transparent)" }} />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="badge mb-4 !bg-white/10 !text-white !border-white/20">
            <span>📞</span> Contact Us
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
            Let's <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Have questions? Need a quote? We're here to help. Reach out and we'll respond within 2 hours.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT - Contact Info */}
            <div className="space-y-6">
              <div className="rounded-3xl p-8"
                style={{ background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
                <h2 className="text-3xl font-extrabold mb-6"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                  Get In Touch
                </h2>

                <div className="space-y-5">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg, #FF4D2E, #FF7A5C)" }}>
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Phone</div>
                      <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
                        {COMPANY.phoneDisplay}
                      </div>
                      <div className="text-sm text-gray-500">{COMPANY.emergency}</div>
                    </div>
                  </a>

                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg, #FFB800, #FF7A5C)" }}>
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Email</div>
                      <div className="text-lg font-bold break-all" style={{ color: "var(--color-primary)" }}>
                        {COMPANY.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Address</div>
                      <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
                        {COMPANY.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #8B5CF6, #6366F1)" }}>
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Hours</div>
                      <div className="text-lg font-bold" style={{ color: "var(--color-primary)" }}>
                        {COMPANY.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl text-white transition-all hover:-translate-y-1 w-full"
                  style={{ background: "#25D366", boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)" }}>
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214459.4859485416!2d-96.95968!3d32.8205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea1cb15c39e8d%3A0x1aef1108a26d7305!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT - Form */}
            <div className="rounded-3xl p-8 md:p-10"
              style={{ background: "white", boxShadow: "0 30px 80px rgba(0,0,0,0.08)" }}>
              
              {!submitted ? (
                <>
                  <h3 className="text-3xl font-extrabold mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
                    Send Us A Message
                  </h3>
                  <p className="text-gray-500 mb-8">We respond within 2 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Smith" className={inputClass("name")} />
                      {errors.name && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(555) 123-4567" maxLength={14} className={inputClass("phone")} />
                        {errors.phone && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-gray-400 text-xs">(optional)</span>
                        </label>
                        <input type="email" value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="you@email.com" className={inputClass("email")} />
                        {errors.email && <p className="mt-2 text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select value={formData.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none bg-white">
                        <option>General Inquiry</option>
                        <option>Roof Inspection</option>
                        <option>Roof Replacement</option>
                        <option>Roof Repair</option>
                        <option>Storm Damage</option>
                        <option>Commercial Roofing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us how we can help..." rows="4"
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-colors resize-none" />
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200 flex items-start gap-2">
                        <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />{submitError}
                      </div>
                    )}

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center !py-4 text-lg disabled:opacity-70">
                      {loading ? (<><Loader2 size={20} className="animate-spin" />Sending...</>) : (<>Send Message <ArrowRight size={20} /></>)}
                    </button>
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
                    Message Sent! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6">We'll get back to you within 2 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({name:"",phone:"",email:"",address:"",service:"General Inquiry",message:""}); }}
                    className="text-sm text-gray-500 underline">Send another message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}