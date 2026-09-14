import { useState, useEffect, type FormEvent } from 'react';
import { X, CheckCircle, Phone, MessageCircle, AlertCircle, ShieldCheck, MapPin, Calendar, Clock, User, Building2 } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO, INDORE_LOCATIONS } from '../data/servicesData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  preselectedServiceId?: string;
  preselectedCity?: string;
  onClose: () => void;
}

export default function BookingModal({ isOpen, preselectedServiceId, preselectedCity, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    age: '',
    gender: '',
    phone: '',
    serviceId: preselectedServiceId || SERVICES_LIST[0].id,
    shiftRequired: '12-Hour Day Shift',
    conditionBrief: '',
    city: preselectedCity || 'Indore',
    indoreArea: 'Khajrana & Main Road (Our Hub)',
    address: '',
    urgent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update whenever props change
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
    if (preselectedCity) {
      setFormData((prev) => ({ ...prev, city: preselectedCity }));
    }
  }, [preselectedServiceId, preselectedCity]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.patientName.trim()) {
      setErrorMsg('Please enter patient name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Save to local storage for user's reference
    try {
      const existing = JSON.parse(localStorage.getItem('indra_care_bookings') || '[]');
      existing.unshift({
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('indra_care_bookings', JSON.stringify(existing.slice(0, 10)));
    } catch {
      // safe fallback
    }
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId) || SERVICES_LIST[0];

  const whatsappDispatchMessage = encodeURIComponent(
    `*NEW SERVICE BOOKING REQUEST - INDRA HOME HEALTH CARE SERVICE*
---------------------------------------
👤 *Patient Name:* ${formData.patientName} (${formData.age ? formData.age + ' yrs' : 'Age not specified'}, ${formData.gender || 'N/A'})
📞 *Contact Phone:* ${formData.phone}
🏙️ *City:* ${formData.city || 'Indore'}
📍 *Locality / Address:* ${formData.city === 'Indore' ? formData.indoreArea : formData.address || 'Doorstep delivery'}
🩺 *Service Requested:* ${selectedService.title}
⏰ *Shift / Duration:* ${formData.shiftRequired}
⚠️ *Urgency:* ${formData.urgent ? 'URGENT (Within 2-4 hours)' : 'Standard / Scheduled'}
📝 *Patient Medical Notes:* ${formData.conditionBrief || 'None specified'}
---------------------------------------
Please confirm staff availability & rates.`
  );

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${whatsappDispatchMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              Govt. Registered Home Health Care Service
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Book Home Care Service
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation State with direct WhatsApp and Call Dispatch */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">
                Booking Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.patientName}</span>. Our care coordinator for <span className="font-bold text-teal-800">{formData.city}</span> has received your request for{' '}
                <span className="font-semibold text-teal-800">{selectedService.title}</span>.
              </p>
            </div>

            {/* Instant Dispatch CTAs */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Fast-Track Confirmation via WhatsApp
              </span>
              <p className="text-xs text-slate-600">
                Tap below to send this completed booking summary directly to our coordinator on WhatsApp for fastest deployment:
              </p>
              <a
                id="booking-confirm-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Booking Summary on WhatsApp</span>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-left space-y-2 text-xs">
              <span className="font-bold text-teal-900 block">Direct Emergency Coordinators:</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="inline-flex items-center gap-1.5 font-extrabold text-teal-900 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call (Preferred): {BUSINESS_INFO.primaryPhone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* City Selection & Service Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Select City *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-teal-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600 cursor-pointer"
                  >
                    {BUSINESS_INFO.cities.map((city) => (
                      <option key={city} value={city}>
                        {city} {city === 'Indore' ? '(HQ Hub)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Select Service *
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600 cursor-pointer"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Shift or Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Shift / Duration Required *
              </label>
              <select
                value={formData.shiftRequired}
                onChange={(e) => setFormData({ ...formData, shiftRequired: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600 cursor-pointer"
              >
                <option value="12-Hour Day Shift (Morning to Evening)">12-Hour Day Shift (Morning to Evening)</option>
                <option value="12-Hour Night Shift (Overnight Care)">12-Hour Night Shift (Overnight Care)</option>
                <option value="24-Hour Continuous Residential / Live-in">24-Hour Continuous Residential / Live-in</option>
                <option value="Single Visit / Procedure (30 - 60 min)">Single Visit / Procedure (30 - 60 min)</option>
                <option value="Medical Equipment Monthly Rental">Medical Equipment Monthly Rental</option>
                <option value="Emergency Ambulance Dispatch">Emergency Ambulance Dispatch</option>
              </select>
            </div>

            {/* Patient Name and Age */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 72"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>
            </div>

            {/* Mobile Contact Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Contact Mobile Number (WhatsApp) *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                We will call back on this number to confirm staff deployment and address.
              </p>
            </div>

            {/* Locality & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {formData.city === 'Indore' ? (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Indore Locality / Hub
                  </label>
                  <select
                    value={formData.indoreArea}
                    onChange={(e) => setFormData({ ...formData, indoreArea: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  >
                    {INDORE_LOCATIONS.map((loc, idx) => (
                      <option key={idx} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Locality / Colony in {formData.city}
                  </label>
                  <input
                    type="text"
                    placeholder={`Colony/Area in ${formData.city}`}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  House / Street / Landmark
                </label>
                <input
                  type="text"
                  placeholder="House No, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>
            </div>

            {/* Medical condition / Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Patient Medical Condition Brief / Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Bedridden after hip fracture, needs diaper changing, feeding and vitals monitoring..."
                value={formData.conditionBrief}
                onChange={(e) => setFormData({ ...formData, conditionBrief: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              />
            </div>

            {/* Urgency Checkbox */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200">
              <input
                type="checkbox"
                id="urgent-check"
                checked={formData.urgent}
                onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 cursor-pointer"
              />
              <label htmlFor="urgent-check" className="text-xs font-semibold text-amber-900 cursor-pointer">
                Urgent requirement (need staff or equipment dispatched within 2 to 4 hours)
              </label>
            </div>

            {/* Security Guarantee Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Indra Care Guarantee: 100% Police & background verified male & female staff.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                id="submit-booking-form"
                type="submit"
                className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Submit Booking & Confirm on WhatsApp / Call</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
