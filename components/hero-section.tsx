import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Background gradient circles - subtle decorative elements */}
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

          {/* Right - Code Editor Visual */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-secondary rounded-lg overflow-hidden border border-border shadow-2xl shadow-accent/10">
              {/* Editor Header */}
              <div className="bg-secondary/80 border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="text-xs text-foreground/50">nexis-creative.jsx</div>
                <div className="w-4"></div>
              </div>

              {/* Line Numbers and Code */}
              <div className="overflow-hidden">
                <pre className="p-6 text-sm font-mono text-foreground/80 bg-secondary">
                  <code>{`export const createMagic = () => {
  const vision = captureYourIdea();
  const design = craftBeautifully(vision);
  const code = buildWithPrecision(design);
  
  return transformIntoReality(code)
    .withInnovation()
    .atScale();
};`}</code>
                </pre>
              </div>

              {/* Syntax Highlight Accent */}
              <div className="absolute top-0 right-0 w-1 h-32 bg-gradient-to-b from-accent/50 to-transparent"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 bg-accent blur-3xl"></div>
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
