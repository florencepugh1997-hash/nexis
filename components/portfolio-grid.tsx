import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Web Design',
    image: '/ecommerce.jpeg',
  },
  {
    id: 2,
    title: 'Shipment Website',
    category: 'Web Development',
    image: '/tracking.jpeg',
  },
  {
    id: 3,
    title: 'Social Media Management',
    category: 'Social Media',
    image: '/socialmedia.jpeg',
  },
  {
    id: 4,
    title: 'Video Editing',
    category: 'Video Production',
    image: '/videoedit.jpeg',
  },
  {
    id: 5,
    title: 'Motion Designing',
    category: 'Motion Design',
    image: '/motiondes.jpeg',
  },
  {
    id: 6,
    title: 'Graphic Designing',
    category: 'Design',
    image: '/graphicdes.jpeg',
  },
];

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recent <span className="text-accent">Work</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Explore our collection of creative projects that showcase our expertise in design and development.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-card rounded-2xl group-hover:rounded-xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-medium mb-2">{item.category}</p>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
