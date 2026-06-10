import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2, Star, ChevronLeft } from 'lucide-react';
import { STYLISTS } from '../data';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  const highlights = [
    { title: 'Elite Clean Certification', text: 'Autoclave sterilization of metal tools and single-use fresh linen is our daily promise.' },
    { title: 'Global Styling Standard', text: 'Master education under global stylists in London to design modern cuts matching your shape.' },
    { title: '15,000+ Success Stories', text: 'Over a decade of operations in Dadar catering to high-profile business models and actors.' }
  ];

  const interiorPhotos = [
    { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=605&q=80', tag: 'Hair Design Stations' },
    { url: 'https://images.unsplash.com/photo-1600948836101-f9ffdb5965e4?auto=format&fit=crop&w=605&q=80', tag: 'Therapeutic Spa Rooms' },
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=605&q=80', tag: 'Grooming Master Lounges' }
  ];

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

        {/* Header content */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-101">
            Our Legacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black text-stone-900 mt-3">
            Artistry Meets Cleanliness
          </h1>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Photo Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" id="about-narrative">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-stone-900 leading-tight">
              Redefining central unisex grooming protocols in Dadar since 2014.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-semibold">
              Founded under the creative vision of Vikram Salvi, Professionnel Unisex Salon was born to serve clients who refuse to settle for compromise. We realized that while Mumbai is full of small local salons, there was a gap for a central unisex terminal that combined clinical-level hygiene with world-class design techniques.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed font-medium">
              Today, our spacious Kelkar Road plaza is home to four of the region’s most in-demand stylers. From state-of-the-art Hydra-Facial vacuum nozzles to ammonia-free, hair-growth highlights, our operations ensure your safety is premium.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center pt-4" id="metric-grid-about">
              <div className="border border-pink-100 p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-2xl sm:text-3xl font-black font-mono text-pink-600 block">12+</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-bold">Years Legacy</span>
              </div>
              <div className="border border-pink-100 p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-2xl sm:text-3xl font-black font-mono text-pink-600 block">15K+</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-bold">Happy Grooms</span>
              </div>
              <div className="border border-pink-100 p-4 rounded-2xl bg-white shadow-sm">
                <span className="text-2xl sm:text-3xl font-black font-mono text-pink-600 block">4.9★</span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-mono font-bold">User Rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-450 rounded-2xl blur opacity-15" />
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
              alt="Luxe Stylists Consult" 
              className="relative rounded-2xl border border-pink-100 w-full object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Highlight trust banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white border border-pink-100 p-6 rounded-2xl space-y-3 shadow-sm">
              <div className="bg-pink-50 p-2.5 rounded-xl border border-pink-100 text-pink-600 w-fit">
                {index === 0 ? <ShieldCheck className="h-5 w-5" /> : index === 1 ? <Award className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
              </div>
              <h3 className="text-base font-extrabold text-stone-900">{item.title}</h3>
              <p className="text-xs text-stone-500 font-semibold leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Interactive Team Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold font-mono tracking-widest text-pink-600 uppercase px-2.5 py-1 bg-pink-50 border border-pink-100 rounded-full">Masters of Art</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-stone-900 mt-3">Our Elite Styling Team</h2>
            <div className="h-1 w-12 bg-pink-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="about-team-grid">
            {STYLISTS.map((st) => (
              <div key={st.id} className="bg-white border border-pink-100 rounded-2xl overflow-hidden group flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="relative h-64 overflow-hidden bg-pink-50">
                    <img 
                      src={st.image} 
                      alt={st.name} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 border border-pink-100 rounded-full text-xs text-pink-600 font-mono font-bold shadow-sm">
                      {st.experience}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-base font-bold text-stone-900">{st.name}</h4>
                    <span className="text-xs text-pink-600 font-mono font-bold block">{st.role}</span>
                    <p className="text-xs text-stone-500 leading-relaxed font-semibold pt-2 line-clamp-3 italic">
                      "{st.bio}"
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 bg-[#fffcfc] border-t border-pink-50 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-pink-500 text-pink-500" />
                    <span className="text-[11.5px] font-bold text-stone-700">{st.rating} Rating</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {st.specialty.slice(0, 1).map((sp) => (
                      <span key={sp} className="bg-white px-2.5 py-1 text-[9.5px] text-stone-500 border border-pink-100 font-bold rounded-lg uppercase tracking-wide">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salon Interior Showcase */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-pink-600 uppercase px-2.5 py-1 bg-pink-50 border border-pink-50 rounded-full">Interactive Walkthrough</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black text-stone-900 mt-2">Our Kelkar Road Ambiance</h2>
            <div className="h-1 w-12 bg-pink-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="interior-gallery">
            {interiorPhotos.map((p, idx) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group border border-pink-150 shadow-sm">
                <img 
                  src={p.url} 
                  alt={p.tag} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-pink-605 text-pink-600 border border-pink-100 px-4 py-2.5 bg-white rounded-xl shadow-lg">
                    {p.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
