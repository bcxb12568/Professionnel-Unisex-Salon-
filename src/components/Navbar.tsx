import { useState } from 'react';
import { Menu, X, Phone, ShoppingBag, Calendar, Scissors } from 'lucide-react';

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
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="bg-pink-50 p-2 rounded-lg border border-pink-100 group-hover:border-pink-300 transition-all">
              <Scissors className="h-6 w-6 text-pink-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-sans font-bold text-base tracking-tight text-stone-900 block leading-tight">
                Professionnel <span className="text-pink-600 font-extrabold block sm:inline">Unisex Salon</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-pink-500 block -mt-1 uppercase font-bold">
                Premium Salon • Dadar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" id="nav-desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`text-sm font-semibold transition-all relative py-2 ${
                  currentPage === item.id 
                    ? 'text-pink-600 font-bold' 
                    : 'text-stone-600 hover:text-pink-600'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Utility Buttons */}
          <div className="hidden lg:flex items-center gap-4" id="nav-utility-container">
            {/* Click to Call */}
            <a 
              href="tel:+919322964354"
              className="flex items-center gap-2 text-stone-600 hover:text-pink-600 transition-colors text-sm font-semibold"
              id="call-us-link"
            >
              <div className="bg-pink-50 p-2 rounded-full border border-pink-100">
                <Phone className="h-4 w-4 text-pink-600" />
              </div>
              <span>+91 93229 64354</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 text-stone-600 hover:text-pink-600 transition-colors"
              id="open-cart-btn"
            >
              <div className="bg-pink-50 p-2 rounded-full border border-pink-100">
                <ShoppingBag className="h-4 w-4 text-stone-800" />
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold font-mono h-5 w-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Booking Button */}
            <button
              onClick={() => setCurrentPage('book')}
              className="px-5 py-2.5 bg-pink-500 text-white font-bold text-sm rounded-lg hover:bg-pink-600 transition-all flex items-center gap-2 shadow-md hover:shadow-pink-500/15 cursor-pointer"
              id="book-appointment-navbar-btn"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-3" id="nav-mobile-controls">
            {/* Mobile Call */}
            <a 
              href="tel:+919322964354"
              className="p-2.5 text-pink-600 bg-pink-50 border border-pink-100 rounded-lg shrink-0 min-h-[44px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5" />
            </a>

            {/* Mobile Cart */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-[#fff] bg-pink-50 border border-pink-100 rounded-lg shrink-0 min-h-[44px] flex items-center justify-center"
            >
              <ShoppingBag className="h-5 w-5 text-stone-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold h-4.5 w-4.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-stone-700 bg-pink-50 border border-pink-100 rounded-lg hover:text-pink-650 min-h-[44px] flex items-center justify-center"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-pink-150 bg-white px-4 pt-2 pb-6 space-y-2 animate-fade-in" id="nav-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === item.id 
                  ? 'bg-pink-500/10 text-pink-600 border-l-4 border-pink-500' 
                  : 'text-stone-700 hover:bg-pink-50/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-pink-50">
            <button
              onClick={() => {
                setCurrentPage('book');
                setIsOpen(false);
              }}
              className="w-full text-center py-3 bg-pink-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 min-h-[44px]"
              id="mobile-book-now-btn"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
