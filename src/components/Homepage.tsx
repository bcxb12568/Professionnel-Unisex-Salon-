import { motion } from 'motion/react';
import { Calendar, Award, Compass, ShieldCheck, Heart, MapPin, ArrowRight, Star, Instagram, Phone } from 'lucide-react';
import { SERVICES } from '../data';

interface HomepageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (category: string) => void;
}

export default function Homepage({ setCurrentPage, setSelectedCategory }: HomepageProps) {
  // Let's filter out 3 top signature services
  const signatureServices = SERVICES.filter(s => ['s1', 's4', 's6'].includes(s.id));

  const testimonials = [
    {
      id: 1,
      name: 'Aditi Deshmukh',
      role: 'Regular Client since 2018',
      text: 'Vikram is an absolute genius with haircuts! The balayage highlights match my skin tone perfectly. Luxe Unisex makes me feel like a VIP every time I step in.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Rohan Sharma',
      role: 'Tech Lead / Commuter',
      text: 'The Royal Beard Sculpt & Hot Towel shave is magical. Best stress buster in Dadar. Their hygiene standards are flawless. Clean blades, fresh towels always.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Meera Kulkarni',
      role: 'Fashion Designer',
      text: 'Got my Hydra-Facial and Advanced Keratin done for my sister’s wedding here. Dynamic service, and the glow lasted weeks! Vikram and Priyanka are the dream team.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const trustSignals = [
    { id: 't1', title: '12+ Years Experience', description: 'Crafting elite transformations since 2014 in Dadar' },
    { id: 't2', title: '15,000+ Happy Clients', description: 'With a solid 4.9 average customer review rating' },
    { id: 't3', title: 'Elite Grooming Stylists', description: 'Certified globally, trained under world champions' }
  ];

  return (
    <div className="bg-[#fff8f8] text-stone-800 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[460px] sm:min-h-[580px] py-8 sm:py-12 flex items-center justify-start overflow-hidden" id="hero-section">
        {/* Background Image with elegant fade to make left-side text perfectly legible */}
        <div className="absolute inset-0 z-0 bg-white">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" 
            alt="Professionnel Salon Interior" 
            className="w-full h-full object-cover object-right sm:object-center select-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle light overlay on mobile to keep wallpaper fully visible, and fading gradient on desktops */}
          <div className="absolute inset-0 bg-white/40 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/75 sm:to-transparent" />
        </div>

        {/* Content Overlay - Aligned left in the corner like the image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full text-left">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            
            {/* Elegant 5-star rating pill matching the image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 bg-white/95 border border-pink-100 rounded-full shadow-sm text-[10px] sm:text-xs font-bold text-stone-700"
            >
              <div className="flex items-center gap-0.5 text-amber-500">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400 animate-pulse" />
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-stone-300 font-medium font-mono">|</span>
              <span className="text-stone-600">46 Reviews • 5.0 Rating</span>
            </motion.div>

            {/* Typography paired beautifully like the image, optimized size for mobile/desktop split */}
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-stone-900 leading-[1.1]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Enhance Your <br />
              <span className="font-serif italic text-pink-600 font-normal pr-1 inline-block">Beauty</span> <br />
              <span className="text-stone-800">with Professionnel</span>
            </motion.h1>

            <motion.p 
              className="max-w-md text-stone-600 text-[11px] xs:text-xs sm:text-sm leading-relaxed font-semibold pl-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Professional salon services in Dadar with trusted 5-star customer experience. Experience luxury and personalized care.
            </motion.p>

            {/* Rounded action buttons side-by-side like the image, with tighter mobile bounds to prevent clipping */}
            <motion.div 
              className="flex flex-row items-center justify-start gap-2 pt-1 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => setCurrentPage('book')}
                className="px-3 sm:px-6 py-2.5 sm:py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-bold text-[10px] xs:text-xs sm:text-sm rounded-full transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center justify-center gap-1.5 min-h-[38px] sm:min-h-[44px] whitespace-nowrap"
                id="hero-book-now-btn"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+919322964354"
                className="px-3 sm:px-6 py-2.5 sm:py-3.5 bg-white hover:bg-pink-50 border border-pink-200 text-pink-600 font-bold text-[10px] xs:text-xs sm:text-sm rounded-full transition-all shadow-sm active:scale-95 cursor-pointer inline-flex items-center justify-center gap-1.5 min-h-[38px] sm:min-h-[44px] whitespace-nowrap"
                id="hero-call-now-btn"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500 shrink-0" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Quick Link pills */}
            <motion.div 
              className="flex flex-wrap items-center justify-start gap-2 text-[10px] sm:text-xs font-bold pt-3.5 text-stone-500 border-t border-pink-100/60 pb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="font-semibold text-stone-400">Jump to:</span>
              <button 
                onClick={() => setCurrentPage('services')} 
                className="text-pink-600 hover:text-pink-700 hover:underline py-1"
              >
                Signature Menu
              </button>
              <span className="text-stone-200">•</span>
              <button 
                onClick={() => setCurrentPage('shop')} 
                className="text-pink-600 hover:text-pink-700 hover:underline py-1"
              >
                Shop Cosmetics
              </button>
              <span className="text-stone-200">•</span>
              <button 
                onClick={() => {
                  setCurrentPage('services');
                  setSelectedCategory('Packages');
                }} 
                className="text-pink-600 hover:text-pink-700 hover:underline py-1"
              >
                Bundles & Packages
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip immediately below */}
      <section className="bg-white border-y border-pink-100 py-4 sm:py-8" id="trust-strip">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-1 sm:gap-8 text-center sm:text-left divide-x divide-pink-100">
            {trustSignals.map((item, idx) => (
              <div key={item.id} className={`${idx > 0 ? 'pl-2 sm:pl-8' : ''} flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center sm:justify-start`}>
                <div className="bg-pink-50 p-1.5 sm:p-3 rounded-full border border-pink-100 text-pink-600 shrink-0">
                  {idx === 0 ? <Award className="h-4 w-4 sm:h-6 sm:w-6" /> : idx === 1 ? <Heart className="h-4 w-4 sm:h-6 sm:w-6" /> : <Compass className="h-4 w-4 sm:h-6 sm:w-6" />}
                </div>
                <div>
                  <h4 className="text-[10px] xs:text-xs sm:text-lg font-black font-sans text-stone-900 leading-tight">{item.title}</h4>
                  <p className="text-sm text-stone-500 font-medium mt-0.5 hidden sm:block">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signature Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="signature-services">
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600">
            Highly Requested Treatment
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-stone-900 mt-2">
            Our Signature Experiences
          </h2>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-stone-600 max-w-xl mx-auto mt-4 text-sm sm:text-base font-medium">
            Meticulously planned by our master stylists to deliver instant wellness, deep shine, and absolute confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureServices.map((service, idx) => (
            <motion.div
              key={service.id}
              className="bg-white border border-pink-100 rounded-2xl overflow-hidden hover:border-pink-300 hover:shadow-xl transition-all flex flex-col group justify-between"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              id={`sig-service-card-${service.id}`}
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-pink-100 text-xs font-bold text-pink-600 font-mono">
                    {service.duration} mins
                  </div>
                  <div className="absolute bottom-4 left-4 bg-pink-500 text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {service.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-sans text-stone-900 group-hover:text-pink-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-stone-500 mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-pink-50 flex items-center justify-between bg-pink-50/20">
                <div>
                  <span className="text-xs text-stone-400 block uppercase font-mono tracking-widest">Investment</span>
                  <span className="text-2xl font-black text-pink-650">₹{service.price}</span>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('book');
                  }}
                  className="px-4 py-2.5 bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 min-h-[44px] sm:min-h-0 cursor-pointer"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Reserve Spot
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('services')}
            className="px-6 py-3 bg-white hover:bg-pink-50 text-stone-700 hover:text-pink-600 border border-pink-100 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Complete Menu
            <ArrowRight className="h-4 w-4 text-pink-500" />
          </button>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-white border-y border-pink-100 py-20" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Section */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl blur opacity-25" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-pink-100">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80" 
                  alt="Elite Hair Coloring Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border border-pink-100 p-6 rounded-xl hidden sm:block max-w-[240px] shadow-lg">
                <Stars rating={5} />
                <p className="text-[13px] text-stone-600 font-sans mt-2 italic font-medium">
                  "Unbeatable scalp massages and root care in all of Mumbai."
                </p>
                <span className="text-[11px] text-pink-600 font-mono uppercase tracking-widest block mt-2 font-bold">
                  - Times Wellness Guide
                </span>
              </div>
            </div>

            {/* Right Bullet Section */}
            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-pink-600">
                Dadar’s Gold Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans mt-2 text-stone-900">
                Engineered For Discerning Clients
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed font-semibold">
                At Professionnel Unisex Salon, we do not believe in quick haircuts. Every appointment is a luxury design experience, combining modern artistry with pure hygienic safety.
              </p>

              <div className="space-y-6 mt-8" id="why-us-list">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-55/10 p-2.5 bg-pink-50/85 rounded-lg border border-pink-100 text-pink-600 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900">Strict Clinical Hygiene</h4>
                    <p className="text-sm text-stone-500 mt-1 font-medium">
                      Our tools are autoclave sterilized before every click. Disinfected workstations and single-use fresh towels are non-negotiable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-55/10 p-2.5 bg-pink-50/85 rounded-lg border border-pink-100 text-pink-600 mt-1">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900">Premium Global Brands</h4>
                    <p className="text-sm text-stone-500 mt-1 font-medium">
                      We treatment formulas strictly from premium makers: Olaplex, Kérastase, Dyson, L’Oréal Professional, and organic botanical concentrates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-55/10 p-2.5 bg-pink-50/85 rounded-lg border border-pink-100 text-pink-600 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900">Convenient Central Dadar Station</h4>
                    <p className="text-sm text-stone-500 mt-1 font-medium">
                      Located just 3 minutes walking from Dadar Central Station. Dedicated premium parking spots with immediate reservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials">
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-650 font-bold">Verified Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-stone-900 mt-2">What Our Clients Say</h2>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div 
              key={test.id} 
              className="bg-white border border-pink-50 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              id={`testimonial-${test.id}`}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <Stars rating={test.rating} />
                </div>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{test.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-pink-50">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-full object-cover border border-pink-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{test.name}</h4>
                  <span className="text-xs text-pink-600 font-bold font-mono">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Instagram Gallery Preview */}
      <section className="py-20 bg-white border-t border-pink-50" id="insta-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-pink-600 font-bold flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                @ProfessionnelUnisexDadar
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans mt-2 text-stone-900">Follow Our Style Stream</h2>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 md:mt-0 px-5 py-2.5 bg-pink-50 hover:bg-pink-100 text-pink-750 text-sm font-bold rounded-lg flex items-center gap-2 transition-all border border-pink-100 cursor-pointer text-center"
            >
              Visit Our Instagram Profile
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80'
            ].map((url, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-pink-50">
                <img 
                  src={url} 
                  alt="Insta Work" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white drop-shadow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Map + Address Footer Strip */}
      <section className="bg-pink-50/30 border-t border-pink-100 py-12" id="footer-map-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-8 rounded-2xl border border-pink-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 text-pink-600 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-sans text-stone-900">Locate Professionnel Unisex Salon</h4>
                <p className="text-sm text-stone-600 mt-1 max-w-md font-medium">
                  Shop No. 5, Premium Plaza, NC Kelkar Road, Near Dadar Railway Station (West), Dadar, Mumbai - 400028
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-pink-650 font-bold font-mono">
                  <span>⏱ Hours: 10:00 AM - 9:00 PM</span>
                  <span className="hidden sm:inline text-pink-200">•</span>
                  <span>🚫 Open All Days</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-pink-50 text-stone-700 text-sm font-semibold rounded-lg transition-colors border border-pink-150 text-center cursor-pointer min-h-[44px]"
              >
                View Map Directions
              </button>
              <button
                onClick={() => setCurrentPage('book')}
                className="w-full sm:w-auto px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold rounded-lg transition-all text-center shadow-lg hover:shadow-pink-500/20 cursor-pointer min-h-[44px]"
              >
                Book Instantly
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" id="stars-row">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-pink-500 fill-pink-500' : 'text-stone-200'}`} />
      ))}
    </div>
  );
}
