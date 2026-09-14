import { useState } from 'react';
import { FlaskConical, Clock, ShieldCheck, CheckCircle2, MessageCircle, Phone, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface LabTestBookingProps {
  onBookTest: () => void;
}

export default function LabTestBooking({ onBookTest }: LabTestBookingProps) {
  const [selectedPackage, setSelectedPackage] = useState<string>('full-body');

  const testPackages = [
    {
      id: 'full-body',
      name: 'Comprehensive Full Body Profile',
      testsCount: '64 Parameters',
      includes: 'CBC, Blood Sugar Fasting, HbA1c, Lipid Profile, Liver Function (LFT), Kidney Function (KFT), Thyroid (TSH), Urine Routine',
      turnaround: 'Same Day WhatsApp Report',
      ideal: 'Annual health check & chronic condition tracking',
      tag: 'Most Recommended'
    },
    {
      id: 'diabetic',
      name: 'Diabetic Health Monitoring',
      testsCount: '12 Parameters',
      includes: 'Fasting Blood Sugar, Post-Prandial (PP), HbA1c 3-Month Average, Urine Microalbumin, Serum Creatinine',
      turnaround: 'Report in 6 Hours',
      ideal: 'Diabetic and pre-diabetic patients monitoring medication'
    },
    {
      id: 'senior-vital',
      name: 'Senior Citizen Vital Organ Check',
      testsCount: '48 Parameters',
      includes: 'Complete Blood Count, Calcium, Vitamin D3, Vitamin B12, Uric Acid, Kidney & Liver Profile, Lipid Profile',
      turnaround: 'Same Day WhatsApp Report',
      ideal: 'Elders experiencing joint pain, fatigue, or post-surgery'
    },
    {
      id: 'individual-tests',
      name: 'Individual Prescription Tests',
      testsCount: 'As Prescribed',
      includes: 'CBC, Dengue NS1 / IgM, Malaria, Widal Typhoid, Serum Electrolytes, Troponin-I, Urine Culture & Routine',
      turnaround: 'Prompt 4-8 Hours',
      ideal: 'Doctor prescribed emergency routine diagnostic tests'
    }
  ];

  const whatsappLabUrl = `https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
    `Hello Indra Home Health Care Service, I want to book a Home Lab Sample Collection in Indore for: "${testPackages.find(p => p.id === selectedPackage)?.name}". Please share appointment slots.`
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase">
              <FlaskConical className="w-3.5 h-3.5" />
              Service #2 from Banner
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Lab Tests & Blood Sample Collection at Your Home
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              No need to take sick or elderly family members through Indore traffic or wait in diagnostic queues. Our certified phlebotomists arrive with sealed disposable vacutainers for gentle, hygienic sample drawing.
            </p>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Early morning fasting slots (6:30 AM – 11:30 AM)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Sterile single-use vacuum tubes ensuring zero contamination</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Digital PDF reports delivered directly to your WhatsApp & Email</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Verified NABL accredited quality testing standards</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                id="lab-whatsapp-cta"
                href={whatsappLabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Home Sample on WhatsApp</span>
              </a>

              <button
                id="lab-book-modal-cta"
                onClick={onBookTest}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm shadow-xs flex items-center gap-2 transition-all ring-1 ring-teal-400"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call 9301258566 (Preferred)</span>
              </button>
            </div>
          </div>

          {/* Right: Package selector cards */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Select Test or Package
              </span>
              <span className="text-xs text-teal-700 font-semibold">
                Available Across All Indore Localities
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {testPackages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-50/70 border-teal-600 shadow-md ring-1 ring-teal-600'
                        : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-teal-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-md">
                          {pkg.testsCount}
                        </span>
                        {pkg.tag && (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                            {pkg.tag}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-sm leading-snug">
                        {pkg.name}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-3">
                        {pkg.includes}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3 h-3 text-teal-600" />
                        {pkg.turnaround}
                      </span>
                      <span className="font-semibold text-teal-800">
                        {isSelected ? 'Selected' : 'Select'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Testimonial snippet */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                <strong>Doctor's Prescription?</strong> Just snap a photo and send to <strong>9301258566</strong> on WhatsApp. Our medical team will schedule sample pickup immediately.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
