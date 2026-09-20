import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import CareAssessmentWizard from './components/CareAssessmentWizard';
import MedicalEquipmentCatalog from './components/MedicalEquipmentCatalog';
import LabTestBooking from './components/LabTestBooking';
import TrustAndCredentials from './components/TrustAndCredentials';
import ServiceCitiesCoverage from './components/ServiceCitiesCoverage';
import ContactAndFAQSection from './components/ContactAndFAQSection';
import Footer from './components/Footer';
import EmergencyStickyBar from './components/EmergencyStickyBar';
import ServiceDetailModal from './components/ServiceDetailModal';
import BookingModal from './components/BookingModal';
import { ServiceItem } from './types';
import { SERVICES_LIST } from './data/servicesData';
import { Analytics } from '@vercel/analytics/next';

export default function App() {
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedCity, setPreselectedCity] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string, cityName?: string) => {
    setPreselectedServiceId(serviceId || SERVICES_LIST[0].id);
    if (cityName) {
      setPreselectedCity(cityName);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleOpenDetailModal = (service: ServiceItem) => {
    setSelectedDetailService(service);
  };

  const handleCloseDetailModal = () => {
    setSelectedDetailService(null);
  };

  const handleBookFromDetail = (serviceId: string) => {
    setSelectedDetailService(null);
    handleOpenBooking(serviceId);
  };

  const handleRequestEquipment = () => {
    handleOpenBooking('medical-equipment');
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreServices={scrollToServices}
        />

        {/* All 11 Services Showcase */}
        <ServicesSection
          onSelectService={handleOpenDetailModal}
          onBookService={handleOpenBooking}
        />

        {/* Interactive Care Assessment Wizard */}
        <CareAssessmentWizard
          onSelectService={(serviceId) => {
            const match = SERVICES_LIST.find((s) => s.id === serviceId);
            if (match) handleOpenDetailModal(match);
          }}
          onOpenBooking={handleOpenBooking}
        />

        {/* Medical Equipment Rental & Sales */}
        <MedicalEquipmentCatalog
          onRequestEquipment={handleRequestEquipment}
        />

        {/* Lab Tests Home Collection */}
        <LabTestBooking
          onBookTest={() => handleOpenBooking('lab-test-home-services')}
        />

        {/* 6 Cities Coverage (Indore, Bhopal, Vidisha, Ujjain, Dewas, Khargone) + Indore Localities */}
        <ServiceCitiesCoverage
          onOpenBooking={handleOpenBooking}
        />

        {/* Trust, MSME Registration & Testimonials */}
        <TrustAndCredentials />

        {/* FAQs & Contact Information */}
        <ContactAndFAQSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Emergency Bar */}
      <EmergencyStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Service Scope Detail Modal */}
      <ServiceDetailModal
        service={selectedDetailService}
        onClose={handleCloseDetailModal}
        onBook={handleBookFromDetail}
      />

      {/* Interactive Booking & WhatsApp Dispatch Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        preselectedServiceId={preselectedServiceId}
        preselectedCity={preselectedCity}
        onClose={handleCloseBooking}
      />
            <Analytics />

    </div>
  );
}
