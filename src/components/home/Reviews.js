"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Dallas, TX",
    rating: 5,
    text: "Absolutely incredible work! Our roof was destroyed after the hailstorm, and they handled everything — including the insurance claim. The team completed the full replacement in just one day. Highly recommend!",
    service: "Roof Replacement",
    initial: "SM"
  },
  {
    name: "Michael Rodriguez",
    location: "Plano, TX",
    rating: 5,
    text: "Most professional roofing team I've ever worked with. They were transparent about pricing, finished on schedule, and left my property spotless. The new roof looks amazing.",
    service: "Storm Damage",
    initial: "MR"
  },
  {
    name: "Jennifer Lee",
    location: "Frisco, TX",
    rating: 5,
    text: "Got a free inspection and they found damage I didn't even know existed. The repair was done quickly, affordably, and with incredible quality. Five stars all around!",
    service: "Roof Repair",
    initial: "JL"
  },
  {
    name: "David Kumar",
    location: "McKinney, TX",
    rating: 5,
    text: "Best roofing company in the area. Clean, fast, professional installation. My new roof looks incredible and the lifetime warranty gives me complete peace of mind.",
    service: "Roof Replacement",
    initial: "DK"
  },
  {
    name: "Lisa Thompson",
    location: "Allen, TX",
    rating: 5,
    text: "Responded within 30 minutes of my emergency call. Same-day repair saved us from a major water damage disaster. Truly a 5-star company!",
    service: "Emergency Repair",
    initial: "LT"
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-20 left-10 text-9xl opacity-5"
        style={{ color: "var(--color-accent)" }}>
        <Quote size={200} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="badge mb-4">
            <span>★</span> Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-[1.05]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}>
            Loved By <span className="gradient-text">500+</span><br/>
            Happy Homeowners
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            Don't just take our word for it — hear from our customers.
          </p>
        </div>

        {/* Review Card */}
        <div className="relative">
          <div className="rounded-3xl p-8 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #FFF 0%, #FAFAFA 100%)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
            
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} style={{ color: "var(--color-accent)" }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={22} fill="#FFB800" stroke="#FFB800" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium"
              style={{ fontFamily: "var(--font-body)" }}>
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg"
                  style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                  {review.initial}
                </div>
                <div>
                  <div className="font-extrabold text-lg" style={{ color: "var(--color-primary)" }}>
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
              </div>
              
              <div className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ background: "rgba(255,77,46,0.1)", color: "var(--color-accent)" }}>
                {review.service}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "32px" : "8px",
                    background: i === current ? "var(--color-accent)" : "rgba(0,0,0,0.15)"
                  }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <ChevronLeft size={20} style={{ color: "var(--color-primary)" }} />
              </button>
              <button onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 text-white"
                style={{ background: "linear-gradient(135deg, #FF4D2E, #FF7A5C)" }}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-extrabold" style={{ color: "var(--color-primary)" }}>4.9</div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">300+ Reviews</div>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-sm font-semibold text-gray-700">Verified on Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}