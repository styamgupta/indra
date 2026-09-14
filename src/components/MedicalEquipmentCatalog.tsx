import { useState } from 'react';
import { PackageCheck, Truck, ShieldCheck, Wrench, Phone, MessageCircle, Check, Info, Sparkles } from 'lucide-react';
import { MEDICAL_EQUIPMENT_LIST, BUSINESS_INFO, SERVICE_IMAGES } from '../data/servicesData';
import { MedicalEquipmentItem } from '../types';

interface MedicalEquipmentCatalogProps {
  onRequestEquipment: (equipmentName: string, mode: 'rent' | 'buy') => void;
}

export default function MedicalEquipmentCatalog({ onRequestEquipment }: MedicalEquipmentCatalogProps) {
  const [activeTypeFilter, setActiveTypeFilter] = useState<'all' | 'rent' | 'buy'>('all');

  return (
    <section id="medical-equipment" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <PackageCheck className="w-3.5 h-3.5" />
            Medical Equipment Rental & Sale • Indore
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital-Grade Medical Equipment at Home
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Set up an ICU or supportive recovery setup at home. Cleaned, pre-sanitized, and delivered with technician installation anywhere in Indore within 2 to 4 hours.
          </p>
        </div>

        {/* Value Perks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Doorstep Delivery in Indore</h4>
              <p className="text-xs text-slate-500">Same-day setup by medical technician</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Sanitized & Tested</h4>
              <p className="text-xs text-slate-500">Calibrated flow rates & sealed consumables</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Free Maintenance & Support</h4>
              <p className="text-xs text-slate-500">Immediate replacement if issues arise</p>
            </div>
          </div>
        </div>

        {/* Featured ICU Equipment at Home Banner */}
        <div className="mb-10 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 text-white grid grid-cols-1 lg:grid-cols-12 shadow-xl">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                ICU Setup at Home in Indore
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Complete Home ICU & Oxygen Support Systems
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Save up to 70% compared to private hospital ICU room tariffs. We deliver motorized 5-function ICU beds, Philips/Evox oxygen concentrators, multi-parameter patient monitors, BiPAP/CPAP machines, and medical suction units with immediate installation and 24x7 technician support.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.primaryPhone}</span>
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
                  'Hello Indra Home Health Care, I need an ICU setup / Oxygen equipment quotation for my patient.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Quote</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-[280px]">
            <img
              src={SERVICE_IMAGES.icuEquipment}
              alt="Indra Home Health Care Service ICU setup and medical equipment rental in Indore"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-xs px-3 py-1 rounded-lg text-white text-[11px] font-semibold border border-slate-700">
              Doorstep Sanitized Dispatch
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_EQUIPMENT_LIST.map((item) => {
            const rentWhatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
              `Hello Indra Home Health Care, I want to inquire about renting: "${item.name}" at my address in Indore.`
            )}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Badge & Title */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                      Available for Rent & Purchase
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-teal-700 font-semibold mt-0.5">
                    {item.hindiName}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Clinical Specifications
                    </span>
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Included features */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing Hint & Action Buttons */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-teal-600" />
                      Doorstep Setup in Indore
                    </span>
                    <span className="font-semibold text-teal-800">Monthly / Weekly Plans</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`rent-btn-${item.id}`}
                      onClick={() => onRequestEquipment(item.name, 'rent')}
                      className="w-full py-2 px-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-xs transition-colors text-center"
                    >
                      Book on Rent
                    </button>

                    <a
                      id={`whatsapp-equip-${item.id}`}
                      href={rentWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Equipment Hotline Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Need urgent Oxygen Concentrator or Hospital Bed delivery today?
              </h4>
              <p className="text-xs text-slate-500">
                Call our Indore dispatch manager directly for immediate vehicle mobilization.
              </p>
            </div>
          </div>

          <a
            id="equipment-hotline-call"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 ring-1 ring-teal-400"
          >
            <Phone className="w-4 h-4" />
            <span>Call 9301258566 (Preferred)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
