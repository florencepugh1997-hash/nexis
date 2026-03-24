'use client';

import { useState, useEffect } from 'react';
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
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const hasSeen = localStorage.getItem('onboarding_seen');
    if (hasSeen) {
      setShowOnboarding(false);
    }
  }, []);

  const handleComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboarding_seen', 'true');
  };

  return (
    <>
      {showOnboarding ? (
        <CinematicHero onComplete={handleComplete} />
      ) : (
        <div className="animate-in fade-in duration-1000">
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
        </div>
      )}
    </>
  );
}
