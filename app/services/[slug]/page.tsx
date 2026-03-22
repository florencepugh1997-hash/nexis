'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const pricingData: Record<string, {
    title: string;
    description: string;
    tiers: {
        name: string;
        price: string;
        description: string;
        features: string[];
        buttonText: string;
        isPopular?: boolean;
        isBestValue?: boolean;
    }[];
}> = {
    'web-development': {
        title: 'Web & UI/UX Development',
        description: 'High-performance websites and intuitive user interfaces tailored to your business needs.',
        tiers: [
            {
                name: 'Starter',
                price: '₦120,000',
                description: 'Perfect for small businesses and personal projects.',
                features: [
                    'Single-page Landing Page',
                    'Responsive Mobile Design',
                    'Basic SEO Optimization',
                    'Up to 3 Content Sections',
                    'Contact Form Integration',
                    '2 Rounds of Revisions',
                    '7-Day Delivery Time',
                ],
                buttonText: 'Get Started',
            },
            {
                name: 'Professional',
                price: '₦250,000',
                description: 'Comprehensive solution for growing businesses.',
                isBestValue: true,
                features: [
                    'Up to 5 Multi-page Website',
                    'Custom UI/UX Design',
                    'Advanced SEO Strategy',
                    'Speed & Performance Optimization',
                    'Service/Product Catalog',
                    '5 Rounds of Revisions',
                    '14-Day Delivery Time',
                    '3-Month Basic Support',
                ],
                buttonText: 'Most Popular',
            },
            {
                name: 'Growth',
                price: '₦450,000+',
                description: 'Enterprise-grade digital experiences.',
                features: [
                    'Full E-Commerce/Custom App',
                    'Premium Micro-Animations',
                    'Full CMS Integration',
                    'Advanced Security & SSL',
                    'Priority 24/7 Support',
                    'Unlimited Revisions',
                    '30-Day Delivery Time',
                    '6-Month Maintenance',
                ],
                buttonText: 'Scale Now',
            },
        ],
    },
    'branding-design': {
        title: 'Branding & Graphic Design',
        description: 'Visual identities that tell your story and resonate with your audience.',
        tiers: [
            {
                name: 'Starter',
                price: '₦45,000',
                description: 'Essential branding for new ventures.',
                features: [
                    'Text-based Logo Design',
                    '2 Initial Design Concepts',
                    'High-Resolution Source Files',
                    'Basic Business Card Layout',
                    '1 Round of Revision',
                    '3-Day Delivery Time',
                ],
                buttonText: 'Start Simple',
            },
            {
                name: 'Professional',
                price: '₦100,000',
                description: 'Complete visual identity system.',
                isPopular: true,
                features: [
                    'Custom Illustrated Logo',
                    '4 Creative Concepts',
                    'Full Brand Style Guide',
                    'Social Media Branding Kit',
                    'Brand Typography & Colors',
                    '3 Rounds of Revisions',
                    '7-Day Delivery Time',
                    'Print-Ready Graphics',
                ],
                buttonText: 'Most Popular',
            },
            {
                name: 'Growth',
                price: '₦180,000',
                description: 'The ultimate brand transformation.',
                features: [
                    'Complete Brand Overhaul',
                    'Custom Premium Illustrations',
                    'Full Stationery Design Set',
                    'Letterhead & Envelope Design',
                    'Premium 3D Mockups',
                    'Marketing Presentation Deck',
                    'Unlimited Revisions',
                    '14-Day Delivery Time',
                ],
                buttonText: 'Go Premium',
            },
        ],
    },
    'content-management': {
        title: 'Digital Content Management',
        description: 'Engaging storytelling and strategic management for your digital channels.',
        tiers: [
            {
                name: 'Starter',
                price: '₦60,000',
                description: 'Consistency for your primary channel.',
                features: [
                    '2 Professional Video Edits',
                    '8 Strategic Social Posts',
                    'Basic Audience Engagement',
                    '1 Social Media Platform',
                    'Monthly Performance Report',
                    '5-Day Content Turnaround',
                    'Standard Content Planning',
                ],
                buttonText: 'Monthly Starter',
            },
            {
                name: 'Professional',
                price: '₦130,000',
                description: 'High-impact multi-channel growth.',
                isBestValue: true,
                features: [
                    '5 Professional Video Edits',
                    '15 High-Quality Social Posts',
                    'Proactive Content Calendar',
                    '2 Major Social Platforms',
                    'Custom Branded Graphics',
                    'Bi-Weekly Strategy Calls',
                    '3-Day Content Turnaround',
                    'Hashtag & Keyword Research',
                ],
                buttonText: 'Best Value',
            },
            {
                name: 'Growth',
                price: '₦250,000',
                description: 'Market dominance through content.',
                features: [
                    'Unlimited Video Editing',
                    'Daily Engaging Social Posts',
                    'Paid Ad Campaign Management',
                    'Influencer Outreach Support',
                    'Daily Advanced Analytics',
                    '24-Hour Urgent Turnaround',
                    'Dedicated Content Manager',
                    'Full Community Management',
                ],
                buttonText: 'Growth Plan',
            },
        ],
    },
};

export default function PricingPage() {
    const { slug } = useParams();
    const service = pricingData[slug as string];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/" className="text-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 animate-fade-in">
                        <Link href="/#services" className="text-accent hover:opacity-80 transition-opacity mb-8 inline-flex items-center gap-2 text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Services
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            {service.title} <span className="text-accent">Pricing</span>
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-3xl leading-relaxed">
                            {service.description} Choose the plan that best fits your goals and budget. All plans are designed to deliver professional results for your brand.
                        </p>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.tiers.map((tier, index) => (
                            <div
                                key={tier.name}
                                className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 animate-scale-in relative ${tier.isPopular || tier.isBestValue
                                    ? 'border-accent bg-card shadow-xl shadow-accent/5 scale-105 z-10'
                                    : 'border-border bg-card/50 hover:border-accent/40'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {(tier.isPopular || tier.isBestValue) && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                        {tier.isPopular ? 'Most Popular' : 'Best Value'}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                                    <p className="text-foreground/50 text-sm mb-6">{tier.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                        {slug === 'content-management' && <span className="text-foreground/50 text-sm">/mo</span>}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-foreground/70 text-sm">
                                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href={`https://wa.me/2347040171691?text=Hi%20nexis,%20I'm%20interested%20in%20the%20${tier.name}%20plan%20for%20${service.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${tier.isPopular || tier.isBestValue
                                        ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20'
                                        : 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground'
                                        }`}
                                >
                                    {tier.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
