import { ShieldCheck, Phone, MessageCircle, Clock, Heart, CheckCircle2, ArrowRight, Star, MapPin, Mail, BadgeCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST, SERVICE_IMAGES } from '../data/servicesData';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenBooking, onExploreServices }: HeroProps) {
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello Indra Health Care Services, I need healthcare / caretaker assistance for a patient. Please help.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 sm:pb-20 border-b border-slate-200">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Quick Emergency Ticker Strip */}
        <div className="mb-6 p-3 rounded-2xl bg-white/90 border border-teal-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-slate-900">24x7 Ready Dispatch:</span>
            <span className="text-slate-600">
              Nurses, Attendants & Equipment available across MP
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-medium">Call Us:</span>
            <a
              id="emergency-call-primary"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-950 bg-teal-200/80 hover:bg-teal-300 border border-teal-300 px-3 py-1.5 rounded-xl transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-800" />
              Call: {BUSINESS_INFO.primaryPhone} (Preferred)
            </a>
            <a
              id="emergency-call-secondary"
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              Alt: {BUSINESS_INFO.secondaryPhone}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Government MSME Registration & Trust Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/90 border border-teal-300 text-teal-950 text-xs font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Govt. Registered Home Health Care Service • Reg: {BUSINESS_INFO.registrationNumber}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-extrabold">
                <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600 shrink-0" />
                <span>Trusted by 700+ All City Customers</span>
              </div>
              <a
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold hover:bg-amber-200 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0" />
                <span>4.7 ★ Justdial Verified (40+ Reviews)</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Compassionate Hospital-Level{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-900">
                Healthcare at Home
              </span>{' '}
              Across Madhya Pradesh
            </h1>

            {/* Cities Served Pill Array */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-600 mr-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600" /> Serving 6 Cities:
              </span>
              {BUSINESS_INFO.cities.map((city) => (
                <span
                  key={city}
                  className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs"
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Banner Quote Highlight */}
            <div className="p-4 rounded-xl bg-slate-100/90 border-l-4 border-teal-600 text-slate-700 italic text-sm sm:text-base font-medium">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>Indra Home Health Care Service</strong> delivers 100% verified home nurses, senior citizen caretakers, licensed physiotherapists, on-call doctors, home blood tests, 24x7 ambulance, and ICU medical equipment to your doorstep — trusted by 700+ all city customers across Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone.
            </p>

            {/* Trust Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>100% Police & ID Verified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>12h / 24h Flexible Day & Night Shifts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Trusted by 700+ Families Across MP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Quick Caregiver Replacement Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                id="hero-call-primary"
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30 transition-all ring-2 ring-teal-500/50"
              >
                <Phone className="w-4 h-4 text-teal-200" />
                <span>Call {BUSINESS_INFO.primaryPhone} (Preferred)</span>
              </a>

              <a
                id="hero-call-secondary"
                href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
              </a>

              <a
                id="hero-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                id="hero-book-visit"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-300 shadow-xs transition-all cursor-pointer"
              >
                <span>Book Home Visit</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Official Contact & Registration Details */}
            <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span>Preferred Call: <strong>9301258566</strong></span>
              <span>•</span>
              <span>Helpline: <strong>7509787952</strong></span>
              <span>•</span>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-teal-700 hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <span>•</span>
              <span>Office: <strong>Khajrana Gate, Indore</strong></span>
            </div>
          </div>

          {/* Right Column: Visual Trust Card & Interactive Quick Service Launcher */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/80 border border-slate-200">
              {/* Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    Trusted Healthcare Partner
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                    Need Home Care Today?
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {/* Real Caregiver Photograph in Action */}
              <div className="relative rounded-2xl overflow-hidden mb-4 border border-slate-200 aspect-16/9 bg-slate-100 shadow-xs">
                <img
                  src={SERVICE_IMAGES.nurseCare}
                  alt="Indra Home Health Care Service bedside nursing care in Indore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-xs drop-shadow-xs">Active Doorstep Dispatch</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md text-[11px] font-black shadow-xs hover:bg-amber-400 transition-colors"
                  >
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>4.7 ★ Justdial</span>
                  </a>
                </div>
              </div>

              {/* Quick Service Select Grid */}
              <p className="text-xs font-medium text-slate-500 mb-3">
                Tap any service for instant home appointment or estimate:
              </p>

              <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
                {[
                  { name: 'Home Nursing', time: '12h / 24h Shift', id: 'home-nursing-services' },
                  { name: 'Physiotherapy', time: 'Bedside Rehab', id: 'physiotherapy-services' },
                  { name: 'Senior Care Taker', time: 'Daily Support', id: 'senior-citizec-care-taker' },
                  { name: 'Lab Test at Home', time: 'Painless Sample', id: 'lab-test-home-services' },
                  { name: 'Oxygen & ICU Bed', time: 'Rental & Sale', id: 'medical-equipment' },
                  { name: 'Emergency Ambulance', time: '24/7 Hotline', id: 'ambulance-services' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onOpenBooking(s.id)}
                    className="p-3 text-left rounded-xl bg-slate-50 hover:bg-teal-50/80 border border-slate-200 hover:border-teal-300 transition-all group cursor-pointer"
                  >
                    <div className="font-semibold text-slate-800 group-hover:text-teal-900 line-clamp-1">
                      {s.name}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{s.time}</div>
                  </button>
                ))}
              </div>

              {/* Verified Care Guarantee Card */}
              <div className="p-3.5 rounded-xl bg-teal-900 text-white space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-teal-200">Indra Care Guarantee</span>
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">4.7 / 5 (Justdial Verified)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Every nurse, caretaker, and physiotherapist is police background-checked with genuine clinical certification. <strong>Trusted by 700+ all city customers.</strong>
                </p>
                <div className="flex items-center justify-between pt-1 text-[11px] text-teal-300">
                  <span>UDYAM-MP-23-0116976</span>
                  <span className="text-emerald-300 font-bold">700+ Satisfied Families</span>
                </div>
              </div>

              {/* Instant Call Prompt */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">For Calling (Preferred):</span>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="font-extrabold text-teal-800 hover:text-teal-950 flex items-center gap-1.5 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>{BUSINESS_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
