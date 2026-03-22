'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-section';
import { MissionVision } from '@/components/mission-vision';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8">
                        Crafting Digital <span className="text-accent">Excellence</span>
                    </h1>
                    <p className="text-foreground/60 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        At nexis, we turn ideas into digital experiences. We combine web development, video editing, graphic design, and social media strategy to help brands and creators stand out online.
                    </p>
                </div>

                <AboutSection />
                <MissionVision />

                {/* Story Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">The <span className="text-accent">nexis</span> Story</h2>
                        <div className="space-y-8 text-foreground/70 text-lg leading-relaxed text-left">
                            <p>
                                Founded on the principle that digital presence should be both functional and beautiful, nexis has grown into a specialized studio that understands the fine balance between art and technology.
                            </p>
                            <p>
                                Every project we undertake is a unique opportunity to push boundaries. We don't believe in one-size-fits-all solutions; we believe in tailored strategies that empower our clients to stand out in an increasingly crowded digital landscape.
                            </p>
                            <p>
                                Our commitment to our clients goes beyond just delivery. We build relationships based on trust, transparency, and a relentless pursuit of quality.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
