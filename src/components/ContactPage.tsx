import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, ShieldCheck, Check, ChevronLeft } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

export default function ContactPage({ setCurrentPage }: ContactPageProps) {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert('Please fill out Name and Phone fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setInquiryForm({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  const businessHours = [
    { day: 'Monday', hours: '10:00 AM - 9:00 PM', status: 'open' },
    { day: 'Tuesday', hours: '10:00 AM - 9:00 PM', status: 'open' },
    { day: 'Wednesday', hours: '10:00 AM - 9:00 PM', status: 'open' },
    { day: 'Thursday', hours: '10:00 AM - 9:00 PM', status: 'open' },
    { day: 'Friday', hours: '10:00 AM - 9:00 PM', status: 'open' },
    { day: 'Saturday', hours: '10:00 AM - 9:30 PM', status: 'busy' },
    { day: 'Sunday', hours: '10:00 AM - 9:30 PM', status: 'busy' }
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

        {/* Page Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-pink-600 px-3 py-1 bg-pink-50 rounded-full border border-pink-100">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-sans font-black text-stone-900 mt-2">
            Contact & Travel Coordinates
          </h1>
          <div className="h-1.5 w-16 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Outer content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Business hours (size: 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest font-mono text-pink-600 block px-2">
                Rapid Touchpoints
              </span>

              {/* Call Card */}
              <a 
                href="tel:+919322964354"
                className="block p-5 bg-white border border-pink-100 hover:border-pink-300 hover:shadow-md rounded-2xl transition-all shadow-sm"
                id="contact-call-card"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 text-pink-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold font-mono uppercase block">Reception Desk</span>
                    <strong className="text-base text-stone-905 text-stone-900 block mt-0.5">+91 93229 64354</strong>
                    <span className="text-xs text-stone-500 font-semibold block mt-1">Tap to trigger direct voice call</span>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/919322964354"
                target="_blank" 
                rel="noreferrer"
                className="block p-5 bg-[#fffbfc] border border-emerald-100 hover:border-emerald-300 hover:shadow-md rounded-2xl transition-all shadow-sm"
                id="contact-whatsapp-card"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-[#12c455] shrink-0">
                    <MessageSquare className="h-6 w-6 text-[#12c455] fill-[#12c455]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold font-mono uppercase block">WhatsApp Chat Desk</span>
                    <strong className="text-base text-stone-900 block mt-0.5">Start Instant Dialogue</strong>
                    <span className="text-xs text-stone-500 block mt-1 font-semibold">Chat for styling recommendations</span>
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-5 bg-white border border-pink-100 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-xl border border-pink-100 text-pink-650 shrink-0 mt-0.5 text-pink-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold font-mono uppercase block">Dadar Plaza Address</span>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed font-semibold">
                      Shop No. 5, Premium Plaza, NC Kelkar Road, Near Dadar Railway Station (West), Dadar, Mumbai - 400028
                    </p>
                    <a
                      href="https://maps.google.com/?q=Dadar+Station+West+Mumbai"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-pink-600 font-black hover:underline inline-flex items-center gap-1 mt-2.5"
                    >
                      Open in Google Maps Route
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Section */}
            <div className="bg-white border border-pink-100 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-pink-50">
                <Clock className="h-5 w-5 text-pink-500" />
                <span className="text-xs uppercase font-extrabold tracking-widest font-mono text-stone-900">
                   Active Operating Hours
                </span>
              </div>

              <div className="space-y-2.5">
                {businessHours.map((bh) => (
                  <div key={bh.day} className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-stone-500">{bh.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-stone-800">{bh.hours}</span>
                      <span className={`h-2 w-2 rounded-full ${bh.status === 'open' ? 'bg-emerald-500' : 'bg-pink-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form & Mock Map (size: 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Contact Form */}
            <div className="bg-white border border-pink-100 p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-black font-sans text-stone-900">Drop A Quick Query</h3>
              <p className="text-xs text-stone-550 mt-1 mb-6 font-medium">
                Our operations manager Vikram or back-office desk Priyanka will contact you directly.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-2xl text-center space-y-3" id="contact-success-pane">
                  <div className="bg-white p-2 rounded-full border border-emerald-200 text-emerald-500 inline-block shadow-sm">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-black text-stone-900">Inquiry Dispatched!</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed font-semibold">
                    Thank you. Professionnel Unisex reception desk has successfully parsed your details. We will call you back over phone within <strong className="text-pink-600 font-extrabold font-mono">15 minutes</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 bg-white border border-pink-100 text-stone-700 text-xs font-semibold rounded-xl hover:bg-pink-50 cursor-pointer"
                  >
                     Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-stone-600 block mb-1">Your Name</label>
                      <input
                        type="text"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full bg-[#fffcfc] border border-pink-100 rounded-xl p-3 text-sm text-stone-850 focus:outline-none focus:border-pink-300 min-h-[44px]"
                        required
                        placeholder="Md Sahkib Khan"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-stone-600 block mb-1">Mobile Contact Phone</label>
                      <input
                        type="text"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full bg-[#fffcfc] border border-pink-100 rounded-xl p-3 text-xs text-stone-850 font-mono focus:outline-none focus:border-pink-300 min-h-[44px]"
                        required
                        placeholder="+91 93229 64354"
                      />
                    </div>
                  </div>

                  <div>
                     <label className="text-xs font-bold text-stone-600 block mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full bg-[#fffcfc] border border-pink-100 rounded-xl p-3 text-sm text-stone-850 focus:outline-none focus:border-pink-300 min-h-[44px]"
                      placeholder="mdsahkibkhan6@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-600 block mb-1">Subject Matter</label>
                    <select
                      value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, subject: e.target.value })}
                      className="w-full bg-white border border-pink-100 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:border-pink-350 min-h-[44px]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bridal Custom Booking">Bridal / Party Custom Packages</option>
                      <option value="Career & Stylist Internship">Career & Stylist Internship</option>
                      <option value="Bulk Cosmetics Purchase">Bulk Cosmetics Purchase</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-600 block mb-1">Specific Message</label>
                    <textarea
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      rows={3}
                      placeholder="e.g. Requesting quotation for bridal makeup package with Vikram & Priyanka."
                      className="w-full bg-[#fffcfc] border border-pink-100 rounded-xl p-3 text-xs text-stone-600 focus:outline-none focus:border-pink-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-pink-500/20"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white rounded-full animate-spin border-t-transparent animate-speed-700" />
                        Transmitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Request Coordinates
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Gorgeous Vector-Styled Mock Map */}
            <div className="bg-white border border-pink-100 p-6 rounded-3xl space-y-4 shadow-sm animate-fade-in">
              <span className="text-xs font-extrabold uppercase tracking-widest font-mono text-pink-600 block px-2">
                Dadar Station Precinct Map View
              </span>

              {/* Dynamic Map Block illustration */}
              <div className="relative h-60 bg-pink-50/50 border border-pink-100 rounded-2xl overflow-hidden flex flex-col justify-between p-4 shadow-inner" id="visual-map-box">
                {/* Simulated Road Lines */}
                <div className="absolute inset-0 z-0 opacity-25">
                  <div className="absolute top-1/4 left-0 right-0 h-6 bg-pink-205 bg-pink-200 rotate-1" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-8 bg-pink-205 bg-pink-200 rotate-6" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-6 bg-pink-205 bg-pink-200 -rotate-3" />
                </div>

                {/* Simulated Landmarks */}
                <div className="relative z-10 space-y-2">
                  <span className="px-3 py-1 bg-white/95 text-stone-500 border border-pink-100/50 rounded-full font-mono text-[9px] font-extrabold uppercase inline-block shadow">
                     🚉 Dadar West Railway Station (West Platform Walkway • 3-Min walk)
                  </span>
                  <br />
                  <span className="px-3 py-1 bg-white/95 text-stone-500 border border-pink-100/50 rounded-full font-mono text-[9px] font-extrabold uppercase inline-block ml-10 shadow">
                     🏢 NC Kelkar Road Plaza Complex
                  </span>
                </div>

                {/* Animated Salon Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 flex flex-col items-center">
                  <span className="absolute h-10 w-10 bg-pink-550/25 bg-pink-500/25 rounded-full animate-ping" />
                  <div className="relative bg-pink-500 text-white p-2.5 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                     <MapPin className="h-5 w-5 fill-white" />
                  </div>
                  <strong className="text-[10px] text-pink-650 text-pink-600 bg-white border border-pink-200 px-3 py-1 rounded-full mt-2 shadow-lg tracking-wider font-extrabold font-mono">
                     PROFESSIONNEL UNISEX SALON
                  </strong>
                </div>

                {/* Directions Button overlay */}
                <div className="relative z-10 flex justify-end">
                  <a
                    href="https://maps.google.com/?q=NC+Kelkar+Road+Dadar+West+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white text-pink-600 border border-pink-100 hover:border-pink-300 text-[10px] font-extrabold uppercase font-mono rounded-xl shadow-sm cursor-pointer"
                  >
                     Open GPS Coordinates
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
