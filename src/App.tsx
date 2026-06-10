import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ServicesPage from './components/ServicesPage';
import ShopPage from './components/ShopPage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';
import { Product, CartItem } from './types';
import { Phone, MapPin, Sparkles, Instagram, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  
  // Shopping Cart States
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Reservation list states
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

  // Cart Management Functions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open cart drawer for immediate visual confirmation
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) => 
      prev.map((item) => item.product.id === productId ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => setCart([]);

  // Reservation list functions
  const toggleServiceForBooking = (serviceId: string) => {
    setSelectedServiceIds((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      }
      return [...prev, serviceId];
    });
  };

  const clearBookingBasket = () => setSelectedServiceIds([]);

  const cardCountTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Homepage 
            setCurrentPage={setCurrentPage} 
            setSelectedCategory={setSelectedCategory} 
          />
        );
      case 'services':
        return (
          <ServicesPage
            setCurrentPage={setCurrentPage}
            selectedServicesForBooking={selectedServiceIds}
            toggleServiceForBooking={toggleServiceForBooking}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'shop':
        return (
          <ShopPage
            setCurrentPage={setCurrentPage}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            clearCart={clearCart}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />
        );
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'book':
        return (
          <BookingPage
            setCurrentPage={setCurrentPage}
            selectedServiceIds={selectedServiceIds}
            toggleServiceForBooking={toggleServiceForBooking}
            clearBookingBasket={clearBookingBasket}
          />
        );
      default:
        return (
          <Homepage 
            setCurrentPage={setCurrentPage} 
            setSelectedCategory={setSelectedCategory} 
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fff8f8] text-stone-800 font-sans tracking-tight selection:bg-pink-500 selection:text-white">
      {/* Dynamic Header navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cardCountTotal}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Pages Holder */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Footer block */}
      <footer className="bg-white border-t border-pink-100 text-stone-600 py-16" id="salon-global-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-pink-50 pb-12">
          
          {/* Logo Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-lg tracking-wider text-stone-950">
                Professionnel <span className="text-pink-600">Unisex Salon</span>
              </span>
            </div>
            <p className="text-xs text-stone-550 leading-relaxed">
              Dadar West’s elite unisex workstation setting world-class hair, skincare, and chemical treatment safety practices.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#777]">
              <a href="tel:+919322964354" className="hover:text-pink-600 transition-colors">
                <Phone className="h-4 w-4" />
              </a>
              <a href="https://maps.google.com" className="hover:text-pink-600 transition-colors">
                <MapPin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Service Categories Quicklinks */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-700 font-mono mb-4">
              Treatment Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-xs">
              {['Hair Care', 'Hair Color & Highlights', 'Skin & Facial', 'Beard Grooming'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage('services');
                    }}
                    className="hover:text-pink-600 text-stone-600 transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-700 font-mono mb-4">
              Salon Operations
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'gallery', label: 'Art Portfolios' },
                { id: 'about', label: 'History & Crew' },
                { id: 'blog', label: 'Mumbai Style Guides' },
                { id: 'contact', label: 'Coordinates Map' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="hover:text-pink-600 text-stone-600 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Outbound CTAs */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-700 font-mono mb-2">
              Ready to Upgrade?
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Same-day reservations available. Autoclave sanitized workstations waiting for you.
            </p>
            <button
              onClick={() => setCurrentPage('book')}
              className="w-full py-2.5 bg-pink-50 border border-pink-100 hover:border-pink-300 text-pink-700 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="h-4 w-4 text-pink-600" />
              Launch Reservation Stepper
            </button>
          </div>

        </div>

        {/* Bottom Bar copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <span>
            © 2026 Professionnel Unisex Salon Dadar. All rights reserved.
          </span>
          <div className="flex gap-4">
            <span className="hover:text-pink-600 cursor-pointer">Hygiene Autoclave Certified</span>
            <span>•</span>
            <span className="hover:text-pink-600 cursor-pointer">Unisex Services Standard</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
