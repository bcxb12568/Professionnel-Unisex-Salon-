import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Star, Flame, Plus, Minus, Trash2, Check, ShieldCheck, X, CreditCard, Sparkles, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product, CartItem } from '../types';

interface ShopPageProps {
  setCurrentPage: (page: string) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function ShopPage({
  setCurrentPage,
  cart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  isCartOpen,
  setIsCartOpen
}: ShopPageProps) {
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shampoo', name: 'Shampoos' },
    { id: 'conditioner', name: 'Conditioners & Masques' },
    { id: 'serum', name: 'Serums' },
    { id: 'oil', name: 'Hair & Scalp Oils' },
    { id: 'beard', name: 'Beard Grooming' },
    { id: 'face', name: 'Facial Skin Care' },
    { id: 'tools', name: 'Professional Tools' }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [couponError, setCouponError] = useState<string>('');
  
  // Checkout States
  const [checkoutStep, setCheckoutStep] = useState<'shopping' | 'paying' | 'success'>('shopping');
  const [paymentForm, setPaymentForm] = useState({
    name: 'Md Sahkib Khan',
    email: 'mdsahkibkhan6@gmail.com',
    phone: '+91 93229 64354',
  });
  
  const [razorpaySuccessDetails, setRazorpaySuccessDetails] = useState<{
    orderId: string;
    discountCode: string;
    discountDetails: string;
  } | null>(null);

  const filteredProducts = PRODUCTS.filter(prod => {
    return activeCategory === 'all' || prod.category === activeCategory;
  });

  const cartSubtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const discountAmount = promoApplied ? Math.round(cartSubtotal * 0.1) : 0; // 10% discount
  const cartTotal = cartSubtotal - discountAmount;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'LUXESHOP10' || promoCode.trim().toUpperCase() === 'SALONDUOST26') {
      setPromoApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try LUXESHOP10 for 10% off!');
    }
  };

  const handleSimulatePayment = () => {
    setCheckoutStep('paying');
    // Simulate Razorpay Gateway overlay delay
    setTimeout(() => {
      const orderId = 'pay_DADAR_' + Math.floor(Math.random() * 100000000);
      const discountCodeForSalon = 'SALONGLOW20_REV';
      setRazorpaySuccessDetails({
        orderId,
        discountCode: discountCodeForSalon,
        discountDetails: 'Show this code at Luxe Unisex Dadar to get 20% discount on any Salon haircut/spa service!'
      });
      setCheckoutStep('success');
      clearCart();
    }, 2500);
  };

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

        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-100">
            Professional Cosmetics Shop
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-stone-900 mt-3">
            Salon-Grade Premium Collections
          </h1>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
          <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Secure your preferred premium formula packs here and collect them directly at our Dadar Salon counter desk. Get discount bundle codes for dynamic workstation slots!
          </p>
        </div>

        {/* Promo Code Top Header Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-pink-100 mb-12 items-center shadow-sm">
          <div>
            <span className="bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              Exclusive Online Offer 🎁
            </span>
            <h3 className="text-lg font-bold font-sans text-stone-900 mt-2">
              Buy Products & Get Salon Appointment Discounts
            </h3>
            <p className="text-sm text-stone-500 mt-1 font-medium">
              Every checkout automatically generates an exclusive <span className="text-pink-600 font-extrabold font-mono">20% off discount voucher</span> for your next haircut or facial in our Dadar workstation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-end">
            <span className="text-xs text-stone-500 font-semibold">Use shop entry discount coupon:</span>
            <span className="px-4 py-2 bg-pink-50 border border-pink-100/80 text-pink-600 font-mono font-bold text-sm rounded-xl">
              LUXESHOP10
            </span>
          </div>
        </div>

        {/* Page structure */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Categories select sidebar */}
          <div className="w-full lg:w-1/4 space-y-4 shrink-0">
            <span className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block px-2">
              Browse Category
            </span>
            <div className="bg-white p-4 rounded-2xl border border-pink-100 space-y-1 shadow-sm" id="shop-categories-sidebar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-pink-500 text-white font-extrabold shadow-sm'
                      : 'text-stone-700 hover:bg-pink-50/50 hover:text-pink-650'
                  }`}
                >
                  <span>{cat.name}</span>
                  {activeCategory === cat.id && <ShoppingBag className="h-4 w-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid column */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="products-catalog-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-pink-100 rounded-2xl overflow-hidden flex flex-col justify-between group relative shadow-sm hover:shadow-md transition-all h-full"
                  id={`product-item-${product.id}`}
                >
                  {product.isBestSeller && (
                    <span className="absolute top-4 left-4 z-10 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Flame className="h-3 w-3 fill-white" />
                      Best Seller
                    </span>
                  )}
                  
                  {/* Photo */}
                  <div className="relative h-56 bg-pink-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details block */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-pink-600 uppercase font-mono tracking-widest font-black">
                          {product.brand}
                        </span>
                        <span className="flex items-center gap-0.5 text-xs text-pink-600 font-bold font-mono">
                          <Star className="h-3.5 w-3.5 fill-pink-500 text-pink-500" />
                          {product.rating}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-sm sm:text-base text-stone-900 mt-1 line-clamp-1 group-hover:text-pink-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed font-semibold">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-pink-50 flex items-center justify-between">
                      <div>
                        {product.originalPrice > product.price && (
                          <span className="text-[10px] text-stone-400 line-through block font-mono">
                            ₹{product.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-black text-pink-750 text-pink-600 font-sans">
                          ₹{product.price}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => addToCart(product)}
                        className="px-4 py-2 bg-pink-50 hover:bg-pink-500 hover:text-white text-pink-600 border border-pink-100 hover:border-pink-500 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer min-h-[38px]"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Cart Slider Drawer Component (AnimatePresence) */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            />

            {/* Slider Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-white border-l border-pink-100 text-stone-800 flex flex-col justify-between shadow-2xl"
              id="shopping-cart-drawer"
            >
              {/* Header */}
              <div className="p-6 border-b border-pink-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-pink-600" />
                  <h3 className="text-lg font-sans font-black text-stone-900">Your Shopping Bag</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-stone-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {checkoutStep === 'shopping' && (
                  <>
                    {cart.length === 0 ? (
                      <div className="text-center py-16">
                        <ShoppingBag className="h-12 w-12 text-pink-200 mx-auto mb-4" />
                        <h4 className="text-base font-bold text-stone-700">Your bag is empty</h4>
                        <p className="text-xs text-stone-500 mt-2 max-w-xs mx-auto font-semibold">
                          Choose professional formulas from our catalog to upgrade your hair structure wellness.
                        </p>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="mt-6 px-5 py-3 bg-pink-500 text-white text-xs font-bold rounded-xl shadow cursor-pointer min-h-[44px]"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4" id="cart-items-container">
                        {cart.map((item) => (
                          <div
                            key={item.product.id}
                            className="bg-[#fffcfc] p-4 rounded-2xl border border-pink-100 flex gap-4"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-xl border border-pink-105 bg-pink-50"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h5 className="text-sm font-extrabold text-stone-900 line-clamp-1">{item.product.name}</h5>
                                <span className="text-[10px] text-pink-600 font-extrabold block mt-0.5">{item.product.brand}</span>
                              </div>

                              <div className="flex items-center justify-between mt-3">
                                {/* Quantity Toggles */}
                                <div className="flex items-center gap-1.5 bg-white border border-pink-100 px-2 py-1 rounded-xl">
                                  <button
                                    onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                                    className="p-1 text-stone-500 hover:text-pink-600"
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="text-xs font-mono font-bold px-1 text-pink-605 text-pink-600">{item.quantity}</span>
                                  <button
                                    onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                                    className="p-1 text-stone-500 hover:text-pink-600"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>

                                {/* Price & Trash */}
                                <div className="flex items-center gap-3">
                                  <span className="text-sm font-black text-pink-650 text-pink-600 font-mono">₹{item.product.price * item.quantity}</span>
                                  <button
                                    onClick={() => removeFromCart(item.product.id)}
                                    className="text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {checkoutStep === 'paying' && (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                    {/* Simulated Razorpay Overlay */}
                    <div className="w-16 h-16 border-t-4 border-b-4 border-pink-500 rounded-full animate-spin" />
                    <div>
                      <h4 className="text-lg font-bold text-stone-900 flex items-center justify-center gap-2">
                        <CreditCard className="h-5 w-5 text-pink-500 animate-pulse" />
                        Razorpay Secure Gateway
                      </h4>
                      <p className="text-xs text-stone-500 mt-2 max-w-xs font-semibold leading-relaxed">
                        Confirming balance and securing server keys for <span className="text-pink-600 font-extrabold">{paymentForm.name}</span>. Do not refresh or exit.
                      </p>
                    </div>
                  </div>
                )}

                {checkoutStep === 'success' && razorpaySuccessDetails && (
                  <div className="space-y-6 py-6" id="payment-success-pane">
                    <div className="text-center">
                      <div className="bg-emerald-50 p-4 rounded-full border border-emerald-200 text-emerald-500 inline-block shadow-sm">
                        <Check className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-black text-stone-900 mt-4">Selection Confirmed!</h4>
                      <p className="text-xs text-stone-500 mt-1 font-semibold">
                        Your professional formulations are reserved and ready for pickup at our Dadar salon counter shelf.
                      </p>
                    </div>

                    {/* Receipt Block */}
                    <div className="bg-[#fffbfe] p-5 rounded-2xl border border-pink-100 space-y-3 text-xs">
                      <div className="flex justify-between border-b border-pink-50 pb-2">
                        <span className="text-stone-400 font-semibold">Razorpay Transaction ID</span>
                        <span className="font-mono text-pink-600 font-bold">{razorpaySuccessDetails.orderId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-semibold">Authorized Pickup Person</span>
                        <span className="text-stone-800 font-bold">{paymentForm.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400 font-semibold">Contact Number</span>
                        <span className="text-stone-850 font-mono font-bold">{paymentForm.phone}</span>
                      </div>
                    </div>

                    {/* APPOINTMENT DISCOUNT COUPON */}
                    <div className="bg-pink-50/50 border-2 border-dashed border-pink-400/55 p-5 rounded-3xl text-center space-y-3 relative overflow-hidden">
                      <div className="absolute -top-6 -right-6 h-12 w-12 bg-pink-500/5 rotate-45" />
                      <span className="text-[10px] bg-pink-500 text-white uppercase font-black tracking-wider px-3.5 py-1 rounded-full inline-block font-mono">
                        SALON BUNDLE REWARD 🎉
                      </span>
                      <h5 className="text-sm font-extrabold text-stone-900">
                        20% Off Your Appointment Booking
                      </h5>
                      <p className="text-xs text-stone-500 leading-relaxed font-semibold">
                        {razorpaySuccessDetails.discountDetails}
                      </p>
                      
                      {/* Promo Copy Box */}
                      <div className="bg-white border border-pink-200 p-3 rounded-xl text-lg font-mono font-bold text-pink-600 tracking-wider shadow-sm">
                        {razorpaySuccessDetails.discountCode}
                      </div>
                      <span className="text-[9px] text-stone-400 block font-medium">
                        *Keep this code safe, you can enter it in the checkout booking stepper!
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setCheckoutStep('shopping');
                        setIsCartOpen(false);
                      }}
                      className="w-full py-3 bg-pink-50 hover:bg-pink-100 text-pink-600 text-sm font-bold border border-pink-100 rounded-xl transition-all cursor-pointer min-h-[44px]"
                    >
                      Back To Cosmetics Shop
                    </button>
                  </div>
                )}
              </div>

              {/* Checkout Calculation Footer Section */}
              {cart.length > 0 && checkoutStep === 'shopping' && (
                <div className="p-6 border-t border-pink-50 bg-[#fffbfc] space-y-4">
                  
                  {/* Coupon Area */}
                  <div className="space-y-1">
                    <label className="text-[10px] text-pink-600 font-extrabold block uppercase tracking-widest font-mono">
                      Apply Promotion Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. LUXESHOP10"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-white border border-pink-105 rounded-xl px-3 py-2 text-xs text-stone-800 font-mono focus:outline-none focus:border-pink-400 min-h-[38px]"
                        disabled={promoApplied}
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-pink-50 hover:bg-pink-100 border border-pink-100 text-pink-600 text-xs font-bold rounded-xl cursor-pointer min-h-[38px]"
                        disabled={promoApplied}
                      >
                        {promoApplied ? 'Applied' : 'Apply'}
                      </button>
                    </div>
                    {couponError && <span className="text-[10px] text-rose-500 font-semibold block">{couponError}</span>}
                  </div>

                  <div className="space-y-2 border-t border-pink-50 pt-3 text-sm">
                    <div className="flex justify-between text-stone-500 text-xs font-semibold">
                      <span>Products Subtotal</span>
                      <span className="font-mono text-stone-800">₹{cartSubtotal}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-xs text-emerald-600 font-semibold">
                        <span>Cart Coupon Discount (10% off)</span>
                        <span className="font-mono">-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-stone-500 text-xs font-semibold">
                      <span>Counter Collection / Pickup</span>
                      <span className="text-emerald-500 font-black font-mono">FREE</span>
                    </div>
                    <div className="flex justify-between border-t border-pink-50 pt-2 font-bold text-md text-stone-900">
                      <span>Total Amount</span>
                      <span className="text-pink-650 text-pink-600 font-mono">₹{cartTotal}</span>
                    </div>
                  </div>

                  {/* Customer Checkout Form */}
                  <div className="space-y-2 border-t border-pink-50 pt-3">
                    <span className="text-[10px] text-pink-600 font-extrabold uppercase block font-mono">Pickup Person Verification Details</span>
                    <input
                      type="text"
                      value={paymentForm.name}
                      onChange={(e) => setPaymentForm({ ...paymentForm, name: e.target.value })}
                      placeholder="Authorized Signature / Full Name"
                      className="w-full bg-white border border-pink-100 rounded-xl p-2.5 text-xs text-stone-800 focus:border-pink-300 min-h-[38px]"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={paymentForm.phone}
                        onChange={(e) => setPaymentForm({ ...paymentForm, phone: e.target.value })}
                        placeholder="Mobile Number"
                        className="bg-white border border-pink-100 rounded-xl p-2.5 text-xs text-stone-800 font-mono focus:border-pink-300 min-h-[38px]"
                      />
                      <input
                        type="email"
                        value={paymentForm.email}
                        onChange={(e) => setPaymentForm({ ...paymentForm, email: e.target.value })}
                        placeholder="Email Address"
                        className="bg-white border border-pink-100 rounded-xl p-2.5 text-xs text-stone-800 focus:border-pink-300 min-h-[38px]"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    className="w-full py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-sans font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-pink-500/20 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <ShieldCheck className="h-4.5 w-4.5" />
                    Secure Pay via Razorpay (₹{cartTotal})
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
