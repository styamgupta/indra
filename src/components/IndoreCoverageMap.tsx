import { MapPin, Clock, Phone, MessageCircle, Navigation, Shield } from 'lucide-react';
import { INDORE_LOCATIONS, BUSINESS_INFO } from '../data/servicesData';

interface IndoreCoverageMapProps {
  onOpenBooking: () => void;
}

export default function IndoreCoverageMap({ onOpenBooking }: IndoreCoverageMapProps) {
  return (
    <section id="indore-areas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Serving 100% Indore Localities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Doorstep Home Care Across Indore
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Headquartered at Khajrana Gate, our network of nurses, attendants, physiotherapists, and equipment vehicles dispatches swiftly to every neighborhood in Indore.
          </p>
        </div>

        {/* Hub Location Card */}
        <div className="mb-10 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-block text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                Main Operating Center
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Indra Home Health Care Service - Khajrana Center
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Centrally positioned for immediate access to East Indore, Vijay Nagar, Palasia, and Bypass.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="coverage-call-hub"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 ring-1 ring-teal-400"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hub: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>
          </div>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {INDORE_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/50 border border-slate-200 hover:border-teal-300 transition-all flex items-start justify-between gap-2 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {loc.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 pl-5">
                  {loc.areaType}
                </p>
              </div>

              <span className="text-[10px] font-semibold text-teal-800 bg-white border border-teal-200 px-2 py-0.5 rounded-md whitespace-nowrap">
                {loc.responseTime}
              </span>
            </div>
          ))}
        </div>

        {/* Need care in an unlisted area? */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <span>Live near Dewas Naka, Manglia, Pithampur, or outer bypass? </span>
          <a
            id="coverage-inquire-whatsapp"
            href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
              'Hello Indra Home Health Care Service, do you provide home care staff in my area near Indore?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-teal-700 hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Ask our coordinator on WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
