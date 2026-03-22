'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hi nexis! My name is ${formData.name}. I'm interested in ${formData.service}. %0A%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/2347040171691?text=${text}`, '_blank');
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `New Inquiry from ${formData.name} - ${formData.service}`;
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;
        window.location.href = `mailto:ezejustin792@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <div className="animate-fade-in">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8">
                                Let's <span className="text-accent">Connect.</span>
                            </h1>
                            <p className="text-foreground/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                                Have a project in mind or want to learn more about our courses? We're here to help you turn your digital vision into reality.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Chat with us</h3>
                                        <p className="text-foreground/50">Available Mon-Fri, 9am-6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                        <Send className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Send an email</h3>
                                        <p className="text-foreground/50">ezejustin792@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Card */}
                        <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl backdrop-blur-sm animate-scale-in shadow-2xl shadow-accent/5">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none"
                                    >
                                        <option>Web Development</option>
                                        <option>Branding & Design</option>
                                        <option>Content Management</option>
                                        <option>Digital Course</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    <button
                                        onClick={handleWhatsAppSubmit}
                                        className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 active:scale-95"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        Via WhatsApp
                                    </button>
                                    <button
                                        onClick={handleEmailSubmit}
                                        className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-secondary text-foreground font-bold hover:bg-border transition-all border border-border active:scale-95"
                                    >
                                        <Send className="w-5 h-5" />
                                        Via Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
