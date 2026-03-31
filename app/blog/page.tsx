import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { blogs } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | nexis',
  description: 'Expert insights, web design tips, and business growth strategies from nexis digital studio.',
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-20 text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-accent">Blog</span>
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Insights, strategies, and practical guides to help your business grow online and dominate your market.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {blogs.map((blog, index) => (
              <div 
                key={blog.slug} 
                className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-accent tracking-wider uppercase">
                      {blog.category}
                    </div>
                    <div className="text-xs text-foreground/50">
                      {blog.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-foreground/70 mb-8 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-foreground/50">{blog.readTime}</span>
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
