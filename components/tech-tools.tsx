import Image from 'next/image';

const tools = [
    { name: 'HTML5', src: '/html-removebg-preview.png' },
    { name: 'Node.js', src: '/node-removebg-preview.png' },
    { name: 'Tailwind CSS', src: '/tailwind-removebg-preview.png' },
    { name: 'Next.js', src: '/next.png' },
    { name: 'React', src: '/react.png' },
    { name: 'Canva', src: '/canva-removebg-preview.png' },
    { name: 'Capcut', src: '/capcut-removebg-preview.png' },
];

export function TechTools() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-border/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground/80 lowercase tracking-tight">
                        Tech Tools <span className="text-accent">We Use</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    {tools.map((tool, index) => (
                        <div
                            key={tool.name}
                            className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transition-opacity duration-500 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Image
                                src={tool.src}
                                alt={tool.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
