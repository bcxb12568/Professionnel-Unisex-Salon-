import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Scissors, Info, Sparkles, Filter, CheckCircle2, ChevronRight, ChevronLeft, X, Calendar } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
  selectedServicesForBooking: string[];
  toggleServiceForBooking: (id: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function ServicesPage({
  setCurrentPage,
  selectedServicesForBooking,
  toggleServiceForBooking,
  selectedCategory,
  setSelectedCategory
}: ServicesPageProps) {
  
  const categories = [
    'All Services',
    'Hair Care',
    'Hair Color & Highlights',
    'Skin & Facial',
    'Beard Grooming',
    'Nails & Spa',
    'Bridal & Party',
    'Packages'
  ];

  // Filters State
  const [genderFilter, setGenderFilter] = useState<'all' | 'men' | 'women' | 'unisex'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(8000);
  const [maxDuration, setMaxDuration] = useState<number>(200);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Service for Details Modal
  const [detailedService, setDetailedService] = useState<Service | null>(null);

  // Sync category reset if user lands via homepage direct links
  const activeCategory = selectedCategory || 'All Services';

  const filterServices = SERVICES.filter(service => {
    // Category check
    const matchesCategory = activeCategory === 'All Services' || service.category === activeCategory;
    
    // Gender check
    const matchesGender = genderFilter === 'all' || 
                          service.gender === genderFilter || 
                          service.gender === 'unisex';
    
    // Price check
    const matchesPrice = service.price <= maxPrice;

    // Duration check
    const matchesDuration = service.duration <= maxDuration;

    // Search query check
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesGender && matchesPrice && matchesDuration && matchesSearch;
  });

  return (
    <div className="bg-[#fff8f8] text-stone-800 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-8 h-11 w-11 bg-white border border-pink-100 hover:border-pink-300 hover:text-pink-600 text-pink-600 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
          aria-label="Back to Home"
        >
          <ChevronLeft className="h-6 w-6 text-pink-600" />
        </button>

        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-100">
            E-Commerce Style Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-stone-900 mt-3">
            Premium Treatment Catalog
          </h1>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Select one or more bespoke services to build your customized grooming suite. Mix hair care with luxury spa and facials in real-time.
          </p>
        </div>

        {/* Sidebar/Mobile category tabs */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Categories and Filters */}
          <div className="w-full lg:w-1/4 space-y-6 shrink-0" id="services-sidebar">
            
            {/* Search Input */}
            <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
              <label className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block mb-2">
                Quick Search
              </label>
              <input
                type="text"
                placeholder="Search haircuts or skin care..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#fffcfc] border border-pink-100 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-300 placeholder-stone-450 min-h-[44px]"
              />
            </div>

            {/* Categories Selection */}
            <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm">
              <span className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block mb-3">
                Categories
              </span>
              <div className="space-y-1.5 flex flex-col">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center justify-between text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-pink-500 text-white font-bold shadow-md shadow-pink-550/10'
                        : 'text-stone-700 hover:bg-pink-50/50 hover:text-pink-650'
                    }`}
                  >
                    <span>{cat}</span>
                    <ChevronRight className={`h-4 w-4 ${activeCategory === cat ? 'text-white' : 'text-stone-400'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-stone-800 pb-3 border-b border-pink-50">
                <Filter className="h-4 w-4 text-pink-500" />
                <span className="text-xs uppercase font-extrabold tracking-widest font-mono text-stone-800">Refine Menu</span>
              </div>

              {/* Gender Preference */}
              <div>
                <label className="text-xs font-bold text-stone-600 block mb-2">Target Preference</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['all', 'men', 'women'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGenderFilter(g)}
                      className={`py-2 px-1 text-[11px] font-bold rounded-lg capitalize border transition-all text-center cursor-pointer ${
                        genderFilter === g
                          ? 'bg-pink-50 border-pink-400 text-pink-600'
                          : 'bg-white border-pink-100 text-stone-500 hover:bg-pink-50/20'
                      }`}
                    >
                      {g === 'all' ? 'All' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Cost Filter */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-600 mb-2 font-semibold">
                  <span>Maximum Price</span>
                  <span className="font-mono text-pink-600 font-bold">₹{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="10000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-pink-500 bg-pink-100 rounded-lg appearance-none h-2 cursor-pointer focus:outline-none"
                />
              </div>

              {/* Max Duration Filter */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-600 mb-2 font-semibold">
                  <span>Max Salon Time</span>
                  <span className="font-mono text-pink-600 font-bold">{maxDuration} mins</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="300"
                  step="15"
                  value={maxDuration}
                  onChange={(e) => setMaxDuration(Number(e.target.value))}
                  className="w-full accent-pink-500 bg-pink-100 rounded-lg appearance-none h-2 cursor-pointer focus:outline-none"
                />
              </div>

              {/* Clear filters Button */}
              <button
                onClick={() => {
                  setGenderFilter('all');
                  setMaxPrice(8000);
                  setMaxDuration(200);
                  setSearchQuery('');
                  setSelectedCategory('All Services');
                }}
                className="w-full py-2.5 border border-pink-100 hover:border-pink-300 hover:bg-pink-50/20 rounded-xl text-xs font-bold text-stone-500 hover:text-pink-600 transition-all block text-center cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          </div>

          {/* Right Column: E-commerce Product Grid */}
          <div className="w-full lg:w-3/4">
            
            {/* Filter Stat Bar */}
            <div className="bg-white border border-pink-100 px-6 py-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 shadow-sm">
              <span className="text-sm text-stone-600 font-semibold font-sans">
                Found <span className="text-pink-600 font-extrabold">{filterServices.length}</span> signature treatment{filterServices.length !== 1 ? 's' : ''} in <span className="text-stone-900 font-extrabold">"{activeCategory}"</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-green-550 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-stone-500 font-semibold">Accepting real-time reservations</span>
              </div>
            </div>

            {filterServices.length === 0 ? (
              <div className="text-center py-24 bg-white border border-pink-100 rounded-3xl shadow-sm">
                <Scissors className="h-10 w-10 text-pink-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-stone-850">No Menu Items Found</h3>
                <p className="text-sm text-stone-500 mt-2 max-w-sm mx-auto font-medium">
                  We don't have matching luxury treatments for these criteria. Try relaxing your budget or timeframe limits.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="services-catalog-grid">
                {filterServices.map((service) => {
                  const isSelected = selectedServicesForBooking.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      className="bg-white border border-pink-100/70 hover:border-pink-250 hover:shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between group h-full transition-all"
                      id={`service-item-${service.id}`}
                    >
                      <div>
                        {/* Service Photo with Badges */}
                        <div className="relative h-52 overflow-hidden bg-pink-50">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <button
                            onClick={() => setDetailedService(service)}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full border border-pink-100 text-stone-700 hover:text-pink-600 hover:scale-105 transition-all shadow-sm"
                            title="See benefits & styling steps"
                          >
                            <Info className="h-4.5 w-4.5" />
                          </button>
                          
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-pink-600 font-mono border border-pink-100/50">
                              {service.gender === 'unisex' ? 'Unisex' : `${service.gender}`}
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-sans font-bold text-lg text-stone-900 group-hover:text-pink-605 transition-colors">
                              {service.name}
                            </h3>
                          </div>
                          <div className="flex items-center gap-3 mt-2 text-xs text-stone-500 font-semibold">
                            <span className="flex items-center gap-1 text-pink-600 font-bold">
                              <Clock className="h-3.5 w-3.5" />
                              {service.duration} mins
                            </span>
                            <span>•</span>
                            <span className="text-stone-600">{service.category}</span>
                          </div>
                          <p className="text-stone-500 text-sm mt-3 line-clamp-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="px-5 py-4 border-t border-pink-50 bg-pink-50/10 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-stone-400 block uppercase font-mono tracking-widest font-bold">Rate</span>
                          <span className="text-2xl font-black text-pink-700 font-sans">₹{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* More info button */}
                          <button
                            onClick={() => setDetailedService(service)}
                            className="px-3 py-2 bg-white hover:bg-pink-50 text-stone-700 hover:text-pink-600 rounded-xl text-xs font-bold border border-pink-100 cursor-pointer min-h-[38px]"
                          >
                            Benefits
                          </button>

                          {/* Quick book trigger */}
                          <button
                            onClick={() => toggleServiceForBooking(service.id)}
                            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer min-h-[38px] ${
                              isSelected
                                ? 'bg-pink-600 text-white font-extrabold shadow-md'
                                : 'bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-100/50'
                            }`}
                          >
                            {isSelected ? (
                              <>
                                <CheckCircle2 className="h-4 w-4 text-white" />
                                Added
                              </>
                            ) : (
                              <>
                                <Sparkles className="h-3.5 w-3.5" />
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Float Menu Strip if services are selected */}
            {selectedServicesForBooking.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 lg:right-12 z-40 max-w-sm bg-white border border-pink-100 p-5 rounded-2xl shadow-2xl space-y-4"
                id="booking-basket-flyer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-pink-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-extrabold font-mono">
                      {selectedServicesForBooking.length}
                    </div>
                    <span className="text-sm font-extrabold text-stone-800">Booking Cart</span>
                  </div>
                  <span className="text-sm text-pink-600 font-black font-mono">
                    ₹{SERVICES.filter(s => selectedServicesForBooking.includes(s.id)).reduce((total, s) => total + s.price, 0)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setCurrentPage('book');
                    }}
                    className="flex-1 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/20 cursor-pointer min-h-[44px]"
                  >
                    <Calendar className="h-4.5 w-4.5" />
                    Complete Booking Flow
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Detailed Service Dialog Modals (AnimatePresence) */}
        <AnimatePresence>
          {detailedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDetailedService(null)}
                className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white border border-pink-100 rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto z-10 text-stone-800 shadow-2xl"
                id="service-detail-modal"
              >
                
                {/* Image Showcase */}
                <div className="relative h-56 w-full bg-pink-50">
                  <img
                    src={detailedService.image}
                    alt={detailedService.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-black/25" />
                  
                  <button
                    onClick={() => setDetailedService(null)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full border border-pink-100 text-stone-700 hover:text-pink-600 transition-all cursor-pointer shadow-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-pink-600 font-extrabold bg-pink-50 px-2.5 py-1 rounded inline-block border border-pink-100">
                      {detailedService.category}
                    </span>
                    <h2 className="text-2xl font-sans font-black text-stone-900 mt-2 filter drop-shadow-[0_1px_10px_rgba(255,255,255,0.7)]">
                      {detailedService.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Metadata Stats */}
                  <div className="grid grid-cols-3 gap-4 pb-6 border-b border-pink-100 text-center">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-mono font-bold">Investment</span>
                      <span className="text-xl font-bold text-pink-605 text-pink-600">₹{detailedService.price}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-mono font-bold">Duration</span>
                      <span className="text-sm font-bold text-stone-800 flex items-center justify-center gap-1 mt-1">
                        <Clock className="h-4 w-4 text-pink-500" />
                        {detailedService.duration} mins
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-mono font-bold">Target</span>
                      <span className="text-xs font-bold text-pink-600 uppercase tracking-widest font-mono block mt-1">
                        {detailedService.gender === 'unisex' ? 'Unisex' : `${detailedService.gender}`}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest font-black text-pink-600 mb-2">
                      Overview & Design Intent
                    </h4>
                    <p className="text-stone-605 text-stone-600 text-sm leading-relaxed font-medium">
                      {detailedService.description}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  {detailedService.benefits && (
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-widest font-black text-pink-600 mb-3">
                        Treatment Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {detailedService.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2 text-stone-600 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 min-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step-by-Step Process */}
                  {detailedService.steps && (
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-widest font-black text-pink-600 mb-3">
                        Scientific Styling Steps
                      </h4>
                      <div className="space-y-2">
                        {detailedService.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-3 text-sm text-stone-600 items-start font-medium">
                            <span className="flex h-5 w-5 rounded-full bg-pink-50 border border-pink-100 text-[10px] font-mono items-center justify-center text-pink-600 font-bold mt-0.5 shrink-0">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expert Stylist Recommendation */}
                  {detailedService.stylistRecommendation && (
                    <div className="p-4 bg-pink-50/50 border border-pink-100 rounded-2xl flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg border border-pink-100 text-pink-500 shrink-0">
                        <Scissors className="h-4 w-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Director Recommendation</h5>
                        <p className="text-xs text-stone-500 mt-1 italic font-medium leading-relaxed">
                          "{detailedService.stylistRecommendation}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Actions inside Modal */}
                  <div className="pt-6 border-t border-pink-100 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setDetailedService(null)}
                      className="px-5 py-3 border border-pink-100 hover:bg-pink-50 text-stone-600 text-sm font-semibold rounded-xl transition-all cursor-pointer min-h-[44px]"
                    >
                      Close Details
                    </button>
                    
                    <button
                      onClick={() => {
                        toggleServiceForBooking(detailedService.id);
                        setDetailedService(null);
                      }}
                      className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer min-h-[44px]"
                    >
                      <Calendar className="h-4 w-4" />
                      {selectedServicesForBooking.includes(detailedService.id) ? 'Remove Selection' : 'Add to Booking'}
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
