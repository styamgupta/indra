import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ChevronDown, MessageCircle, Clock, Heart, Send, CheckCircle2, Building2 } from 'lucide-react';
import { BUSINESS_INFO, FAQ_LIST } from '../data/servicesData';

interface ContactAndFAQSectionProps {
  onOpenBooking: () => void;
}

export default function ContactAndFAQSection({ onOpenBooking }: ContactAndFAQSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCity, setInquiryCity] = useState('Indore');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleQuickInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    const waMsg = encodeURIComponent(
      `*INQUIRY VIA WEBSITE - INDRA HOME HEALTH CARE SERVICE*
From: ${inquiryName}
Phone: ${inquiryPhone}
City: ${inquiryCity}
Message: ${inquiryMessage || 'Inquiring about home healthcare services.'}`
    );

    window.open(`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${waMsg}`, '_blank');
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Clear Answers Before You Book
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about our nurses, attendants, equipment, and verified safety policies across MP.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-teal-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information & Direct Connect Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Govt. Registered Home Health Care Service • Reg: {BUSINESS_INFO.registrationNumber}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                  <span>★ Trusted by 700+ All City Customers</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-teal-700 font-semibold mt-1">
                {BUSINESS_INFO.hindiName}
              </p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Connect with our care coordinators 24 hours a day for immediate nurse, caretaker, doctor home visit, or medical equipment delivery. Trusted by 700+ all city customers across MP.
              </p>

              {/* Cities Banner */}
              <div className="mt-4 p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 flex items-start gap-2">
                <Building2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Services Available in 6 Cities:</span>
                  <p className="text-[11px] text-teal-800 mt-0.5">
                    Indore (HQ) • Bhopal • Vidisha • Ujjain • Dewas • Khargone
                  </p>
                </div>
              </div>

              {/* Contact List */}
              <div className="mt-5 space-y-3.5 text-sm text-slate-700">
                {/* Primary Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-teal-50/90 border border-teal-300 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-teal-950 block">For Calling (Preferred Line)</span>
                      <span className="text-[10px] bg-teal-700 text-white font-bold px-1.5 py-0.2 rounded">Preferred</span>
                    </div>
                    <a
                      id="contact-primary-phone"
                      href={`tel:${BUSINESS_INFO.primaryPhone}`}
                      className="text-base font-extrabold text-teal-950 hover:underline"
                    >
                      {BUSINESS_INFO.primaryPhone}
                    </a>
                    <span className="text-[11px] text-teal-800 block font-medium">Direct call & WhatsApp • Immediate 24x7 dispatch</span>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-teal-300 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Secondary Helpline (24/7)</span>
                    <a
                      id="contact-secondary-phone"
                      href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                      className="text-base font-extrabold text-slate-900 hover:text-teal-700 hover:underline"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                    <span className="text-[11px] text-slate-500 block">Support across all 6 cities in Madhya Pradesh</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Official Email Address</span>
                    <a
                      id="contact-email"
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-slate-800 hover:text-teal-700 break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Headquarters & Operations Hub</span>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                id="contact-call-now-btn"
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex-1 min-w-[150px] py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 ring-2 ring-teal-500/50"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.primaryPhone} (Preferred)</span>
              </a>

              <a
                id="contact-call-sec-btn"
                href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                className="flex-1 min-w-[150px] py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
              </a>

              <a
                id="contact-whatsapp-chat-btn"
                href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
                  'Hello Indra Home Health Care Service, I would like to inquire about home nursing and patient care services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (Instant Response)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instant Message / Callback Request */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Average Callback Time: Under 15 Minutes</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Request an Instant Callback
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Leave your number below. Our healthcare supervisor will contact you immediately to discuss patient condition, shift timings, and rates.
              </p>

              {inquirySent ? (
                <div className="mt-8 p-6 rounded-2xl bg-teal-950/80 border border-teal-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Callback Request Sent!</h4>
                  <p className="text-xs text-slate-300">
                    We will ring you on <strong>{inquiryPhone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryName('');
                      setInquiryPhone('');
                      setInquiryMessage('');
                    }}
                    className="text-xs text-teal-300 hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="mt-6 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikas Sharma"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                        City *
                      </label>
                      <select
                        value={inquiryCity}
                        onChange={(e) => setInquiryCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm focus:outline-hidden focus:border-teal-400 cursor-pointer"
                      >
                        {BUSINESS_INFO.cities.map((c) => (
                          <option key={c} value={c} className="bg-slate-900 text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Service or Condition Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need 24-hour female caretaker for elderly mother..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:border-teal-400"
                    />
                  </div>

                  <button
                    id="submit-quick-inquiry-btn"
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Footer Quote */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>UDYAM-MP-23-0116976</span>
              <button
                onClick={onOpenBooking}
                className="text-teal-300 hover:underline font-semibold cursor-pointer"
              >
                Open Full Booking Form &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
