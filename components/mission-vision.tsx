import { Target, Eye } from 'lucide-react';

export function MissionVision() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Intro Text */}
                    <div className="md:col-span-2 text-center mb-12 animate-fade-in">
                        <p className="text-foreground/70 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed italic">
                            "At <span className="text-accent font-bold">nexis</span>, we turn ideas into digital experiences. We combine web development, video editing, graphic design, and social media strategy to help brands and creators stand out online. From websites and videos to visuals and social media growth, we deliver creative and affordable solutions that make an impact."
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-xl hover:border-accent/40 transition-all duration-500 animate-slide-up">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Target className="w-8 h-8 text-accent" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Our <span className="text-accent">Mission</span>
                        </h2>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            To help businesses and creators grow online through practical, high-quality digital solutions in web development, design, video, and social media.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-card/30 border border-border/50 backdrop-blur-xl hover:border-accent/40 transition-all duration-500 animate-slide-up [animation-delay:0.2s]">
                        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Eye className="w-8 h-8 text-accent" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Our <span className="text-accent">Vision</span>
                        </h2>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            To be a trusted digital partner, known for creativity and innovation, helping clients turn ideas into meaningful online experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
