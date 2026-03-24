'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/ui/cobe-globe').then(mod => ({ default: mod.Globe })), {
  ssr: false,
  loading: () => (
    <div className="aspect-square w-full max-w-lg rounded-full bg-accent/5 animate-pulse" />
  ),
});

const markers = [
  { id: "design", location: [6.5244, 3.3792] as [number, number], label: "Web Design" },
  { id: "branding", location: [40.7128, -74.006] as [number, number], label: "Branding" },
  { id: "motion", location: [51.5074, -0.1278] as [number, number], label: "Motion Graphics" },
  { id: "dev", location: [25.2048, 55.2708] as [number, number], label: "Development" },
  { id: "uiux", location: [35.6762, 139.6503] as [number, number], label: "UI/UX" },
  { id: "strategy", location: [-33.8688, 151.2093] as [number, number], label: "Digital Strategy" },
];

const arcs = [
  {
    id: "design-motion",
    from: [6.5244, 3.3792] as [number, number],
    to: [51.5074, -0.1278] as [number, number],
  },
  {
    id: "design-branding",
    from: [6.5244, 3.3792] as [number, number],
    to: [40.7128, -74.006] as [number, number],
  },
  {
    id: "motion-dev",
    from: [51.5074, -0.1278] as [number, number],
    to: [25.2048, 55.2708] as [number, number],
  },
  {
    id: "dev-uiux",
    from: [25.2048, 55.2708] as [number, number],
    to: [35.6762, 139.6503] as [number, number],
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgb(32, 201, 201) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, rgb(32, 201, 201) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-8 animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                welcome to nexis ✨
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              Creative Digital <br />
              <span className="text-accent">Experiences</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We craft beautiful, innovative digital solutions that transform your vision into reality. From concept to execution, we bring your ideas to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
              >
                View Our Work
              </Link>
              <a
                href="https://wa.me/2347040171691?text=Hi%20nexis,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Right - 3D Globe */}
          <div className="hidden lg:flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg">
              {/* Teal glow behind globe */}
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgb(32, 201, 201) 0%, transparent 60%)',
                  filter: 'blur(60px)',
                }}
              />
              <Globe
                markers={markers}
                arcs={arcs}
                markerColor={[0.13, 0.79, 0.79]}
                baseColor={[0.15, 0.15, 0.2]}
                arcColor={[0.13, 0.79, 0.79]}
                glowColor={[0.05, 0.15, 0.15]}
                dark={1}
                mapBrightness={6}
                markerSize={0.03}
                markerElevation={0.02}
                speed={0.002}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-accent/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
