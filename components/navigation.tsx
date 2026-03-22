'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50">
            <Image src="/nexora.png" alt="nexis logo" width={32} height={32} className="object-contain" />
            <span className="text-xl font-semibold text-accent lowercase tracking-wide">nexis</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium">Home</Link>
            <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium">About</Link>
            <Link href="/services" className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium">Services</Link>
            <Link href="/courses" className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium">Digital Course</Link>
            <Link href="/contact" className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium">Contact Us</Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/2347040171691?text=Hi%20nexis,%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            title="Toggle Menu"
            className="md:hidden p-2 text-foreground/70 hover:text-accent transition-colors z-50"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-background border-t border-border transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
      >
        <div className="flex flex-col px-4 py-8 space-y-6 bg-background h-full h-[calc(100vh-5rem)] overflow-y-auto">
          <Link href="/" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-accent transition-colors">Home</Link>
          <Link href="/about" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-accent transition-colors">About</Link>
          <Link href="/services" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-accent transition-colors">Services</Link>
          <Link href="/courses" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-accent transition-colors">Digital Course</Link>
          <Link href="/contact" onClick={closeMobileMenu} className="text-lg font-medium text-foreground hover:text-accent transition-colors">Contact Us</Link>

          <div className="pt-6 border-t border-border">
            <a
              href="https://wa.me/2347040171691?text=Hi%20nexis,%20I'm%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex justify-center w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
