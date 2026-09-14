import { ShieldCheck, Award, Heart, CheckCircle2, Star, Quote, MapPin, ExternalLink, Camera, Sparkles, ThumbsUp, BadgeCheck } from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS_LIST, SERVICE_IMAGES } from '../data/servicesData';

export default function TrustAndCredentials() {
  const galleryImages = [
    {
      title: 'Home Nursing & Bedside Patient Care',
      hindi: 'होम नर्सिंग व मरीज देखभाल',
      desc: 'Certified GNM/B.Sc female nurse monitoring blood pressure, vitals, and medication at home.',
      image: SERVICE_IMAGES.nurseCare,
      badge: 'Verified Staff',
      aspect: 'Nursing Care',
    },
    {
      title: 'Hospital-Grade ICU Setup at Home',
      hindi: 'घर पर सम्पूर्ण ICU व ऑक्सीजन सेटअप',
      desc: 'Motorized hospital bed, digital vitals monitor, sanitized oxygen concentrator & suction unit.',
      image: SERVICE_IMAGES.icuEquipment,
      badge: 'Same-Day Dispatch',
      aspect: 'ICU Equipment',
    },
    {
      title: 'Bedside Physiotherapy & Neuro Rehab',
      hindi: 'फिजियोथेरेपी व लकवा रिहैब सेशन',
      desc: 'Expert physiotherapist conducting knee mobility, gait training, and paralysis recovery exercises.',
      image: SERVICE_IMAGES.physioRehab,
      badge: 'Licensed Physio',
      aspect: 'Physiotherapy',
    },
    {
      title: 'Baby Caregiver & Japa Maid at Home',
      hindi: 'शिशु व प्रसूता देखभाल (आया/नैनी)',
      desc: 'Experienced newborn baby caretaker providing gentle oil massage, sponge bath, and hygienic care.',
      image: SERVICE_IMAGES.babyNanny,
      badge: 'Trained Caretaker',
      aspect: 'Mother & Baby',
    },
  ];

  return (
    <section id="about-trust" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Registration & Quote Highlight Header */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            {/* Government MSME Registration Pill & 700+ Customers Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Govt. Registered Home Health Care Service • Ministry of MSME</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Trusted by 700+ All City Customers</span>
              </div>
              <a
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-bold border border-amber-500/40 transition-colors"
              >
                <BadgeCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>4.7 ★ on Justdial (40+ Reviews)</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
              Govt. Registered Home Health Care Service
            </h2>
            <p className="text-teal-300 font-mono text-base font-bold mb-6">
              Official Registration No: {BUSINESS_INFO.registrationNumber}
            </p>

            {/* Banner's core quote */}
            <blockquote className="relative pl-5 border-l-4 border-teal-400 italic text-lg sm:text-xl text-slate-200 font-medium mb-6">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong>Indra Home Health Care Service</strong>, our mission is to bring compassionate, certified, and dignified healthcare into your household. Listed and verified on <strong>Justdial with a 4.7-star rating</strong> and trusted by 700+ all city customers across Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone, our team stands by your family 24 hours a day, 7 days a week.
            </p>

            {/* Registered Address & Preferred Calling Helpline */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Registered Hub: {BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-teal-300">
                <span>For Calling (Preferred): </span>
                <a href={`tel:${BUSINESS_INFO.primaryPhone}`} className="hover:underline text-white bg-teal-800/80 px-2.5 py-1 rounded-md border border-teal-600">
                  {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Justdial Official Profile Verification Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-300/80 shadow-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-black text-xs tracking-wider uppercase">
                  Justdial Verified
                </span>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-md text-xs font-extrabold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.7 / 5.0 Star Rating</span>
                  <span className="text-slate-500 font-normal ml-1">(40+ Customer Ratings)</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  • 79 Service Photos on Profile
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Verified Listing on Justdial Indore
              </h3>
              <p className="text-sm text-slate-600 max-w-3xl">
                Recognized on Justdial for <strong>great customer service</strong>, <strong>easy booking</strong>, and <strong>well-sanitized and safe practices</strong> across home nursing, patient care taker, babysitting, and medical equipment in Khajrana and throughout Indore.
              </p>

              {/* Justdial Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {BUSINESS_INFO.justdialHighlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto">
              <a
                id="justdial-profile-link"
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>View Live Justdial Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 text-center"
              >
                <span>Call {BUSINESS_INFO.primaryPhone} (Preferred)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Real Service Images Gallery */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase mb-2">
              <Camera className="w-3.5 h-3.5 text-teal-700" />
              Real Healthcare Delivery in Indore
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Certified Home Care in Action
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Genuine photographs showcasing our hospital-trained nurses, sanitized equipment, physiotherapists, and baby caretakers assisting families across Indore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {item.aspect}
                  </div>
                  <div className="absolute top-3 right-3 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {item.badge}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow justify-between space-y-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-teal-800 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-teal-700 font-medium mt-0.5">
                      {item.hindi}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-600" />
                      Indore & MP
                    </span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      100% Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">100% Police Verified</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every male and female caretaker, nurse, and attendant undergoes strict Aadhaar identity and local police background verification.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Certified Medical Staff</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Registered GNM, B.Sc & ANM nursing professionals trained in ICU protocols, wound management, catheterization, and post-op care.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Star className="w-6 h-6 fill-emerald-500" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Trusted by 700+ Customers</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Over 700+ happy families served across Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone with 4.7★ Justdial rating.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Serving 6 Cities in MP</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapid doorstep care and medical equipment delivery in Indore, Bhopal, Vidisha, Ujjain, Dewas, and Khargone.
            </p>
          </div>
        </div>

        {/* Real Justdial Verified Testimonials from All City Families */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-200">
                ★ 4.7 Rating on Justdial • 40+ Verified Reviews
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Real Customer Feedback from Justdial
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Read authentic feedback from families across Indore who booked home nursing, senior care, physiotherapy, and medical equipment through Indra Home Health Care Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS_LIST.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-teal-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {t.isJustdialVerified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                        <BadgeCheck className="w-3 h-3 text-amber-700" />
                        Justdial Verified
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                      <div className="text-xs text-slate-500">{t.patientRelation}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-teal-700 font-semibold">
                        📍 {t.locality}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Care: <strong className="text-slate-700">{t.serviceTaken}</strong></span>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Justdial Profile Bottom CTA */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
                JD
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Want to read all 40+ customer reviews or leave your feedback?
                </h4>
                <p className="text-xs text-slate-600">
                  Check out our official Justdial Indore profile with ratings, customer feedback, and service photos.
                </p>
              </div>
            </div>

            <a
              id="justdial-footer-cta"
              href={BUSINESS_INFO.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>View Justdial Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
