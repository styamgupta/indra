import { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, ChevronUp, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
}

export default function EmergencyStickyBar({ onOpenBooking }: EmergencyStickyBarProps) {
  const [showCallMenu, setShowCallMenu] = useState(false);

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    'Hello Indra Home Health Care Service, I need immediate healthcare assistance at home. Please share staff details.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl">
      {/* Call Line Selection Dropup */}
      {showCallMenu && (
        <div className="max-w-md mx-auto mb-2 p-3 bg-slate-900 text-white rounded-2xl shadow-xl space-y-2 text-xs animate-fadeIn">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[11px] text-teal-400 font-bold">
            <span>Direct 24x7 Helplines (Indra Home Health Care):</span>
            <button
              onClick={() => setShowCallMenu(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              Close ✕
            </button>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-extrabold ring-1 ring-teal-400"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>Call (Preferred)</span>
            </span>
            <span className="text-teal-100">{BUSINESS_INFO.primaryPhone}</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.secondaryPhone}`}
            className="w-full flex items-center justify-between py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Alt Helpline</span>
            </span>
            <span className="text-slate-300">{BUSINESS_INFO.secondaryPhone}</span>
          </a>
        </div>
      )}

      {/* Micro Government Registration Trust Tag */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-teal-900 bg-teal-50 py-0.5 px-2 rounded-full border border-teal-200 mb-1.5 max-w-sm mx-auto">
        <ShieldCheck className="w-3 h-3 text-teal-700 shrink-0" />
        <span className="truncate">Govt. Registered Home Health Care Service • Trusted by 700+</span>
      </div>

      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Direct Call with Line Options */}
        <button
          id="sticky-call-btn"
          onClick={() => setShowCallMenu(!showCallMenu)}
          className="py-2.5 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex flex-col items-center justify-center gap-0.5 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            {showCallMenu ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </div>
          <span className="text-[11px] leading-tight">Call Us</span>
        </button>

        {/* WhatsApp Chat */}
        <a
          id="sticky-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex flex-col items-center justify-center gap-0.5 shadow-xs active:scale-95 transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="text-[11px] leading-tight">WhatsApp</span>
        </a>

        {/* Book Service */}
        <button
          id="sticky-book-btn"
          onClick={onOpenBooking}
          className="py-2.5 px-2 rounded-xl bg-teal-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-0.5 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[11px] leading-tight">Book Visit</span>
        </button>
      </div>
    </div>
  );
}
