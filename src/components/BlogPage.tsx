import { useState } from 'react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';
import { Clock, User, Calendar, BookOpen, ChevronLeft, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  setCurrentPage: (page: string) => void;
}

export default function BlogPage({ setCurrentPage }: BlogPageProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-[#fff8f8] text-stone-850 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {selectedPost ? (
          /* Detailed Blog Reading Pane */
          <div className="max-w-3xl mx-auto space-y-8" id="blog-reading-pane">
            
            {/* Back Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 h-11 w-11 bg-white border border-pink-100 hover:border-pink-300 hover:text-pink-600 text-pink-600 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
              aria-label="Back to Style Guides"
            >
              <ChevronLeft className="h-6 w-6 text-pink-600" />
            </button>

            {/* Thumbnail Header */}
            <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-pink-100 shadow-sm bg-pink-50">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-black/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-pink-500 text-white text-[10px] font-black px-3 py-1 rounded-full font-mono uppercase tracking-widest inline-block border border-pink-100 shadow">
                  {selectedPost.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-sans font-black text-stone-900 mt-3 leading-tight filter drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)]">
                  {selectedPost.title}
                </h1>
              </div>
            </div>

            {/* Article Author Profile and Read stats */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 border-b border-pink-50 pb-4 font-bold">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-pink-550 text-pink-500" />
                <span>Written by: <strong className="text-stone-900 font-extrabold">{selectedPost.author}</strong></span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-pink-550 text-pink-500" />
                <span>{selectedPost.date}</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-pink-505 text-pink-500" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-6 text-stone-700 font-sans text-sm sm:text-base leading-relaxed font-semibold" id="blog-body-paragraphs">
              {selectedPost.content.map((para, pIdx) => {
                // If paragraph represents list points, render nicely
                if (para.startsWith('1.') || para.startsWith('2.') || para.startsWith('3.') || para.startsWith('4.')) {
                  return (
                    <div key={pIdx} className="p-5 bg-white border-l-4 border-pink-500 rounded-r-2xl space-y-1.5 shadow-sm border border-pink-100 border-l-4">
                      <p className="font-extrabold text-pink-600 text-sm sm:text-base">{para.split(':')[0]}</p>
                      <p className="text-stone-600 text-xs sm:text-sm font-medium">{para.split(':').slice(1).join(':')}</p>
                    </div>
                  );
                }
                return (
                  <p key={pIdx} className="text-stone-600 font-medium text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* HIGH VALUE CTAS WITHIN ARTICLE */}
            <div className="bg-white border border-pink-100 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm" id="blog-cta-promo">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[10px] bg-pink-100 text-pink-600 border border-pink-200 uppercase tracking-widest font-mono font-black px-3 py-1 rounded-full">
                  SPECIAL COUPON CODE INSIDE 🎫
                </span>
                <h3 className="text-base font-black text-stone-900 mt-2.5">Inspired by Vikram’s styling guide?</h3>
                <p className="text-xs text-stone-500 font-semibold leading-relaxed">
                  Secure any grooming haircut or chemical treatment today & apply the 20% off code at checkout!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0 justify-end">
                <div className="bg-pink-50 border border-pink-100 rounded-xl px-4 py-2 font-mono text-center font-bold text-pink-600 text-sm flex items-center justify-center">
                  SALONGLOW20
                </div>
                <button
                  onClick={() => setCurrentPage('book')}
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-605 hover:bg-pink-600 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-pink-500/20 shadow-sm min-h-[44px]"
                >
                  Book Appointment Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Blog Grid List */
          <div className="space-y-12">
            
            {/* Back Button */}
            <button
              onClick={() => setCurrentPage('home')}
              className="mb-8 h-11 w-11 bg-white border border-pink-100 hover:border-pink-300 hover:text-pink-600 text-pink-600 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
              aria-label="Back to Home"
            >
              <ChevronLeft className="h-6 w-6 text-pink-600" />
            </button>

            {/* Header section */}
            <div className="text-center mb-12">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-100">
                SEO & Styling Expert Guides
              </span>
              <h1 className="text-3xl sm:text-5xl font-sans font-black text-stone-900 mt-3">
                The Grooming Journals
              </h1>
              <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
              <p className="text-stone-605 text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium">
                Discover the latest styling aesthetics, treatment science guides, and monsoon haircare secrets written by Dadar’s leading master artists.
              </p>
            </div>

            {/* Grid posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-cards-grid">
              {BLOGS.map((post) => (
                <div
                  key={post.id}
                  className="bg-white border border-pink-100 hover:border-pink-300 hover:shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer shadow-sm transition-all h-full"
                  onClick={() => setSelectedPost(post)}
                  id={`blog-card-${post.id}`}
                >
                  <div>
                    {/* Cover art image */}
                    <div className="relative h-56 overflow-hidden bg-pink-50">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-stone-900/10" />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 border border-pink-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-pink-600 font-mono shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div className="p-6 space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-mono font-bold uppercase">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold font-sans text-stone-900 group-hover:text-pink-600 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed font-semibold line-clamp-3 pt-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read detail triggers */}
                  <div className="p-6 border-t border-pink-50 bg-[#fffcfc] flex items-center justify-between">
                    <span className="text-xs text-stone-605 text-pink-650 text-pink-605 font-bold group-hover:text-pink-600 transition-colors flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-pink-500" />
                      Read Style Guide
                    </span>
                    <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
