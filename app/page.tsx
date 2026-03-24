'use client';

import { Navigation } from '@/components/navigation';
import { CinematicHero } from '@/components/ui/cinematic-hero';
import { HeroSection } from '@/components/hero-section';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { AboutSection } from '@/components/about-section';
import { MissionVision } from '@/components/mission-vision';
import { TechTools } from '@/components/tech-tools';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <CinematicHero />
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioGrid />
        <AboutSection />
        <MissionVision />
        <TechTools />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
