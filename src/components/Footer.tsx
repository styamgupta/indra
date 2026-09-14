import { Heart, Phone, Mail, MapPin, ShieldCheck, MessageCircle, CheckCircle2, Award, Building2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: (serviceId?: string, cityName?: string) => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello Indra Home Health Care Service, I am contacting you through your website for home healthcare services.'
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-32 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Govt. Registered Home Health Care Service Banner at the Top of Footer */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 border-2 border-teal-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-teal-600/20 border border-teal-500/50 flex items-center justify-center text-teal-400 shrink-0 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-teal-300" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1 justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  Official Govt. MSME Recognized
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  ★ Trusted by 700+ All City Customers
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Govt. Registered Home Health Care Service
              </h3>
              <p className="text-sm text-teal-200/90 font-medium mt-0.5">
                Government of India (Ministry of MSME) Registration No:{' '}
                <span className="font-mono font-bold text-teal-300 bg-teal-900/60 px-2 py-0.5 rounded">
                  {BUSINESS_INFO.registrationNumber}
                </span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                गवर्नमेंट रजिस्टर्ड होम हेल्थ केयर सर्विस • Serving Indore, Bhopal, Vidisha, Ujjain, Dewas & Khargone
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              id="footer-banner-call-primary"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-extrabold shadow-md transition-all flex items-center gap-2 ring-2 ring-teal-400/50"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>

            <a
              id="footer-banner-call-sec"
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
            </a>

            <a
              id="footer-banner-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 6 Cities Coverage Banner in Footer */}
        <div className="mb-10 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-teal-300 font-bold">
            <Building2 className="w-4 h-4 text-teal-400" />
            <span>Active Doorstep Services in 6 Cities:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BUSINESS_INFO.cities.map((c) => (
              <button
                key={c}
                onClick={() => onOpenBooking(undefined, c)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-teal-900 text-slate-200 hover:text-white border border-slate-700 transition-colors font-semibold cursor-pointer"
              >
                {c} {c === 'Indore' ? '(HQ)' : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Registration Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-900/30 shrink-0">
                <Heart className="w-6 h-6 fill-white/20" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight block leading-snug">
                  Indra Home Health Care Service
                </span>
                <p className="text-[11px] text-teal-400 font-bold tracking-wide uppercase">
                  Govt. Registered Home Health Care Service
                </p>
              </div>
            </div>

            {/* Official Registration Badge */}
            <div className="p-3.5 rounded-2xl bg-teal-900/40 border border-teal-500/30 space-y-1">
              <div className="flex items-center gap-1.5 text-teal-300 font-bold text-xs">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Govt. Registered Home Health Care Service</span>
              </div>
              <p className="text-xs text-slate-300 font-mono">
                Reg No: {BUSINESS_INFO.registrationNumber}
              </p>
              <div className="flex items-center justify-between pt-0.5 text-[11px]">
                <span className="text-teal-200/80">Ministry of MSME, Govt. of India</span>
                <span className="text-emerald-300 font-bold">Trusted by 700+</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic border-l-2 border-teal-500 pl-3">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Providing certified bedside care, hospital-standard nursing, elderly assistance, physiotherapy, doctor visits, and ICU medical equipment at home across Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone.
            </p>
          </div>

          {/* Col 2: All 11 Services Quick Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Our 11 Healthcare Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {SERVICES_LIST.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onOpenBooking(s.id)}
                  className="text-left text-slate-400 hover:text-white transition-colors truncate block py-0.5 cursor-pointer"
                >
                  • {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Contact Helplines & Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-teal-400 font-bold block">For Calling (Preferred):</span>
                  <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="text-white font-extrabold block text-sm hover:text-teal-300">
                    {BUSINESS_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.secondaryPhone}`} className="text-slate-300 font-semibold block hover:underline mt-0.5">
                    Alt Helpline: {BUSINESS_INFO.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-teal-300 break-all text-slate-200">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.address}
                </span>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp ({BUSINESS_INFO.primaryPhone})</span>
              </a>

              <a
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition-all w-full justify-center"
              >
                <span>⭐ 4.7 Justdial Verified Profile & Feedback</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Explicit Govt. Registered Home Health Care Service text */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-300">
              © {new Date().getFullYear()} Indra Home Health Care Service. All rights reserved.
            </p>
            <p className="text-teal-400 font-medium text-[11px] mt-0.5">
              Govt. Registered Home Health Care Service | Registration No: {BUSINESS_INFO.registrationNumber}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-slate-400 text-[11px]">
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-teal-300 font-medium">
              Ministry of MSME, Govt. of India
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Trusted by 700+ All City Customers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
