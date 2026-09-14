export type ServiceCategory = 'all' | 'nursing' | 'caretaker' | 'therapy' | 'doctor-lab' | 'emergency-equipment';

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image?: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
  shiftsAvailable: string[];
  priceHint?: string;
  isPopular?: boolean;
}

export interface MedicalEquipmentItem {
  id: string;
  name: string;
  hindiName: string;
  type: 'rental' | 'sale' | 'both';
  description: string;
  specs: string[];
  features: string[];
  depositInfo: string;
  badge?: string;
}

export interface ServiceCity {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  dispatchTime: string;
  areasCovered: string[];
  isHub?: boolean;
}

export interface IndoreLocation {
  name: string;
  areaType: string;
  responseTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  patientRelation: string;
  locality: string;
  rating: number;
  review: string;
  serviceTaken: string;
  date: string;
  source?: string;
  isJustdialVerified?: boolean;
}

export interface BookingFormData {
  patientName: string;
  age: string;
  gender: 'male' | 'female' | 'other' | '';
  phone: string;
  serviceId: string;
  shiftRequired: string;
  conditionBrief: string;
  city: string;
  indoreArea: string;
  address: string;
  urgent: boolean;
}
