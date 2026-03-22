'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'What kind of websites do you specialize in?',
        answer: "We specialize in high-performance e-commerce platforms, luxury brand portfolios, and custom web applications. Whether you're a startup or an established enterprise, we build digital experiences that are fast, secure, and visually stunning.",
    },
    {
        question: 'Do you offer other services besides web design?',
        answer: 'Absolutely. We are a full-service digital studio. Beyond web design, we offer professional video editing, social media management, motion design, graphic design, and brand strategy to help your business grow across all platforms.',
    },
    {
        question: 'Will you help me after my website goes live?',
        answer: "Yes, we don't just build and leave. We provide ongoing support, maintenance, and optimization services to ensure your website continues to perform at its best as your business evolves.",
    },
    {
        question: 'What do you need from me to get started?',
        answer: "To get started, we'll need a clear understanding of your goals, target audience, and any existing brand assets. Don't worry if you don't have everything ready—we'll guide you through our discovery process to define the perfect strategy.",
    },
    {
        question: 'What else do I need to know?',
        answer: "Our focus is on quality over quantity. We take on a limited number of projects to ensure each client receives our full attention and a product that truly stands out in the digital landscape. Let's create something extraordinary together.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        What does our <span className="text-accent">client need to know?</span>
                    </h2>
                    <p className="text-foreground/60 text-lg">
                        Find answers to common questions about our process, services, and how we can help your business succeed.
                    </p>
                </div>

                {/* FAQ list */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl border transition-all duration-300 ${openIndex === index
                                ? 'border-accent bg-card shadow-lg shadow-accent/5'
                                : 'border-border bg-card/50 hover:border-accent/40'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex items-center justify-between gap-4"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-accent' : 'text-foreground'
                                    }`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px] pb-6 px-6 opacity-100' : 'max-h-0 px-6 opacity-0'
                                    }`}
                            >
                                <p className="text-foreground/70 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
