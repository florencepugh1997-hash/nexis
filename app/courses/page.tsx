'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BookOpen, Users, Clock, ArrowRight } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: 'HTML & CSS Basics for Beginners',
        description: 'Learn to build responsive websites from scratch using HTML & CSS. By the end, you’ll be able to create simple websites and landing pages.',
        audience: 'Beginners wanting to start web development',
        price: '7,500',
        duration: '4 Weeks',
        color: 'from-orange-500/20 to-red-500/20',
    },
    {
        id: 2,
        title: 'React for Web Development',
        description: 'Step-by-step course on building interactive web apps with React. Includes components, state, props, and routing.',
        audience: 'Junior developers aiming to make dynamic websites',
        price: '15,000',
        duration: '6 Weeks',
        color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        id: 3,
        title: 'CapCut Video Editing Essentials',
        description: 'Master video trimming, transitions, effects, and music integration using CapCut. Perfect for social media content creation.',
        audience: 'Aspiring video editors & social media creators',
        price: '5,000',
        duration: '2 Weeks',
        color: 'from-indigo-500/20 to-purple-500/20',
    },
    {
        id: 4,
        title: 'Graphic Design with Canva',
        description: 'Learn to design social media posts, logos, banners, and more with Canva. Covers templates, color schemes, and branding.',
        audience: 'Beginners who want to create professional visuals fast',
        price: '5,500',
        duration: '3 Weeks',
        color: 'from-cyan-500/20 to-teal-500/20',
    },
    {
        id: 5,
        title: 'Social Media Management 101',
        description: 'Understand content planning, scheduling, analytics, and engagement strategies to grow social media accounts.',
        audience: 'Small business owners & aspiring social media managers',
        price: '6,500',
        duration: '4 Weeks',
        color: 'from-pink-500/20 to-rose-500/20',
    },
    {
        id: 6,
        title: 'Portfolio Website in React',
        description: 'Build a professional personal portfolio website to showcase your skills, projects, and contact info.',
        audience: 'Developers & creatives who need an online portfolio',
        price: '12,000',
        duration: '3 Weeks',
        color: 'from-emerald-500/20 to-green-500/20',
    },
    {
        id: 7,
        title: 'Branding & Content Creation Mastery',
        description: 'Learn how to create consistent branding across social media using graphics, videos, and captions that convert.',
        audience: 'Entrepreneurs, content creators, and freelancers',
        price: '8,500',
        duration: '5 Weeks',
        color: 'from-purple-500/20 to-violet-500/20',
    },
    {
        id: 8,
        title: 'Advanced CapCut Techniques',
        description: 'Create cinematic videos, motion graphics, slow-motion effects, and storytelling techniques for social media.',
        audience: 'Intermediate video editors',
        price: '7,500',
        duration: '3 Weeks',
        color: 'from-red-500/20 to-orange-500/20',
    },
    {
        id: 9,
        title: 'Interactive Web Apps with React & API',
        description: 'Build real-world web applications that fetch and display data from APIs. Covers React hooks and state management.',
        audience: 'Developers ready to level up their skills',
        price: '18,000',
        duration: '6 Weeks',
        color: 'from-blue-600/20 to-indigo-600/20',
    },
    {
        id: 10,
        title: 'Social Media Growth & Monetization',
        description: 'Strategies to grow Instagram, TikTok, and Facebook organically and monetize content for income.',
        audience: 'Influencers & social media strategists',
        price: '10,000',
        duration: '4 Weeks',
        color: 'from-yellow-500/20 to-amber-500/20',
    },
];

export function CourseCard({ course, index }: { course: any; index: number }) {
    return (
        <div
            className="group relative p-8 rounded-3xl bg-card/40 border border-border/50 hover:border-accent/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] flex flex-col h-full animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

            <div className="relative z-10 flex-grow">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                    {course.title}
                </h3>

                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    {course.description}
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-xs text-foreground/50">
                        <Users className="w-4 h-4 text-accent" />
                        <span>Target: {course.audience}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-foreground/50">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>Duration: {course.duration}</span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-auto">
                <div className="flex items-end justify-between gap-4 pt-6 border-t border-border/50">
                    <div>
                        <span className="block text-xs text-foreground/40 uppercase tracking-widest font-bold mb-1">Tuition</span>
                        <span className="text-2xl font-bold text-foreground">₦{course.price}</span>
                    </div>
                    <a
                        href={`https://wa.me/2347040171691?text=Hi%20nexis,%20I'm%20interested%20in%20enrolling%20in%20the%20${course.title}%20course.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:shadow-lg hover:shadow-accent/20 transition-all active:scale-95"
                    >
                        Enroll Now <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Digital <span className="text-accent">Academy</span>
                        </h1>
                        <p className="text-foreground/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Unlock your creative potential with our industry-led courses. Practical skills, real-world projects, and expert mentorship to help you scale your digital career.
                        </p>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
