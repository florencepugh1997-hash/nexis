'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TechTools } from '@/components/tech-tools';
import { Code, Palette, Share2, ArrowRight } from 'lucide-react';

const colorServices = [
    {
        title: 'Web & UI/UX Development',
        description: 'Transform your digital presence with high-performance websites and intuitive user interfaces. We specialize in Next.js, React, and modern UI solutions.',
        icon: <Code className="w-12 h-12" />,
        color: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        accent: 'text-blue-500',
        slug: 'web-development',
        gradient: 'from-blue-600/20 to-cyan-500/20',
    },
    {
        title: 'Branding & Graphic Design',
        description: 'Craft a visual identity that speaks volumes. From professional logos to complete brand systems, we make sure your visual story is unforgettable.',
        icon: <Palette className="w-12 h-12" />,
        color: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        accent: 'text-purple-500',
        slug: 'branding-design',
        gradient: 'from-purple-600/20 to-pink-500/20',
    },
    {
        title: 'Digital Content Management',
        description: 'Engage your audience with professional video editing and platform-specific social media strategies that drive growth and conversions.',
        icon: <Share2 className="w-12 h-12" />,
        color: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        accent: 'text-orange-500',
        slug: 'content-management',
        gradient: 'from-orange-600/20 to-red-500/20',
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Expert <span className="text-accent">Services</span>
                        </h1>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto">
                            We provide comprehensive digital solutions designed to help your business scale and succeed in the modern economy.
                        </p>
                    </div>

                    {/* Color Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                        {colorServices.map((service, index) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={`group relative p-10 rounded-[2.5rem] border ${service.border} ${service.color} overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] animate-slide-up flex flex-col`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className={`relative z-10 mb-8 p-4 rounded-2xl bg-background/50 backdrop-blur-sm inline-block w-fit ${service.accent}`}>
                                    {service.icon}
                                </div>

                                <div className="relative z-10 flex-grow">
                                    <h2 className="text-3xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center gap-2 font-bold group-hover:gap-4 transition-all duration-300">
                                    <span className={service.accent}>View Plans & Pricing</span>
                                    <ArrowRight className={`w-5 h-5 ${service.accent}`} />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <TechTools />
                </div>
            </main>

            <Footer />
        </div>
    );
}
