import { useState } from 'react';
import { Phone, MessageCircle, Heart, Menu, X, ShieldCheck, MapPin, Calendar, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking: (preselectedServiceId?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello Indra Health Care Services, I need healthcare / caretaker assistance at home. Please share details.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top emergency & registration bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full font-medium border border-teal-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Govt. Registered Home Health Care Service • Reg: {BUSINESS_INFO.registrationNumber}
            </span>
            <span className="hidden xl:inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
              <span>Indore • Bhopal • Vidisha • Ujjain • Dewas • Khargone</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs flex-wrap">
            <span className="hidden sm:inline text-slate-300">
              For Calling (Preferred):
            </span>
            <a
              id="topbar-call-primary"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/50 px-2.5 py-0.5 rounded-full text-teal-300 font-extrabold hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-300" />
              <span>Call: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              id="topbar-call-secondary"
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-500" />
              <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="relative flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-300 fill-rose-400/30" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="font-display font-extrabold text-base sm:text-xl lg:text-2xl text-slate-900 tracking-tight leading-tight">
                  Indra Home Health Care Service
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                <span className="text-[10px] sm:text-[11px] text-teal-700 font-bold uppercase tracking-wider">
                  Govt. Registered Home Health Care Service
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ★ Trusted by 700+ All City Customers
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-teal-700 transition-colors">
              All 11 Services
            </a>
            <a href="#care-finder" className="hover:text-teal-700 transition-colors">
              Care Recommendation
            </a>
            <a href="#medical-equipment" className="hover:text-teal-700 transition-colors">
              Medical Equipment
            </a>
            <a href="#service-cities" className="hover:text-teal-700 transition-colors">
              Available Cities
            </a>
            <a href="#contact" className="hover:text-teal-700 transition-colors">
              Contact & Helplines
            </a>
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="nav-call-quick"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-teal-950 bg-teal-50 hover:bg-teal-100 border border-teal-200 text-xs font-bold transition-all shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>

            <a
              id="nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-book-btn-mobile"
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-semibold sm:hidden"
            >
              Book Visit
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-700" />
              <span>Serving 6 Major Cities in MP:</span>
            </div>
            <p className="text-[11px] text-teal-800">
              Indore (HQ) • Bhopal • Vidisha • Ujjain • Dewas • Khargone
            </p>
          </div>

          <div className="grid grid-cols-1 gap-1 text-base font-medium text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              All 11 Healthcare Services
            </a>
            <a
              href="#care-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Care Recommendation Wizard
            </a>
            <a
              href="#medical-equipment"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Medical Equipment (Rent & Sale)
            </a>
            <a
              href="#service-cities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Available Cities Coverage
            </a>
            <a
              href="#about-trust"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Verified Credentials & Registration
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              Address & Phone Numbers
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call: {BUSINESS_INFO.primaryPhone} (Preferred)
            </a>
            <a
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 text-slate-200 hover:text-white font-bold text-sm border border-slate-700"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              Alt Helpline: {BUSINESS_INFO.secondaryPhone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-slate-600 text-xs font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
