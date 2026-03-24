"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const INJECTED_STYLES = `
  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-hero {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-gradient-hero {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
  }

  .btn-hero {
      background: linear-gradient(180deg, #20C9C9 0%, #17A2A2 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.2), 0 12px 24px -4px rgba(32, 201, 201, 0.4), inset 0 1px 1px rgba(255,255,255,0.3);
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-hero:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 6px 12px -2px rgba(0,0,0,0.3), 0 20px 32px -6px rgba(32, 201, 201, 0.5), inset 0 1px 1px rgba(255,255,255,0.3);
  }

  .hero-card {
      background: linear-gradient(145deg, #0A2F2F 0%, #051414 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .progress-ring-hero {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }

  .floating-badge-hero {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.15),
          0 25px 50px -12px rgba(0, 0, 0, 0.8);
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
    onComplete?: () => void;
}

export function CinematicHero({
    onComplete,
    className,
    ...props
}: CinematicHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(".hero-tagline-1", { autoAlpha: 0, y: 60, filter: "blur(15px)" });
            gsap.set(".hero-tagline-2", { autoAlpha: 0, y: 40, filter: "blur(15px)" });
            gsap.set(".hero-card-container", { autoAlpha: 0, y: 100, scale: 0.85 });
            gsap.set(".hero-badge", { autoAlpha: 0, y: 30, scale: 0.8 });
            gsap.set(".hero-cta-section", { autoAlpha: 0, y: 40 });

            // Auto-playing timeline
            const tl = gsap.timeline({ delay: 0.3 });

            tl
                // Phase 1: Show taglines
                .to(".hero-tagline-1", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "expo.out" })
                .to(".hero-tagline-2", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "expo.out" }, "-=0.6")

                // Phase 2: Bring in the card
                .to(".hero-card-container", { autoAlpha: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.out" }, "-=0.4")

                // Phase 3: Animate progress ring and counter
                .to(".progress-ring-hero", { strokeDashoffset: 60, duration: 1.5, ease: "power3.inOut" }, "-=0.8")
                .to(".hero-counter", { innerHTML: 100, snap: { innerHTML: 1 }, duration: 1.5, ease: "expo.out" }, "<")

                // Phase 4: Badges
                .to(".hero-badge", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" }, "-=1")

                // Phase 5: CTA section
                .to(".hero-cta-section", { autoAlpha: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.5");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn("fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-[#0a0a0a] text-white antialiased", className)}
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            {...props}
        >
            <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
            <div className="film-grain" aria-hidden="true" />
            <div className="bg-grid-hero absolute inset-0 pointer-events-none opacity-50" aria-hidden="true" />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">

                {/* Taglines */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="hero-tagline-1 text-gradient-hero text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-2">
                        Creative Digital
                    </h1>
                    <h1 className="hero-tagline-2 text-gradient-hero text-4xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tighter">
                        Experiences
                    </h1>
                </div>

                {/* Card with phone mockup */}
                <div className="hero-card-container hero-card rounded-3xl md:rounded-[2.5rem] w-full max-w-3xl p-6 md:p-10 mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

                        {/* Left: Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight">Innovation, Redefined.</h3>
                            <p className="text-[#20c9c9]/70 text-sm md:text-base leading-relaxed">
                                <span className="text-white font-semibold">Nexis</span> empowers your business with cutting-edge design, motion graphics, and development solutions.
                            </p>
                        </div>

                        {/* Right: Mini phone mockup with progress */}
                        <div className="relative flex items-center justify-center">
                            <div className="relative w-36 h-36 md:w-44 md:h-44">
                                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                                    <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                                    <circle className="progress-ring-hero" cx="50%" cy="50%" r="40%" fill="none" stroke="#20c9c9" strokeWidth="10" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="hero-counter text-3xl md:text-4xl font-extrabold tracking-tighter">0</span>
                                    <span className="text-[8px] text-[#20c9c9] uppercase tracking-[0.1em] font-bold mt-0.5">% Excellence</span>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="hero-badge absolute -top-4 -left-6 md:-left-16 floating-badge-hero rounded-xl p-2.5 md:p-3 flex items-center gap-2">
                                <span className="text-sm" aria-hidden="true">✨</span>
                                <div>
                                    <p className="text-white text-[10px] md:text-xs font-bold">Pixel Perfect</p>
                                    <p className="text-[#20c9c9]/50 text-[8px] md:text-[10px]">Design excellence</p>
                                </div>
                            </div>

                            <div className="hero-badge absolute -bottom-4 -right-6 md:-right-16 floating-badge-hero rounded-xl p-2.5 md:p-3 flex items-center gap-2">
                                <span className="text-sm" aria-hidden="true">🚀</span>
                                <div>
                                    <p className="text-white text-[10px] md:text-xs font-bold">Cutting Edge</p>
                                    <p className="text-[#20c9c9]/50 text-[8px] md:text-[10px]">Modern tech stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="hero-cta-section text-center">
                    <p className="text-neutral-400 text-sm md:text-base mb-6 max-w-md mx-auto">
                        Transform your vision into reality with our cutting-edge design and development solutions.
                    </p>
                    <button
                        onClick={() => onComplete?.()}
                        className="btn-hero flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-2xl group mx-auto focus:outline-none focus:ring-2 focus:ring-[#20c9c9] focus:ring-offset-2"
                    >
                        <span className="text-lg md:text-xl font-bold tracking-tight">Get Started</span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
