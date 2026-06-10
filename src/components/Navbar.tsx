import { useState } from 'react';
import { Menu, X, Phone, ShoppingBag, Calendar, Scissors, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  cartCount: number;
  openCart: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, cartCount, openCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'shop', label: 'Shop Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Style Guide' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => {
              setCurrentPage('home');
              setIsOpen(false);
            }} 
            className="flex items-center gap-2.5 cursor-pointer group select-none"
            id="nav-logo-container"
          >
            <div className="bg-pink-50 p-2 rounded-xl border border-pink-100 group-hover:bg-pink-100 group-hover:border-pink-200 transition-all">
              <Scissors className="h-6 w-6 text-pink-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-stone-900 block leading-tight">
                Professionnel <span className="text-pink-600 font-extrabold">Unisex Salon</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#caa0a0] block -mt-1 uppercase font-bold">
                Premium Experiences • Dadar
              </span>
            </div>
          </div>

          {/* Minimal Top Header Action Corner */}
          <div className="flex items-center gap-2.5 sm:gap-4" id="nav-action-corner">
            {/* Elegant Cart Button always accessible */}
            <button
              onClick={openCart}
              className="relative p-2 text-stone-600 hover:text-pink-600 hover:bg-pink-50/50 rounded-full border border-transparent hover:border-pink-100 transition-all cursor-pointer"
              id="open-cart-btn"
              title="View Cart"
            >
              <div className="relative">
                <ShoppingBag className="h-5.5 w-5.5 text-stone-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[10px] font-black font-mono h-4.5 w-4.5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Premium Three-Line Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-pink-50 hover:bg-pink-100 border border-pink-100/60 rounded-full text-stone-800 hover:text-pink-600 font-bold text-xs sm:text-sm cursor-pointer transition-all active:scale-95"
              id="navbar-hamburger-trigger"
              aria-label="Open Navigation Directory"
            >
              <Menu className="h-4.5 w-4.5 text-pink-600" />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Menu Overlay & Drawer using motion */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden" id="navigation-drawer-portal">
            {/* Soft Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-stone-900/35 backdrop-blur-sm"
            />

            {/* Sliding Drawer Container */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
              >
                {/* Header inside drawer */}
                <div className="px-6 py-6 border-b border-pink-50/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="h-5 w-5 text-pink-500" />
                    <span className="font-serif italic font-semibold text-lg text-stone-900">
                      Explore Directory
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="h-10 w-10 border border-pink-100 bg-pink-50/20 hover:bg-pink-50 hover:text-pink-600 rounded-full flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Directory Navigation Links (Highly Readable List) */}
                <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#caa0a0] uppercase font-bold block mb-4">
                    Main Directory Pages
                  </span>
                  <div className="space-y-1">
                    {navItems.map((item, idx) => {
                      const isActive = currentPage === item.id;
                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => {
                            setCurrentPage(item.id);
                            setIsOpen(false);
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className={`w-full text-left px-5 py-3.5 rounded-xl text-base font-bold transition-all flex items-center justify-between cursor-pointer ${
                            isActive
                              ? 'bg-pink-500 text-white shadow-md shadow-pink-550/10'
                              : 'text-stone-700 hover:bg-pink-50/40 hover:text-pink-600'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className={`${isActive ? 'text-white' : 'text-stone-300'}`}>•</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Info & Call-To-Action Block inside the drawer */}
                <div className="p-6 bg-pink-50/30 border-t border-pink-50 space-y-5">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-widest text-pink-605 text-pink-500 uppercase font-black block">
                      Reservations & Assistance
                    </span>

                    {/* Clean Contact Row */}
                    <a 
                      href="tel:+919322964354"
                      className="flex items-center gap-3 p-3 bg-white border border-pink-100 rounded-xl hover:border-pink-300 transition-colors cursor-pointer group"
                    >
                      <div className="bg-pink-50 p-2 rounded-lg text-pink-600 group-hover:scale-105 transition-transform">
                        <Phone className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block font-semibold leading-tight">Instant Hot-Line</span>
                        <span className="text-sm font-bold text-stone-850 group-hover:text-pink-600">+91 93229 64354</span>
                      </div>
                    </a>

                    {/* Salon Location Details */}
                    <div className="flex items-start gap-3 p-3 bg-white border border-pink-50 rounded-xl">
                      <div className="bg-pink-50 p-2 rounded-lg text-pink-500 shrink-0">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block font-semibold leading-tight">Our Atelier</span>
                        <span className="text-xs font-semibold text-stone-700 leading-snug">
                          Dadar East, Near Railway Station, Mumbai, India
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Appointment Booking */}
                  <button
                    onClick={() => {
                      setCurrentPage('book');
                      setIsOpen(false);
                    }}
                    className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-lg hover:shadow-pink-500/20 active:scale-98 transition-all cursor-pointer min-h-[48px]"
                    id="drawer-book-now-cta"
                  >
                    <Calendar className="h-4.5 w-4.5" />
                    Book Bespoke Appointment
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}

