import { useState } from 'react';
import {
  Activity,
  FlaskConical,
  HeartHandshake,
  Siren,
  PackageCheck,
  Baby,
  Stethoscope,
  Syringe,
  ShieldAlert,
  UserCheck,
  HeartPulse,
  Search,
  Check,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService, onBookService }: ServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-teal-700';
    switch (iconName) {
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'FlaskConical':
        return <FlaskConical className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'Siren':
        return <Siren className={iconClass} />;
      case 'PackageCheck':
        return <PackageCheck className={iconClass} />;
      case 'Baby':
        return <Baby className={iconClass} />;
      case 'Stethoscope':
        return <Stethoscope className={iconClass} />;
      case 'Syringe':
        return <Syringe className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'UserCheck':
        return <UserCheck className={iconClass} />;
      case 'HeartPulse':
      default:
        return <HeartPulse className={iconClass} />;
    }
  };

  const categories: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All 11 Services', count: SERVICES_LIST.length },
    {
      id: 'nursing',
      label: 'Nursing Care',
      count: SERVICES_LIST.filter((s) => s.category === 'nursing').length,
    },
    {
      id: 'caretaker',
      label: 'Caretaker & Senior',
      count: SERVICES_LIST.filter((s) => s.category === 'caretaker').length,
    },
    {
      id: 'therapy',
      label: 'Physiotherapy',
      count: SERVICES_LIST.filter((s) => s.category === 'therapy').length,
    },
    {
      id: 'doctor-lab',
      label: 'Doctor & Lab Tests',
      count: SERVICES_LIST.filter((s) => s.category === 'doctor-lab').length,
    },
    {
      id: 'emergency-equipment',
      label: 'Ambulance & Equipment',
      count: SERVICES_LIST.filter((s) => s.category === 'emergency-equipment').length,
    },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.hindiTitle.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.features.some((f) => f.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wide uppercase border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              Complete Healthcare Services • Indore • Bhopal • Vidisha • Ujjain • Dewas • Khargone
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
              <span>★ Trusted by 700+ All City Customers</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            All Home Health Care Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            <strong>Indra Home Health Care Service</strong> provides 11 specialized clinical and bedside care services. Select any service to view medical scope, shifts, and book verified staff across Madhya Pradesh.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-teal-800 text-teal-100'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service, injection, bed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-medium">
              No services found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-teal-700 hover:underline"
            >
              Reset filters & search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-teal-300 transition-all flex flex-col justify-between group overflow-hidden"
              >
                {/* Real Service Image Thumbnail */}
                {service.image && (
                  <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    {service.isPopular && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-black bg-amber-500 text-slate-950 shadow-xs">
                        Frequently Booked
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  {/* Top card bar: icon + popularity tag (if no image) */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-100/80 transition-all">
                      {renderIcon(service.iconName)}
                    </div>
                    {!service.image && service.isPopular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        Frequently Booked
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-teal-700 font-medium mt-0.5">
                    {service.hindiTitle}
                  </p>

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Key Highlights
                    </span>
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Available Shifts */}
                  <div className="mt-4 pt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-600">Available:</span>
                    <span className="truncate">{service.shiftsAvailable.join(' • ')}</span>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                  <button
                    id={`view-details-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-teal-800 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    id={`book-${service.id}`}
                    onClick={() => onBookService(service.id)}
                    className="flex-1 py-2 px-3 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1"
                  >
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Call Out Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <Phone className="w-4 h-4 text-teal-400" />
              Direct Clinical Consultation
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Not sure which service or shift is best for the patient?
            </h3>
            <p className="text-sm text-slate-200 max-w-xl">
              Talk directly to our Indore care coordinators. We analyze the patient's medical summary, doctor prescription, and suggest the exact care required.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              id="services-call-direct"
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-extrabold shadow-md transition-all flex items-center gap-2 ring-2 ring-teal-300"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Call {BUSINESS_INFO.primaryPhone} (Preferred)</span>
            </a>

            <a
              id="services-call-secondary"
              href={`tel:${BUSINESS_INFO.secondaryPhone}`}
              className="px-4 py-3 rounded-xl bg-teal-900 text-teal-200 hover:bg-teal-950 text-xs sm:text-sm font-bold border border-teal-600 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Alt: {BUSINESS_INFO.secondaryPhone}</span>
            </a>

            <a
              id="services-whatsapp-direct"
              href={`https://wa.me/91${BUSINESS_INFO.primaryPhone}?text=${encodeURIComponent(
                'Hello Indra Home Health Care Service, I need guidance selecting the right service for my patient.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
