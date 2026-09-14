import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, ShieldCheck, Building2, Navigation, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CITIES, INDORE_LOCATIONS } from '../data/servicesData';

interface ServiceCitiesCoverageProps {
  onOpenBooking: (serviceId?: string, cityName?: string) => void;
}

export default function ServiceCitiesCoverage({ onOpenBooking }: ServiceCitiesCoverageProps) {
  const [selectedCity, setSelectedCity] = useState<string>('indore');
  const [showIndoreLocalities, setShowIndoreLocalities] = useState(true);

  const activeCityData = SERVICE_CITIES.find((c) => c.id === selectedCity) || SERVICE_CITIES[0];

  return (
    <section id="service-cities" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase border border-teal-200">
              <Building2 className="w-3.5 h-3.5 text-teal-700" />
              Active Across 6 Cities in Madhya Pradesh
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
              <span>★ Trusted by 700+ All City Customers</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Healthcare Services Available in 6 Cities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            <strong>Indra Home Health Care Service</strong> brings verified nurses, patient caretakers, physiotherapists, and medical equipment right to your doorstep across <strong>Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone</strong> — trusted by 700+ all city customers.
          </p>
        </div>

        {/* 6 City Selection Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SERVICE_CITIES.map((city) => {
            const isSelected = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-900/20 ring-2 ring-teal-500'
                    : 'bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-900 border border-slate-200'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isSelected ? 'text-teal-200' : 'text-slate-500'}`} />
                <span>{city.name}</span>
                <span className={`text-[11px] ${isSelected ? 'text-teal-200' : 'text-slate-400'}`}>
                  ({city.hindiName})
                </span>
                {city.isHub && (
                  <span className="text-[10px] bg-teal-800 text-teal-200 px-1.5 py-0.5 rounded font-bold uppercase ml-1">
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Highlighted City Card */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12 border border-teal-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/40">
                  {activeCityData.tagline}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  Dispatch Speed: <strong className="text-white">{activeCityData.dispatchTime}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Doorstep Healthcare in {activeCityData.name} ({activeCityData.hindiName})
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you need 24-hour bedside nursing, elderly attendant support, post-operative physiotherapy, or hospital equipment on rent, our coordinator in {activeCityData.name} will organize verified healthcare staff for your family.
              </p>

              {/* Covered Sectors */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300 block mb-2">
                  Key Localities & Sectors Covered in {activeCityData.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCityData.areasCovered.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-medium border border-white/10"
                    >
                      • {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions for this City */}
            <div className="lg:col-span-4 bg-white/10 rounded-2xl p-5 border border-white/15 space-y-3">
              <div className="text-xs text-teal-300 font-bold uppercase tracking-wider">
                Direct Helpdesk for {activeCityData.name}
              </div>

              <a
                id={`city-call-primary-${activeCityData.id}`}
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 ring-1 ring-teal-400"
              >
                <Phone className="w-4 h-4 text-teal-200" />
                <span>Call: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
              </a>

              <a
                id={`city-call-secondary-${activeCityData.id}`}
                href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
              </a>

              <a
                id={`city-whatsapp-${activeCityData.id}`}
                href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
                  `Hello Indra Home Health Care Service, I need home healthcare assistance in ${activeCityData.name}. Please share available staff and charges.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Coordinator</span>
              </a>

              <button
                id={`city-book-${activeCityData.id}`}
                onClick={() => onOpenBooking(undefined, activeCityData.name)}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book Home Visit in {activeCityData.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* All 6 Cities Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICE_CITIES.map((city) => (
            <div
              key={city.id}
              className={`p-5 rounded-2xl border transition-all ${
                selectedCity === city.id
                  ? 'bg-teal-50/50 border-teal-500 shadow-md'
                  : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-teal-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
                    {city.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">
                      {city.name}
                    </h4>
                    <span className="text-xs text-teal-700 font-semibold">
                      {city.hindiName}
                    </span>
                  </div>
                </div>

                {city.isHub ? (
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-100 border border-teal-300 px-2 py-0.5 rounded-full uppercase">
                    Main Hub
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                    Active City
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 mb-3">
                {city.tagline}
              </p>

              <div className="text-[11px] text-slate-500 mb-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>Response: <strong>{city.dispatchTime}</strong></span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200/80">
                <button
                  onClick={() => {
                    setSelectedCity(city.id);
                    onOpenBooking(undefined, city.name);
                  }}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors text-center cursor-pointer"
                >
                  Book in {city.name}
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                  title={`Call for ${city.name}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Indore Detailed Localities Accordion / Box */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-block text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                Central Operations Center
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Indore City Neighborhoods & Response Times
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Headquartered at <strong>Khajrana Gate, Indore</strong> with rapid dispatch to all sectors.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hub: {BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDORE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-2 shadow-2xs"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-teal-600 shrink-0" />
                    <h5 className="text-xs font-bold text-slate-900">
                      {loc.name}
                    </h5>
                  </div>
                  <p className="text-[10px] text-slate-500 pl-4.5">
                    {loc.areaType}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded whitespace-nowrap">
                  {loc.responseTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
