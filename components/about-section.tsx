import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '✨',
    title: 'Web Design',
    description: 'Beautiful, responsive websites that captivate and convert your audience.',
    slug: 'web-development',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive digital experiences.',
    slug: 'web-development',
  },
  {
    icon: '💻',
    title: 'Development',
    description: 'Full-stack development with modern technologies and best practices.',
    slug: 'web-development',
  },
  {
    icon: '🎯',
    title: 'Branding',
    description: 'Strategic brand identity that resonates with your target audience.',
    slug: 'branding-design',
  },
  {
    icon: '🎬',
    title: 'Video Editing',
    description: 'Professional video editing that brings your story to life with cinematic quality.',
    slug: 'content-management',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Strategic social media content and management to grow your online presence.',
    slug: 'content-management',
  },
  {
    icon: '🖌️',
    title: 'Graphic Design',
    description: 'Eye-catching visuals and graphics that communicate your brand message effectively.',
    slug: 'branding-design',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 items-center text-center mb-20 max-w-3xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">nexis</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              We're a creative digital studio dedicated to crafting exceptional digital experiences. With expertise spanning design, development, and strategy, we transform your vision into reality.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Our team combines artistic creativity with technical excellence to deliver solutions that not only look stunning but also perform exceptionally.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-xl bg-background border border-border hover:border-accent transition-all duration-300 hover:bg-card animate-slide-up block"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-foreground font-bold mb-3 text-lg group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="text-accent text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View Pricing &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
