'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12">Terms & <span className="text-accent">Conditions</span></h1>

                    <div className="space-y-8 text-foreground/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the nexis website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Services and Courses</h2>
                            <p>
                                nexis provides digital services including web development, graphic design, video editing, and social media management. We also offer digital courses. All services and courses are subject to availability and our project/enrollment capacity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and course materials, is the intellectual property of nexis or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment and Refunds</h2>
                            <p>
                                Payments for services and course enrollments must be made in full as per the agreed-upon pricing. Given the nature of digital services and educational products, refunds are handled on a case-by-case basis and are generally not provided once service delivery or course access has commenced.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                            <p>
                                nexis will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website, services, or course materials.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
                            <p>
                                These Terms & Conditions shall be governed by and construed in accordance with the laws of Nigeria.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms & Conditions, please contact us at ezejustin792@gmail.com or via WhatsApp at 07040171691.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-border">
                            <p className="text-sm">
                                Last Updated: March 21, 2026
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
