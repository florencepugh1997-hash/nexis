export function CTASection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready to Start Your Next <span className="text-accent">Project?</span>
        </h2>
        <p className="text-foreground/60 text-xl mb-12 leading-relaxed">
          Whether you have a specific project in mind or want to explore possibilities, we'd love to hear from you. Let's create something extraordinary together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="https://wa.me/2347040171691?text=Hi%20nexis,%20I'm%20interested%20in%20discussing%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 animate-scale-in"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:ezejustin792@gmail.com"
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 animate-scale-in inline-block"
            style={{ animationDelay: '0.1s' }}
          >
            Send Email
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="animate-slide-up" style={{ animationDelay: '0s' }}>
            <div className="text-accent font-semibold mb-2">WhatsApp</div>
            <a
              href="https://wa.me/2347040171691"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              07040171691
            </a>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-accent font-semibold mb-2">Email</div>
            <a
              href="mailto:ezejustin792@gmail.com"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              ezejustin792@gmail.com
            </a>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-accent font-semibold mb-2">Response Time</div>
            <p className="text-foreground/70">Within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
