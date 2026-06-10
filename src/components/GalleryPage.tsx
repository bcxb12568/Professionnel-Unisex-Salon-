import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Sparkles, Eye, Scissors, Filter, Flame, ChevronLeft } from 'lucide-react';

interface GalleryPageProps {
  setCurrentPage: (page: string) => void;
}

export default function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'men' | 'women' | 'hair' | 'skin' | 'beard'>('all');
  
  // Custom slider percentage state for the highlighted balayage slider
  const [sliderPercent, setSliderPercent] = useState<number>(50);

  // States to keep track of toggled states for other individual cards
  const [toggledCards, setToggledCards] = useState<Record<string, boolean>>({});

  const toggleBeforeAfter = (id: string) => {
    setToggledCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-[#fff8f8] text-stone-850 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-8 h-11 w-11 bg-white border border-pink-100 hover:border-pink-300 hover:text-pink-600 text-pink-600 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
          aria-label="Back to Home"
        >
          <ChevronLeft className="h-6 w-6 text-pink-600" />
        </button>

        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-100">
            Artistic Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black text-stone-900 mt-2">
            The Transformation Lab
          </h1>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Witness the real results crafted in our workstations. Feel free to drag the horizontal sliders or click cards to swap between Before and After styling.
          </p>
        </div>

        {/* 1. HIGHLIGHTED INTERACTIVE SLIDER (Elite Feature) */}
        <div className="bg-white border border-pink-100 p-6 rounded-3xl mb-16 max-w-3xl mx-auto space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold font-mono uppercase tracking-widest text-pink-600 flex items-center gap-1.5 px-3 py-1 bg-pink-10/50 rounded-full">
              <Sparkles className="h-4 w-4 text-pink-500" />
              Dynamic Hair/Highlights Splitter
            </span>
            <span className="text-xs text-stone-500 italic font-medium">Drag slider left <span className="text-pink-500">↔</span> right</span>
          </div>

          {/* Interactive Split-Screen Holder */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-pink-150 select-none shadow-sm">
            {/* Before (Full size at background) */}
            <img 
              src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=800&q=80" 
              alt="Balayage Before Treatment" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 z-20 bg-rose-500 text-white font-mono px-3 py-1 text-xs font-extrabold rounded-full border border-rose-600/30">
              BEFORE (Unruly Dry Ends)
            </div>

            {/* After (Clipped over based on sliderPercent) */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPercent}% 0, ${sliderPercent}% 100%, 0 100%)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1620331713243-7185fe473fac?auto=format&fit=crop&w=800&q=80" 
                alt="Balayage After Treatment" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div 
              className="absolute top-4 right-4 z-20 bg-emerald-500 text-white px-3 py-1 text-xs font-bold font-mono rounded-full border border-emerald-600/30"
              style={{ opacity: sliderPercent < 85 ? 1 : 0 }}
            >
              AFTER (Luxe Keratin Tone)
            </div>

            {/* Visual handle line */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-1 bg-pink-550 bg-pink-500 pointer-events-none"
              style={{ left: `${sliderPercent}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-pink-500 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-bold font-mono shadow-md">
                ↔
              </div>
            </div>
          </div>

          {/* Slider input */}
          <div className="space-y-2">
            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPercent}
              onChange={(e) => setSliderPercent(Number(e.target.value))}
              className="w-full h-2 accent-pink-500 bg-pink-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono font-extrabold text-stone-450 text-stone-400 uppercase">
              <span>Only Before</span>
              <span className="text-pink-600">Perfect Balance Split</span>
              <span>Only After Care</span>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY TABS FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="gallery-filters-area">
          {([
            { id: 'all', label: 'All Photos' },
            { id: 'men', label: 'For Men' },
            { id: 'women', label: 'For Women' },
            { id: 'hair', label: 'Hair Cuts' },
            { id: 'skin', label: 'Skin Glow' },
            { id: 'beard', label: 'Beards' }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-pink-500 border-pink-500 text-white font-extrabold shadow-md'
                  : 'bg-white border-pink-100 text-stone-600 hover:border-pink-300 hover:text-pink-600 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3. RESPONSIVE GRID SHEETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-cards-grid">
          {filteredItems.map((item) => {
            const isToggled = toggledCards[item.id] || false;
            
            return (
              <div
                key={item.id}
                className="bg-white border border-pink-100 rounded-2xl overflow-hidden group hover:shadow-md hover:border-pink-250 transition-all flex flex-col justify-between shadow-sm"
                id={`gallery-item-${item.id}`}
              >
                <div>
                  <div className="relative h-72 overflow-hidden bg-pink-52 bg-pink-50">
                    
                    {/* Render transformation screen */}
                    {item.type === 'transformation' && item.beforeImage && item.afterImage ? (
                      <>
                        <img
                          src={isToggled ? item.afterImage : item.beforeImage}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full ${
                          isToggled ? 'bg-emerald-500 text-white border border-emerald-600/30' : 'bg-rose-500 text-white border border-rose-600/30'
                        }`}>
                          {isToggled ? 'After Glow' : 'Before Frame'}
                        </div>
                        
                        {/* Quick toggle tab indicator */}
                        <button
                          onClick={() => toggleBeforeAfter(item.id)}
                          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl py-3 border border-pink-100 text-xs font-bold text-pink-600 text-center hover:bg-pink-50 hover:text-pink-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow"
                        >
                          <Eye className="h-4 w-4 text-pink-505 text-pink-600" />
                          {isToggled ? 'View Original Before' : 'View Styled After'}
                        </button>
                      </>
                    ) : (
                      <>
                        {/* Non-transformation classic image */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </>
                    )}

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[10px] font-extrabold font-mono tracking-widest px-2.5 py-1 uppercase rounded-full border border-pink-100 text-stone-500">
                      {item.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-sans font-bold text-stone-900 group-hover:text-pink-605 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-550 font-bold mt-1 capitalize font-mono text-pink-600">
                      Category: {item.category} care
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#fffcfc] border-t border-pink-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold font-mono tracking-wider text-stone-400 uppercase">
                    BY LUXE WORKSTATION
                  </span>
                  <span className="text-xs text-pink-605 text-pink-600 font-bold flex items-center gap-1">
                    <Scissors className="h-3.5 w-3.5" />
                    Verified Cut
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
