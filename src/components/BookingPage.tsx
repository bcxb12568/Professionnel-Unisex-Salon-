import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, STYLISTS } from '../data';
import { Service, Stylist, Booking } from '../types';
import { 
  Calendar as CalendarIcon, User, Sparkles, Check, ChevronRight, 
  ChevronLeft, Users, Clock, Scissors, ShieldCheck, Phone, Mail, 
  MessageSquare, Sliders, Ticket, AlertCircle
} from 'lucide-react';

interface BookingPageProps {
  setCurrentPage: (page: string) => void;
  selectedServiceIds: string[];
  toggleServiceForBooking: (id: string) => void;
  clearBookingBasket: () => void;
}

export default function BookingPage({
  setCurrentPage,
  selectedServiceIds,
  toggleServiceForBooking,
  clearBookingBasket
}: BookingPageProps) {
  
  // High fidelity Stepper Step Counter (1 to 5)
  const [step, setStep] = useState<number>(1);
  const [selectedStylistId, setSelectedStylistId] = useState<string>('st_any');
  
  // Date and Time Choices
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Customer Contact Fields
  const [customerForm, setCustomerForm] = useState({
    name: 'Md Sahkib Khan',
    phone: '+91 93229 64354',
    email: 'mdsahkibkhan6@gmail.com',
    notes: '',
    paymentType: 'pay_at_salon' as 'deposit' | 'pay_at_salon',
    couponCode: ''
  });

  const [activeCouponApplied, setActiveCouponApplied] = useState<boolean>(false);
  const [couponFeedback, setCouponFeedback] = useState<string>('');
  const [finalBookingResult, setFinalBookingResult] = useState<Booking | null>(null);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);

  // Generate dynamic 14-days calendar starting from current local date 2026-06-10
  const calendarDays: string[] = [];
  const baseDate = new Date('2026-06-10');
  for (let i = 0; i < 14; i++) {
    const nextDay = new Date(baseDate);
    nextDay.setDate(baseDate.getDate() + i);
    const dateStr = nextDay.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    calendarDays.push(dateStr);
  }

  // Pre-fill first date
  useEffect(() => {
    if (!selectedDate && calendarDays.length > 0) {
      setSelectedDate(calendarDays[0]);
    }
  }, []);

  const timeSlots = [
    { time: '10:00 AM', status: 'available' },
    { time: '11:15 AM', status: 'popular' },
    { time: '12:30 PM', status: 'last_spot' },
    { time: '02:00 PM', status: 'available' },
    { time: '03:15 PM', status: 'available' },
    { time: '04:30 PM', status: 'popular' },
    { time: '05:45 PM', status: 'available' },
    { time: '07:00 PM', status: 'last_spot' }
  ];

  // Calculate pricing
  const bookedServices = SERVICES.filter(s => selectedServiceIds.includes(s.id));
  const subtotalCost = bookedServices.reduce((total, s) => total + s.price, 0);
  const totalMinutes = bookedServices.reduce((total, s) => total + s.duration, 0);
  
  // Calculate discount based on coupons: 'SALONGLOW20_REV' or generic 'SALONGLOW20'
  const discountRate = activeCouponApplied ? 0.20 : 0;
  const discountTotal = Math.round(subtotalCost * discountRate);
  const finalCostAmount = subtotalCost - discountTotal;

  const selectedStylist = STYLISTS.find(st => st.id === selectedStylistId) || {
    id: 'st_any',
    name: 'Any Available Specialist (Fastest)',
    role: 'Our closest matches for the hour',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    experience: 'Expert standards'
  };

  const handleValidateCoupon = () => {
    const code = customerForm.couponCode.trim().toUpperCase();
    if (code === 'SALONGLOW20_REV' || code === 'SALONDUOST26' || code === 'SALONGLOW20') {
      setActiveCouponApplied(true);
      setCouponFeedback('Hurrah! Exclusive 20% appointment discount code active.');
    } else {
      setCouponFeedback('Coupon check failed. Try SALONGLOW20 for standard 20% off!');
      setActiveCouponApplied(false);
    }
  };

  const handleCreateAppointment = () => {
    if (!selectedTime) {
      alert('Please choose a preferred slot.');
      return;
    }
    
    setIsFinishing(true);
    
    setTimeout(() => {
      const generatedId = 'BK_DADAR_' + Math.floor(100000 + Math.random() * 900000);
      const newBooking: Booking = {
        id: generatedId,
        serviceIds: selectedServiceIds,
        stylistId: selectedStylistId,
        date: selectedDate,
        time: selectedTime,
        customerName: customerForm.name,
        customerPhone: customerForm.phone,
        customerEmail: customerForm.email,
        notes: customerForm.notes,
        paymentType: customerForm.paymentType,
        amountPaid: customerForm.paymentType === 'deposit' ? 500 : 0,
        totalAmount: finalCostAmount,
        status: 'confirmed'
      };

      setFinalBookingResult(newBooking);
      setIsFinishing(false);
      setStep(5); // Show success terminal
    }, 2000);
  };

  return (
    <div className="bg-[#fff8f8] text-stone-800 min-h-screen py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-8 h-11 w-11 bg-white border border-pink-100 hover:border-pink-300 hover:text-pink-600 text-pink-600 rounded-full transition-all flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
          aria-label="Back to Home"
        >
          <ChevronLeft className="h-6 w-6 text-pink-600" />
        </button>

        {/* Header stepper path header */}
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-105">
            Automated Reservation Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-sans font-black text-stone-900 mt-2">
            Configure Your Workstation Slot
          </h1>
          
          {/* Steps Breadcrumbs */}
          {step < 5 && (
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm font-semibold max-w-xl mx-auto" id="scheduler-breadcrumb">
              {[
                { s: 1, label: 'Services' },
                { s: 2, label: 'Therapist' },
                { s: 3, label: 'Date & Clock' },
                { s: 4, label: 'Finish' }
              ].map((item) => {
                const isClickable = selectedServiceIds.length > 0 || item.s === 1;
                return (
                  <button
                    key={item.s}
                    disabled={!isClickable}
                    onClick={() => isClickable && setStep(item.s)}
                    className={`flex items-center gap-1.5 font-medium transition-all focus:outline-none border-none bg-transparent p-0 ${
                      isClickable 
                        ? 'cursor-pointer hover:opacity-80 active:scale-95' 
                        : 'cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center font-mono font-extrabold ${
                      step === item.s 
                        ? 'bg-pink-500 text-white shadow-md' 
                        : step > item.s 
                          ? 'bg-pink-100 text-pink-600 border border-pink-200' 
                          : 'bg-white text-stone-400 border border-pink-100'
                    }`}>
                      {item.s}
                    </div>
                    <span className={step === item.s ? 'text-pink-600 font-extrabold' : 'text-stone-500'}>
                      {item.label}
                    </span>
                    {item.s < 4 && <ChevronRight className="h-3.5 w-3.5 text-stone-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Dynamic Step Panels */}
        <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm">
          
          {/* STEP 1: SERVICES SELECTOR */}
          {step === 1 && (
            <div className="p-6 sm:p-8 space-y-6" id="booking-step-1">
              <div>
                <h3 className="text-xl font-bold font-sans text-stone-900">Select Grooming Operations</h3>
                <p className="text-xs text-stone-500 mt-1 font-medium">
                  You can stack multiple services for a complete luxury day makeover.
                </p>
              </div>

              {/* Basket list */}
              <div className="space-y-3">
                {SERVICES.map((s) => {
                  const isChecked = selectedServiceIds.includes(s.id);
                  return (
                    <div 
                      key={s.id} 
                      onClick={() => toggleServiceForBooking(s.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked 
                          ? 'bg-pink-50/70 border-pink-400 text-pink-700' 
                          : 'bg-[#fffcfc] border-pink-100 text-stone-800 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={s.image} 
                          alt={s.name} 
                          className="h-12 w-12 rounded-xl object-cover bg-pink-100 shrink-0 border border-pink-100/55"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="text-[10px] text-pink-600 font-extrabold font-mono block uppercase">{s.category}</span>
                          <span className="text-sm font-bold text-stone-900">{s.name}</span>
                          <span className="text-xs text-stone-500 block font-semibold">{s.duration} mins</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-black text-pink-605 text-pink-600">₹{s.price}</span>
                        <div className={`h-5 w-5 rounded-lg border flex items-center justify-center ${
                          isChecked ? 'bg-pink-500 border-pink-500 text-white' : 'border-pink-300 bg-white'
                        }`}>
                          {isChecked && <Check className="h-4 w-4 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step Navigation */}
              <div className="pt-6 border-t border-pink-50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 font-bold font-mono">Bag Volume:</span>
                  <span className="text-sm font-extrabold text-stone-805 text-stone-800 block">
                    {selectedServiceIds.length} Service(s) • {totalMinutes} Mins
                  </span>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-650 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow cursor-pointer min-h-[44px]"
                  disabled={selectedServiceIds.length === 0}
                >
                  Choose Expert Stylist
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: STYLIST SELECTION */}
          {step === 2 && (
            <div className="p-6 sm:p-8 space-y-6" id="booking-step-2">
              <div>
                <h3 className="text-xl font-bold font-sans text-stone-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-pink-500" />
                  Select Grooming Specialist
                </h3>
                <p className="text-xs text-stone-500 mt-1 font-medium">
                  Each specialist brings years of certified knowledge in Indian hair and skin chemistry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Any Stylist Option */}
                <div
                  onClick={() => setSelectedStylistId('st_any')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 items-center ${
                    selectedStylistId === 'st_any'
                      ? 'bg-pink-50 border-pink-400 text-pink-700'
                      : 'bg-[#fffcfc] border-pink-100 text-stone-800 hover:border-pink-300'
                  }`}
                >
                  <div className="h-14 w-14 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Any Available Specialist</h4>
                    <p className="text-xs text-stone-500 mt-1 font-medium leading-normal">
                      Fastest booking allocation matching your choice criteria.
                    </p>
                  </div>
                </div>

                {/* Actual Stylists */}
                {STYLISTS.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => setSelectedStylistId(st.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 ${
                      selectedStylistId === st.id
                        ? 'bg-pink-50 border-pink-400 text-pink-700'
                        : 'bg-[#fffcfc] border-pink-100 text-stone-800 hover:border-pink-300'
                    }`}
                  >
                    <img
                      src={st.image}
                      alt={st.name}
                      className="h-14 w-14 rounded-full object-cover border border-pink-100 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 justify-between">
                        <h4 className="text-sm font-bold text-stone-900">{st.name}</h4>
                        <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full font-mono font-bold">
                          {st.experience}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-0.5 font-medium">{st.role}</span>
                      
                      {/* Specialties tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {st.specialty.slice(0, 2).map((sp) => (
                          <span key={sp} className="text-[9px] bg-white px-2 py-0.5 border border-pink-100 text-stone-500 rounded-md font-semibold">
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions navigation */}
              <div className="pt-6 border-t border-pink-50 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-white border border-pink-150 rounded-xl text-xs font-bold text-stone-600 hover:bg-pink-50/50 cursor-pointer min-h-[38px]"
                >
                  <ChevronLeft className="h-4 w-4 inline mr-1" />
                  Review Services
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow cursor-pointer min-h-[44px]"
                >
                  Select Date & Clock
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME SELECTOR */}
          {step === 3 && (
            <div className="p-6 sm:p-8 space-y-6" id="booking-step-3">
              <div>
                <h3 className="text-xl font-bold font-sans text-stone-900">Pick Date & Time Slot</h3>
                <p className="text-xs text-stone-500 mt-1 font-medium">
                  Availability is updated live based on current Dadar specialist roster.
                </p>
              </div>

              {/* Custom Date Carousel Selector */}
              <div>
                <label className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block mb-3">
                  Scheduled Date Selection
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="date-selector-grid">
                  {calendarDays.map((dateStr) => {
                    const isSelected = selectedDate === dateStr;
                    return (
                      <div
                        key={dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-pink-500 border-pink-500 text-white font-extrabold shadow-sm'
                            : 'bg-[#fffcfc] border-pink-100 hover:border-pink-300 text-stone-700 font-semibold'
                        }`}
                      >
                        <span className="text-[11px] uppercase tracking-wide block font-mono">
                          {dateStr.split(',')[0]}
                        </span>
                        <span className="text-sm font-extrabold block mt-1">
                          {dateStr.split(',')[1].replace(' ', '')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots grid */}
              <div className="space-y-3">
                <label className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block">
                  Available Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="time-selector-grid">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot.time;
                    return (
                      <div
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-pink-500 border-pink-500 text-white font-extrabold shadow-sm'
                            : 'bg-[#fffcfc] border-pink-100 hover:border-pink-300 text-stone-700'
                        }`}
                      >
                        <span className="text-sm font-bold block">{slot.time}</span>
                        <span className={`text-[9.5px] uppercase font-mono tracking-wider block mt-1 ${
                          slot.status === 'popular'
                            ? 'text-pink-600 font-bold'
                            : slot.status === 'last_spot'
                              ? 'text-rose-500 font-extrabold'
                              : 'text-emerald-600 font-bold'
                        }`}>
                          {slot.status === 'popular' ? 'Popular' : slot.status === 'last_spot' ? 'Last Slot!' : 'Ready'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-pink-50 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-white border border-pink-150 rounded-xl text-xs font-bold text-stone-600 hover:bg-pink-50/50 cursor-pointer min-h-[38px]"
                >
                  <ChevronLeft className="h-4 w-4 inline mr-1" />
                  Stylist Selection
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow cursor-pointer min-h-[44px]"
                  disabled={!selectedTime}
                >
                  Finish Confirmation
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CUSTOMER DETAILS & CHOOSE PAYMENT */}
          {step === 4 && (
            <div className="p-6 sm:p-8 space-y-6" id="booking-step-4">
              <div>
                <h3 className="text-xl font-bold font-sans text-stone-900">Finish Appointment Configuration</h3>
                <p className="text-xs text-stone-500 mt-1 font-medium">
                  Enter details to trigger WhatsApp/SMS receipt automation locks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Form fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-extrabold text-pink-600 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      value={customerForm.name}
                      onChange={(e) => setCustomerForm({ ...customerForm, name: e.target.value })}
                      className="w-full bg-white border border-pink-100 rounded-xl p-3 text-sm text-stone-800 focus:border-pink-300 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-extrabold text-pink-600 block mb-1">WhatsApp Mobile</label>
                      <input
                        type="text"
                        value={customerForm.phone}
                        onChange={(e) => setCustomerForm({ ...customerForm, phone: e.target.value })}
                        className="w-full bg-white border border-pink-100 rounded-xl p-3 text-xs text-stone-800 font-mono focus:border-pink-300 focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold text-pink-600 block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={customerForm.email}
                        onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                        className="w-full bg-white border border-pink-100 rounded-xl p-3 text-xs text-stone-800 focus:border-pink-300 focus:outline-none min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-pink-600 block mb-1">Requests / Hair Texture Notes</label>
                    <textarea
                      value={customerForm.notes}
                      onChange={(e) => setCustomerForm({ ...customerForm, notes: e.target.value })}
                      rows={2}
                      placeholder="e.g. Sensitive skin, requesting Vikram..."
                      className="w-full bg-white border border-pink-100 rounded-xl p-3 text-xs text-stone-800 focus:border-pink-300 focus:outline-none"
                    />
                  </div>

                  {/* Coupon Box */}
                  <div>
                    <label className="text-xs font-extrabold text-pink-600 block mb-1">Enterprise Promos & Discount Codes</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customerForm.couponCode}
                        placeholder="e.g. SALONGLOW20"
                        onChange={(e) => setCustomerForm({ ...customerForm, couponCode: e.target.value })}
                        className="flex-1 bg-white border border-pink-100 rounded-xl px-3 py-2 text-xs text-stone-800 font-mono uppercase focus:border-pink-300 min-h-[38px]"
                        disabled={activeCouponApplied}
                      />
                      <button
                        onClick={handleValidateCoupon}
                        className="px-4 py-2 border border-pink-100 hover:border-pink-300 text-xs font-bold rounded-xl bg-pink-50 text-pink-650 transition-all cursor-pointer min-h-[38px]"
                        disabled={activeCouponApplied}
                      >
                        Check Code
                      </button>
                    </div>
                    {couponFeedback && <span className="text-[10px] text-pink-600 font-bold block mt-1">{couponFeedback}</span>}
                  </div>
                </div>

                {/* Pricing summary & Payment Type */}
                <div className="bg-[#fffbfe] p-5 rounded-2xl border border-pink-100 space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 pb-2 border-b border-pink-50">
                    Appointment Invoice Summary
                  </h4>

                  {/* Summary list */}
                  <div className="space-y-2 text-xs font-medium">
                    {bookedServices.map((bs) => (
                      <div key={bs.id} className="flex justify-between">
                        <span className="text-stone-500 line-clamp-1">{bs.name}</span>
                        <span className="font-mono text-stone-800">₹{bs.price}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>Assigned Expert Stylist</span>
                      <span className="text-stone-700 font-semibold">{selectedStylist.name.split(' (')[0]}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-stone-400 font-semibold">
                      <span>Scheduled Slot</span>
                      <span className="text-stone-700">{selectedDate.split(',')[1]} at {selectedTime}</span>
                    </div>

                    {activeCouponApplied && (
                      <div className="flex justify-between text-xs text-emerald-600 pt-2 border-t border-pink-50 font-bold">
                        <span>Promotional Discount Included (20%)</span>
                        <span className="font-mono font-bold">-₹{discountTotal}</span>
                      </div>
                    )}

                    <div className="flex justify-between border-t border-pink-50 pt-2 text-sm font-bold text-stone-800">
                      <span>Total Invoice Due</span>
                      <span className="text-pink-600 font-black font-mono text-base">₹{finalCostAmount}</span>
                    </div>
                  </div>

                  {/* Deposit Payment Toggles */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest font-black text-pink-600">
                      Payment Settlement Method
                    </span>

                    <div className="space-y-2">
                      <label className="flex items-start gap-2.5 p-2.5 bg-white border border-pink-100 rounded-xl cursor-pointer hover:border-pink-300">
                        <input
                          type="radio"
                          name="paymentType"
                          value="pay_at_salon"
                          checked={customerForm.paymentType === 'pay_at_salon'}
                          onChange={() => setCustomerForm({ ...customerForm, paymentType: 'pay_at_salon' })}
                          className="accent-pink-500 mt-1"
                        />
                        <div>
                          <span className="text-xs font-bold text-stone-900 block">Pay At Workstation Salon</span>
                          <span className="text-[10px] text-stone-500 block leading-tight font-medium">
                            Full settlement of ₹{finalCostAmount} at counter desk after treatment.
                          </span>
                        </div>
                      </label>

                      <label className="flex items-start gap-2.5 p-2.5 bg-white border border-pink-100 rounded-xl cursor-pointer hover:border-pink-300">
                        <input
                          type="radio"
                          name="paymentType"
                          value="deposit"
                          checked={customerForm.paymentType === 'deposit'}
                          onChange={() => setCustomerForm({ ...customerForm, paymentType: 'deposit' })}
                          className="accent-pink-500 mt-1"
                        />
                        <div>
                          <span className="text-xs font-bold text-pink-600 block">Advance Deposit Guard (₹500)</span>
                          <span className="text-[10px] text-stone-500 block leading-tight font-medium">
                            Pay ₹500 today to confirm. Pay remaining ₹{finalCostAmount - 500} after your style is complete.
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                </div>

              </div>

              {/* Stepper actions */}
              <div className="pt-6 border-t border-pink-50 flex items-center justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 bg-white border border-pink-150 rounded-xl text-xs font-bold text-stone-600 hover:bg-pink-50/50 cursor-pointer min-h-[38px]"
                >
                  <ChevronLeft className="h-4 w-4 inline mr-1" />
                  Date & Slot Selector
                </button>
                
                <button
                  onClick={handleCreateAppointment}
                  className="px-8 py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-extrabold rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer text-sm shadow-md min-h-[44px]"
                  disabled={isFinishing}
                >
                  {isFinishing ? (
                    <>
                      <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                      Creating Appointment Spot...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-4.5 w-4.5" />
                      {customerForm.paymentType === 'deposit' ? 'Pay Deposit ₹500 via Razorpay' : 'Confirm & Reserve Slot'}
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* SUCCESS TERMINAL */}
          {step === 5 && finalBookingResult && (
            <div className="p-6 sm:p-10 space-y-6" id="booking-success-screen">
              <div className="text-center">
                <div className="bg-emerald-50 p-4 rounded-full border border-emerald-200 text-emerald-500 inline-block">
                  <Check className="h-10 w-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-stone-900 mt-4">Appointment Locked In!</h3>
                <p className="text-xs text-pink-600 font-bold mt-1 font-mono">
                  Professionnel Unisex Salon, NC Kelkar Road, Dadar (W), Mumbai.
                </p>
              </div>

              {/* High-Fidelity Alert notification simulator */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest font-mono text-stone-400 text-center block">
                  Automatic Client Alerts Dispatched
                </span>
                
                {/* WhatsApp Card */}
                <div className="bg-emerald-50/50 border border-emerald-200 px-4 py-3 rounded-2xl flex items-start gap-3">
                  <div className="bg-[#25D366] text-white p-2 rounded-xl shrink-0">
                    <MessageSquare className="h-4 w-4 text-white fill-white" />
                  </div>
                  <div className="text-xs text-stone-600 font-medium">
                    <span className="font-extrabold text-[#128c7e] block">WhatsApp Alert - Delivered</span>
                    <p className="text-stone-500 mt-1 italic">
                      "Hello <strong>{finalBookingResult.customerName}</strong>! Your haircut/styling is confirmed with stylist <strong>{selectedStylist.name.split(' (')[0]}</strong> on <strong>{finalBookingResult.date}</strong> at <strong>{finalBookingResult.time}</strong>. See you soon!"
                    </p>
                  </div>
                </div>

                {/* Email Confirmation Card */}
                <div className="bg-blue-50/50 border border-blue-200 px-4 py-3 rounded-2xl flex items-start gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-xl shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-xs text-stone-600 font-medium font-medium">
                    <span className="font-extrabold text-blue-600 block">Email Invoice - Sent to {finalBookingResult.customerEmail}</span>
                    <p className="text-stone-500 mt-1 italic">
                      "Welcome pack generated. Your booking reservation ID is <strong>{finalBookingResult.id}</strong>. Directions to our NC Kelkar Road plaza have been loaded."
                    </p>
                  </div>
                </div>
              </div>

              {/* Receipt Details Grid */}
              <div className="bg-[#fffbfe] p-6 rounded-2xl border border-pink-100 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest font-mono text-pink-600 block border-b border-pink-50 pb-2">
                  Reservation Metadata Desk
                </span>
                
                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-stone-650">
                  <div>
                    <span className="text-stone-400 block uppercase font-mono">Invoice Number</span>
                    <span className="text-stone-800 font-bold font-mono">{finalBookingResult.id}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-mono">Booked Stylist</span>
                    <span className="text-stone-800 font-extrabold">{selectedStylist.name.split(' (')[0]}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-mono">Scheduled Frame</span>
                    <span className="text-stone-800 font-extrabold">{finalBookingResult.date} at {finalBookingResult.time}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase font-mono">Total Settlement</span>
                    <span className="text-pink-600 font-black font-mono text-sm block">
                      ₹{finalBookingResult.totalAmount} ({finalBookingResult.paymentType === 'deposit' ? '₹500 Paid Advance' : 'Pay at Salon Desk'})
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-pink-50">
                  <span className="text-[10px] text-stone-400 block uppercase font-mono">Roster Services Included:</span>
                  <div className="space-y-1 mt-1.5 text-xs text-stone-600 font-semibold">
                    {bookedServices.map(s => (
                      <div key={s.id} className="flex justify-between">
                        <span>• {s.name}</span>
                        <span className="font-mono text-stone-600">₹{s.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => {
                    clearBookingBasket();
                    setStep(1);
                  }}
                  className="px-5 py-2.5 bg-white border border-pink-150 rounded-xl text-xs font-bold text-stone-600 hover:bg-pink-50/55 cursor-pointer"
                >
                  Book Another Session
                </button>
                <button
                  onClick={() => {
                    clearBookingBasket();
                    // Navigate home
                    window.location.reload();
                  }}
                  className="px-6 py-2.5 bg-pink-505 bg-pink-500 text-white font-bold text-xs rounded-xl shadow cursor-pointer shadow-pink-550/10 min-h-[44px]"
                >
                  Back To Salon Homepage
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
