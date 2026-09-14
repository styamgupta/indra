import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, MessageCircle, Phone, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/servicesData';

interface CareAssessmentWizardProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (serviceId: string) => void;
}

export default function CareAssessmentWizard({ onSelectService, onOpenBooking }: CareAssessmentWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [patientType, setPatientType] = useState<string>('');
  const [primaryNeed, setPrimaryNeed] = useState<string>('');
  const [timeRequirement, setTimeRequirement] = useState<string>('');

  const patientTypes = [
    { id: 'elderly', title: 'Senior Citizen / Elderly Parent', desc: 'Age 65+, mobility help, memory support or loneliness' },
    { id: 'post-surgery', title: 'Post-Surgery / Fracture Patient', desc: 'Discharged from hospital, wound dressing, recovery' },
    { id: 'stroke-neuro', title: 'Stroke, Paralysis or Neuro Patient', desc: 'Bedridden, needs physical rehab and limb training' },
    { id: 'critical-icu', title: 'Critical / High-Dependency Care', desc: 'Tracheostomy, BiPAP, oxygen support, Ryle’s tube' },
    { id: 'newborn', title: 'Newborn Baby & Mother Care', desc: 'Infant massage, bath, feeding, mother postnatal rest' },
    { id: 'routine', title: 'Routine Medical / Diagnostic Check', desc: 'Blood test, injection, doctor visit at home' },
  ];

  const needsByPatientType: Record<string, { id: string; title: string; serviceId: string }[]> = {
    elderly: [
      { id: 'daily-companion', title: 'Daily hygiene, bathing, feeding & walking help', serviceId: 'senior-citizec-care-taker' },
      { id: 'nursing-meds', title: 'Medical injections, vitals & medicine supervision', serviceId: 'home-nursing-services' },
      { id: 'physio-joint', title: 'Joint stiffness, arthritis & fall recovery exercise', serviceId: 'physiotherapy-services' },
      { id: 'equipment-bed', title: 'Hospital bed, wheelchair or oxygen concentrator', serviceId: 'medical-equipment' },
    ],
    'post-surgery': [
      { id: 'wound-dressing', title: 'Daily sterile dressing, IV injections & suture removal', serviceId: 'on-call-nurses' },
      { id: 'round-clock-nurse', title: 'Dedicated 12h / 24h nursing recovery care', serviceId: 'home-nursing-services' },
      { id: 'post-ortho-physio', title: 'Physiotherapy for joint/hip replacement rehabilitation', serviceId: 'physiotherapy-services' },
      { id: 'general-attendant', title: 'Care attendant for bathing, sponge & toilet transfers', serviceId: 'care-taker-services' },
    ],
    'stroke-neuro': [
      { id: 'stroke-physio', title: 'Neuro-physiotherapy & paralysis limb training', serviceId: 'physiotherapy-services' },
      { id: 'bedridden-care', title: 'Full-time caregiver for diaper, feeding & position change', serviceId: 'care-taker-services' },
      { id: 'skilled-nurse', title: 'Skilled nurse for catheter, Ryle’s tube & suction', serviceId: 'skilled-nursing-services' },
      { id: 'air-bed', title: 'Anti-bedsore air mattress & Fowler hospital bed', serviceId: 'medical-equipment' },
    ],
    'critical-icu': [
      { id: 'icu-nurse-home', title: 'ICU trained GNM/B.Sc nurse for ventilator / tracheostomy', serviceId: 'skilled-nursing-services' },
      { id: 'oxygen-machine', title: 'Oxygen concentrator, BiPAP & suction apparatus', serviceId: 'medical-equipment' },
      { id: 'doctor-home', title: 'On-call doctor home clinical evaluation', serviceId: 'on-call-doctor' },
      { id: 'emergency-ambulance', title: '24x7 Emergency ambulance with oxygen', serviceId: 'ambulance-services' },
    ],
    newborn: [
      { id: 'japa-nanny', title: 'Experienced baby caretaker (massage, sponge bath, sleep)', serviceId: 'baby-caretaker-services' },
      { id: 'mother-care', title: 'Postnatal mother healing assistance & infant hygiene', serviceId: 'baby-caretaker-services' },
    ],
    routine: [
      { id: 'blood-profile', title: 'Full body blood test / thyroid / sugar at home', serviceId: 'lab-test-home-services' },
      { id: 'home-injection', title: 'Single injection / IV saline drip visit', serviceId: 'on-call-nurses' },
      { id: 'physician-visit', title: 'General physician home examination', serviceId: 'on-call-doctor' },
    ],
  };

  const shiftOptions = [
    { id: 'per-visit', label: 'Single Visit / Procedure (30 - 60 mins)' },
    { id: '12h-day', label: '12-Hour Day Shift (Morning to Evening)' },
    { id: '12h-night', label: '12-Hour Night Shift (Overnight Monitoring)' },
    { id: '24h-live-in', label: '24-Hour Continuous Support (Live-in / Rotation)' },
  ];

  // Derive suggested service
  const currentNeeds = patientType ? needsByPatientType[patientType] || needsByPatientType['elderly'] : [];
  const selectedNeedObj = currentNeeds.find((n) => n.id === primaryNeed);
  const matchedServiceId = selectedNeedObj?.serviceId || (patientType === 'newborn' ? 'baby-caretaker-services' : 'home-nursing-services');
  const matchedService = SERVICES_LIST.find((s) => s.id === matchedServiceId) || SERVICES_LIST[0];

  const handleReset = () => {
    setStep(1);
    setPatientType('');
    setPrimaryNeed('');
    setTimeRequirement('');
  };

  const whatsappInquiryUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    `Hello Indra Home Health Care Service, I used your Care Assessment tool for:
- Patient: ${patientType || 'Family Member'}
- Requirement: ${selectedNeedObj?.title || 'Home healthcare'}
- Shift Preferred: ${timeRequirement || 'Flexible'}
- Location: Indore

Please share availability and charges.`
  )}`;

  return (
    <section id="care-finder" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Care Recommender
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Find the Right Care for Your Loved One in 30 Seconds
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Answer 3 simple questions to get an instant clinical match for nurse, caretaker, or equipment in Indore.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal-700 text-white font-bold text-sm flex items-center justify-center">
                {step}
              </span>
              <span className="text-sm font-bold text-slate-800">
                {step === 1 && 'Step 1: Who needs care?'}
                {step === 2 && 'Step 2: What is the primary assistance needed?'}
                {step === 3 && 'Step 3: What shift or duration do you need?'}
                {step === 4 && 'Recommended Healthcare Solution'}
              </span>
            </div>

            {step > 1 && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-teal-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            )}
          </div>

          {/* STEP 1: Patient Type */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-700">
                Select the patient's current stage or profile:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {patientTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setPatientType(item.id);
                      setStep(2);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all ${
                      patientType === item.id
                        ? 'border-teal-600 bg-teal-50/80 shadow-xs ring-1 ring-teal-600'
                        : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Primary Need */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  What specific care or medical assistance is required?
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-teal-700 hover:underline"
                >
                  &larr; Back
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {currentNeeds.map((need) => (
                  <button
                    key={need.id}
                    onClick={() => {
                      setPrimaryNeed(need.id);
                      setStep(3);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      primaryNeed === need.id
                        ? 'border-teal-600 bg-teal-50/80 shadow-xs ring-1 ring-teal-600'
                        : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-100/60'
                    }`}
                  >
                    <span className="font-semibold text-slate-900 text-sm">{need.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Shift / Duration */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  Select your preferred shift schedule in Indore:
                </p>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-teal-700 hover:underline"
                >
                  &larr; Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {shiftOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTimeRequirement(opt.label);
                      setStep(4);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all ${
                      timeRequirement === opt.label
                        ? 'border-teal-600 bg-teal-50/80 shadow-xs ring-1 ring-teal-600'
                        : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{opt.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Customized Match Result */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white rounded-2xl p-6 border border-teal-200 shadow-sm">
                <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  Recommended Match from Indra Home Health Care Service
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {matchedService.title}
                </h3>
                <p className="text-xs text-teal-700 font-semibold mt-0.5">
                  {matchedService.hindiTitle}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {matchedService.shortDesc}
                </p>

                {/* Match Summary Badges */}
                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block font-medium">Selected Shift:</span>
                    <span className="font-bold text-slate-800">{timeRequirement}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block font-medium">Staff Verification:</span>
                    <span className="font-bold text-teal-800">100% Police & ID Verified</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 block font-medium">Location:</span>
                    <span className="font-bold text-slate-800">Doorstep in Indore</span>
                  </div>
                </div>

                {/* Key Inclusions */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-xs font-bold text-slate-700">Included in this service:</span>
                  {matchedService.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  id="wizard-whatsapp-inquiry"
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Instant Quote on WhatsApp</span>
                </a>

                <button
                  id="wizard-book-modal"
                  onClick={() => onOpenBooking(matchedService.id)}
                  className="flex-1 min-w-[180px] py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Book This Service Online</span>
                </button>

                <a
                  id="wizard-call-now"
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-xs flex items-center justify-center gap-2 transition-all ring-1 ring-teal-400"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Call {BUSINESS_INFO.primaryPhone} (Preferred)</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
