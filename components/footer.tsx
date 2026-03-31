import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4 lowercase">nexis</h3>
            <p className="text-foreground/60 text-sm">
              Creating beautiful digital experiences that inspire and innovate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Digital Course
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/branding-design" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Branding & Graphics
                </Link>
              </li>
              <li>
                <Link href="/services/content-management" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Content Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/2347040171691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors text-sm block"
              >
                WhatsApp
              </a>
              <a
                href="mailto:ezejustin792@gmail.com"
                className="text-foreground/60 hover:text-accent transition-colors text-sm block"
              >
                Email
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-accent transition-colors text-sm block"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              © {currentYear} nexis. All rights reserved.
            </p>
            <div className="flex gap-6 text-foreground/50 text-sm">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
