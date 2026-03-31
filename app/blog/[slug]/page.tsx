import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { blogs } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return { title: 'Post Not Found | nexis' };

  return {
    title: `${blog.title} | nexis Blog`,
    description: blog.excerpt,
  };
}

function renderContent(content: string) {
  // A simple parser for basic markdown formatting used in blog-data
  return content.split('\n\n').filter(p => p.trim() !== '').map((paragraph, index) => {
    let p = paragraph.trim();
    
    if (p.startsWith('### ')) {
      return <h3 key={index} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-foreground">{p.replace('### ', '')}</h3>;
    }
    if (p.startsWith('## ')) {
      return <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">{p.replace('## ', '')}</h2>;
    }
    
    // Parse italics and bold (simplistic)
    // Only handling **bold** and *italics* for words
    const boldParts = p.split('**');
    const formattedParagraph = boldParts.map((boldText, bIndex) => {
      if (bIndex % 2 === 1) return <strong key={bIndex} className="font-semibold text-foreground">{boldText}</strong>;
      
      const italicParts = boldText.split('*');
      return italicParts.map((italicText, iIndex) => {
        if (iIndex % 2 === 1) return <em key={iIndex} className="italic">{italicText}</em>;
        return italicText;
      });
    });

    return <p key={index} className="text-foreground/80 leading-relaxed mb-6 text-lg">{formattedParagraph}</p>;
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-foreground/50">{blog.date}</span>
              <span className="text-sm text-foreground/50 hidden sm:inline">•</span>
              <span className="text-sm text-foreground/50 hidden sm:inline">{blog.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              {blog.title}
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {renderContent(blog.content)}
          </div>

        </article>
        
        {/* Next Steps CTA */}
        <div className="mt-24">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
