import { X, CheckCircle2, Phone, MessageCircle, Calendar, Clock, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onBook }: ServiceDetailModalProps) {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    `Hello Indra Home Health Care Service, I am interested in booking: "${service.title}". Please let me know rates and available staff.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                Indra Home Health Care Service • Govt. Registered
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                Trusted by 700+
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {service.title}
            </h3>
            <p className="text-xs text-teal-700 font-medium">{service.hindiTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Real Service Image Banner */}
          {service.image && (
            <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200 shadow-xs">
              <img
                src={service.image}
                alt={`${service.title} - Indra Home Health Care Service`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span className="font-semibold drop-shadow-xs">Indra Home Health Care Service • Doorstep Care</span>
                <span className="bg-teal-700/90 text-teal-100 px-2.5 py-0.5 rounded-md font-bold text-[11px]">
                  Indore & 5 Cities MP
                </span>
              </div>
            </div>
          )}

          {/* Government Reg Notice */}
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
            <span>Govt. MSME Certified Agency (UDYAM-MP-23-0116976) • 100% Verified Staff</span>
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Service Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features / Clinical Scope */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              What Is Included In This Service
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who is this ideal for? */}
          {service.idealFor && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Who Is This Service For?
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Available Shifts */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Shift Options Available (Indore, Bhopal, Vidisha, Ujjain, Dewas, Khargone)
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.shiftsAvailable.map((shift, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold"
                >
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  {shift}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Hint */}
          {service.priceHint && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Pricing & Packages:</span>
              <span className="text-teal-800 font-bold">{service.priceHint}</span>
            </div>
          )}

          {/* Cities availability note */}
          <div className="p-3 rounded-xl bg-slate-100 text-slate-600 text-xs flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
            <span>Available across: <strong>Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone</strong></span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              id="modal-call-primary"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="p-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-extrabold text-xs flex items-center gap-1.5 transition-colors ring-1 ring-teal-400"
            >
              <Phone className="w-3.5 h-3.5 text-teal-200" />
              <span>Call: {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>

            <a
              id="modal-call-secondary"
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="p-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
            </a>

            <a
              id="modal-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            id="modal-book-now-btn"
            onClick={() => {
              onClose();
              onBook(service.id);
            }}
            className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service Online</span>
          </button>
        </div>
      </div>
    </div>
  );
}
