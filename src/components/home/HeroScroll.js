"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function HeroScroll() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const FRAME_COUNT = 36;
  const getFramePath = (index) => {
    const num = String(index + 1).padStart(2, "0");
    return `/frames/frame-${num}.webp`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const images = [];
    let loadedCount = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
          renderFrame(0);
        }
      };
      images.push(img);
    }

    const renderFrame = (index) => {
      const img = images[index];
      if (!img || !img.complete) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollTop = -rect.top;
      const maxScroll = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      
      setScrollProgress(progress);
      
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
      renderFrame(frameIndex);
    };

    const handleResize = () => {
      setCanvasSize();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // START content: visible 0-10%, fades out 10-20%
  const startContentOpacity = scrollProgress < 0.1 
    ? 1 
    : scrollProgress > 0.2 
      ? 0 
      : 1 - (scrollProgress - 0.1) / 0.1;

  // Scroll indicator: visible only at very start
  const indicatorOpacity = scrollProgress < 0.05 ? 1 : 0;

  // END content: appears at 88%, fully visible at 95%
  const endContentOpacity = scrollProgress < 0.88 
    ? 0 
    : scrollProgress > 0.95 
      ? 1 
      : (scrollProgress - 0.88) / 0.07;

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white">
        
        {/* Canvas — Pure Image */}
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

        {/* Loading Screen */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30"
            style={{ background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)" }}>
            <div className="mb-8">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-extrabold text-white text-4xl animate-float"
                style={{ background: "linear-gradient(135deg, #FF4D2E, #FFB800)" }}>
                R
              </div>
            </div>
            <div className="text-white text-xl font-bold mb-2">Loading Experience</div>
            <div className="text-white/50 text-sm mb-6">Preparing your transformation</div>
            <div className="w-72 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full transition-all duration-300 rounded-full"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg, #FF4D2E, #FFB800)" }}
              />
            </div>
            <div className="text-white/70 text-sm mt-3 font-mono">{progress}%</div>
          </div>
        )}

        {/* ========== START CONTENT (Beginning of scroll) ========== */}
        <div 
          className="absolute inset-0 flex items-end justify-center z-10 px-4 pb-16 md:pb-20 pointer-events-none transition-opacity duration-200"
          style={{ opacity: startContentOpacity }}
        >
          <div className="max-w-3xl w-full pointer-events-auto">
            
            {/* Glass Card Container */}
            <div className="rounded-3xl p-6 md:p-10 text-center text-white"
              style={{
                background: "rgba(10, 14, 39, 0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)"
              }}>
              
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full"
                style={{ background: "rgba(255, 184, 0, 0.15)", border: "1px solid rgba(255, 184, 0, 0.3)" }}>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <span className="text-xs font-semibold">
                  {COMPANY.rating}/5 · {COMPANY.reviews} Reviews
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}>
                From Damaged To{" "}
                <span className="gradient-text">Stunning</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm md:text-lg mb-6 text-white/80 max-w-xl mx-auto">
                Premium roof transformations by licensed experts
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href="/free-inspection" className="btn-primary !text-sm md:!text-base">
                  Get FREE Inspection <ArrowRight size={16} />
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary !text-sm md:!text-base">
                  <Phone size={14} /> {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: indicatorOpacity }}
        >
          <div className="flex flex-col items-center gap-2"
            style={{
              background: "rgba(10, 14, 39, 0.7)",
              backdropFilter: "blur(10px)",
              padding: "12px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.15)"
            }}>
            <div className="flex items-center gap-3 text-white">
              <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
              <div className="w-5 h-8 rounded-full border-2 border-white/80 flex items-start justify-center p-1">
                <div className="w-0.5 h-1.5 rounded-full bg-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* ========== END CONTENT (Transformation complete) ========== */}
        <div 
          className="absolute inset-0 flex items-end justify-center z-10 px-4 pb-16 md:pb-20 pointer-events-none transition-opacity duration-500"
          style={{ opacity: endContentOpacity }}
        >
          <div className="max-w-4xl w-full pointer-events-auto">
            
            {/* Success Glass Card */}
            <div className="rounded-3xl p-6 md:p-10 text-center text-white"
              style={{
                background: "rgba(10, 14, 39, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 184, 0, 0.3)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)"
              }}>
              
              {/* Success Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full"
                style={{ background: "rgba(34, 197, 94, 0.2)", border: "1px solid rgba(34, 197, 94, 0.4)" }}>
                <CheckCircle2 size={14} className="text-green-400" />
                <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">
                  Transformation Complete
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}>
                This Could Be{" "}
                <span className="gradient-text">Your Home</span>
              </h2>

              <p className="text-sm md:text-lg mb-6 text-white/80 max-w-xl mx-auto">
                Join {COMPANY.projects} happy homeowners who transformed their roofs with us
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 max-w-2xl mx-auto">
                <div className="rounded-2xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text">15+</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">Years</div>
                </div>
                <div className="rounded-2xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text">{COMPANY.projects}</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">Roofs Done</div>
                </div>
                <div className="rounded-2xl p-3 md:p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text">24/7</div>
                  <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mt-1">Support</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href="/free-inspection" className="btn-primary !text-sm md:!text-base">
                  Start My Transformation <ArrowRight size={16} />
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="btn-secondary !text-sm md:!text-base">
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}