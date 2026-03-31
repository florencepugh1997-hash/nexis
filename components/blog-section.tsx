'use client';

import Link from 'next/link';
import { blogs } from '@/lib/blog-data';
import { ArrowRight } from 'lucide-react';

export function BlogSection() {
  // Get the first 3 blogs
  const topBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Latest <span className="text-accent">Insights</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Practical advice, proven strategies, and step-by-step guides to grow your business online faster.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group"
          >
            More blogs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topBlogs.map((blog) => (
            <div key={blog.slug} className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className="text-xs font-semibold text-accent tracking-wider uppercase mb-4">
                  {blog.category}
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

        {/* Mobile More Blogs Link */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group"
          >
            More blogs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
