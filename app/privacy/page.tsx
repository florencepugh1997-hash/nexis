'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy <span className="text-accent">Policy</span></h1>

                    <div className="space-y-8 text-foreground/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                            <p>
                                Welcome to nexis. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Contact us via our contact form, email, or WhatsApp.</li>
                                <li>Enroll in our digital courses.</li>
                                <li>Request a quote for our services.</li>
                            </ul>
                            <p className="mt-4">
                                This information may include your name, email address, phone number, and any other details you choose to provide.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide and maintain our services.</li>
                                <li>Respond to your inquiries and provide customer support.</li>
                                <li>Process course enrollments and deliver educational content.</li>
                                <li>Communicate with you about updates, promotions, and new services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, please note that no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                            <p>
                                You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us at ezejustin792@gmail.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
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
