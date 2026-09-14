import { ServiceItem, MedicalEquipmentItem, IndoreLocation, Testimonial, ServiceCity } from '../types';
import nurseCareImg from '../assets/images/home_nursing_care_1789375419362.jpg';
import icuEquipmentImg from '../assets/images/icu_equipment_home_1789375441748.jpg';
import physioRehabImg from '../assets/images/physio_rehab_care_1789375459312.jpg';
import babyNannyImg from '../assets/images/baby_nanny_care_1789375476563.jpg';

export const SERVICE_IMAGES = {
  nurseCare: nurseCareImg,
  icuEquipment: icuEquipmentImg,
  physioRehab: physioRehabImg,
  babyNanny: babyNannyImg,
};

export const BUSINESS_INFO = {
  name: 'Indra Home Health Care Service',
  hindiName: 'इन्द्रा होम हेल्थ केयर सर्विस',
  tagline: 'It is health that is real wealth and not pieces of gold and silver.',
  primaryPhone: '9301258566',
  preferredPhone: '9301258566',
  secondaryPhone: '7509787952',
  allPhones: ['9301258566', '7509787952'],
  email: 'ag4842284@gmail.com',
  registrationNumber: 'UDYAM-MP-23-0116976',
  registrationAuthority: 'Govt. of India Ministry of MSME',
  address: 'Khajrana Gate Ke Andar, 19 Main Road, Vijay Dev Krishna Paliwal, Indore, M.P.',
  city: 'Indore, Madhya Pradesh',
  cities: ['Indore', 'Bhopal', 'Vidisha', 'Ujjain', 'Dewas', 'Khargone'],
  coverageText: 'Doorstep Healthcare in Indore, Bhopal, Vidisha, Ujjain, Dewas & Khargone',
  workingHours: '24 Hours / 7 Days Available',
  establishedYear: '2020',
  trustedCustomers: '700+',
  trustedTagline: 'Trusted by 700+ All City Customers',
  justdialUrl: 'https://www.justdial.com/Indore/Indra-Home-Health-Care-Service-Near-Khajrana-Gate-Khajrana/0731PX731-X731-250527190016-G5U9_BZDET',
  justdialRating: '4.7',
  justdialReviewsCount: '40+',
  justdialPhotosCount: '79 Photos',
  justdialHighlights: [
    'JD Verified',
    '4.7 ★ on Justdial',
    'Great Customer Service',
    'Easy Booking',
    'Well-Sanitized & Safe Practices',
    '24 Hours Open',
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'physiotherapy-services',
    title: 'Physiotherapy Services',
    hindiTitle: 'फिजियोथेरेपी होम सर्विस',
    category: 'therapy',
    shortDesc: 'Certified physiotherapists visiting your home for post-surgery, paralysis, back/knee pain, and neurological rehabilitation.',
    fullDesc: 'Our licensed home physiotherapists bring advanced electrotherapy modalities (TENS, IFT, Ultrasound), customized exercise regimens, and manual therapy to your bedside. Ideal for stroke patients, orthopedic post-operative recovery, and elderly mobility restoration.',
    iconName: 'Activity',
    image: SERVICE_IMAGES.physioRehab,
    isPopular: true,
    features: [
      'Post-Operative Orthopedic Rehabilitation (Knee & Hip Replacement)',
      'Neuro-Rehabilitation for Paralysis, Stroke & Parkinson\'s',
      'Chronic Spondylosis, Sciatica & Slip Disc Relief',
      'Elderly Balance & Fall-Prevention Gait Training',
      'Advanced portable equipment brought by therapist'
    ],
    benefits: [
      'Zero travel stress or hospital waiting rooms for bedridden patients',
      '1-on-1 personalized attention and daily recovery tracking',
      'Faster functional recovery in a comfortable home environment'
    ],
    idealFor: [
      'Patients after joint replacement or fracture surgeries',
      'Stroke / Paralysis patients requiring gait and limb training',
      'Senior citizens suffering from chronic osteoarthritis'
    ],
    shiftsAvailable: ['Single Session (45-60 min)', '10-Day Intensive Package', 'Monthly Rehab Plan'],
    priceHint: 'Affordable Per-Session & Monthly Packages'
  },
  {
    id: 'lab-test-home-services',
    title: 'Lab Test Home Services',
    hindiTitle: 'घर पर ब्लड व यूरिन टेस्ट सैंपल कलेक्शन',
    category: 'doctor-lab',
    shortDesc: 'Hygienic home sample collection for blood tests, sugar tests, CBC, KFT, LFT, thyroid, and urine profiles with fast WhatsApp reports.',
    fullDesc: 'No need to take sick or elderly family members to crowded diagnostic centers. Our trained phlebotomist visits your doorstep at your preferred morning fasting hour with sterile vacuum tubes and sealed disposable needles. Verified NABL accredited lab processing.',
    iconName: 'FlaskConical',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: true,
    features: [
      'Painless sample drawing with sterile single-use vaccutainers',
      'Early morning fasting slots (6:30 AM to 11:30 AM)',
      'Accurate digital reports delivered directly to your WhatsApp & Email',
      'Full Body Checkup Packages, HbA1c, Lipid Profile, Thyroid Profile',
      'KFT, LFT, CBC, Vitamin D3 & B12, Urine Routine'
    ],
    benefits: [
      'Safe from hospital-acquired infections for immuno-compromised patients',
      'Convenient early morning sampling before routine medications',
      'Free digital report sharing with your consulting doctor'
    ],
    idealFor: [
      'Bedridden or frail elderly individuals',
      'Regular diabetic & cardiac patient monitoring',
      'Busy working professionals needing home convenience'
    ],
    shiftsAvailable: ['Morning Fasting Slot (6:30 AM - 10:30 AM)', 'Anytime Routine Collection', 'Same Day Emergency Sample'],
    priceHint: 'Discounts on Full Body Screening Profiles'
  },
  {
    id: 'care-taker-services',
    title: 'Care Taker Services',
    hindiTitle: 'मरीज व वृद्ध देखभाल सहायक (केयर टेकर)',
    category: 'caretaker',
    shortDesc: 'Compassionate male and female patient attendants providing personal hygiene, feeding, mobility, and round-the-clock comfort.',
    fullDesc: 'Indra Home Health Care provides trained, empathetic caretakers who assist non-critical and recovering patients with bathing, oral hygiene, diaper changes, bed transfers, light exercise, and timely medicine intake.',
    iconName: 'HeartHandshake',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: true,
    features: [
      'Bathing, sponging, grooming, and bed linen changes',
      'Assistance with feeding (oral and Ryle\'s tube assistance)',
      'Mobility assistance (wheelchair, walker, commode transfers)',
      'Medication administration reminders as per doctor\'s prescription',
      'Vitals recording (Blood Pressure, Sugar, Pulse Oximeter)'
    ],
    benefits: [
      'Relief for family members with verified, reliable attendants',
      'Trained in patient handling to prevent falls and bedsores',
      '100% Police & Background-verified male & female staff'
    ],
    idealFor: [
      'Patients discharged from hospital needing convalescent support',
      'Post-surgery patients with limited mobility',
      'Elderly individuals requiring companionship and daily living assistance'
    ],
    shiftsAvailable: ['12-Hour Day Shift', '12-Hour Night Shift', '24-Hour Residential Caregiver'],
    priceHint: 'Flexible Daily / Monthly Caregiver Plans'
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Services',
    hindiTitle: '24x7 इमरजेंसी एम्बुलेंस सेवा (इंदौर)',
    category: 'emergency-equipment',
    shortDesc: '24/7 Rapid emergency and non-emergency patient transfer across Indore with oxygen support and trained paramedics.',
    fullDesc: 'Quick response emergency ambulance service covering all areas of Indore. Equipped with medical oxygen, suction apparatus, foldable stretchers, and first aid kits with trained medical attendants to transfer patients safely between home and hospitals.',
    iconName: 'Siren',
    image: SERVICE_IMAGES.icuEquipment,
    isPopular: true,
    features: [
      '24/7 Instant dispatch across all Indore sectors and bypass',
      'Basic Life Support (BLS) & Advance Oxygen Ambulance',
      'Trained paramedic driver and emergency attendant on board',
      'Hospital admission, discharge, and diagnostic transfer transfers',
      'Inter-city and outstation emergency patient transfers'
    ],
    benefits: [
      'Direct urgent dispatch via 9301258566 hotline',
      'Smooth wheelchair and stretcher handling by skilled staff',
      'Oxygen cylinder equipped for respiratory emergencies'
    ],
    idealFor: [
      'Emergency hospitalizations and trauma cases',
      'Scheduled hospital discharge for bedridden patients',
      'Dialysis and chemotherapy commute for routine treatments'
    ],
    shiftsAvailable: ['Immediate Emergency Response (24x7)', 'Pre-Booked Hospital Transfer', 'Intercity Ambulance'],
    priceHint: 'Transparent, upfront tariff without hidden charges'
  },
  {
    id: 'medical-equipment',
    title: 'Medical Equipment',
    hindiTitle: 'मेडिकल उपकरण (किराये व बिक्री)',
    category: 'emergency-equipment',
    shortDesc: 'Hospital-grade medical equipment for rent and purchase with doorstep delivery and technician setup in Indore.',
    fullDesc: 'Set up an ICU or supportive medical unit at home without exorbitant costs. We provide medical-grade oxygen concentrators, hospital beds, wheelchairs, BiPAP/CPAP machines, suction units, and cardiac monitors with prompt sanitized delivery.',
    iconName: 'PackageCheck',
    image: SERVICE_IMAGES.icuEquipment,
    isPopular: true,
    features: [
      'Oxygen Concentrators (5 Liters & 10 Liters)',
      'Hospital Beds (Manual Fowler, Semi-Electric & Full ICU 5-Function)',
      'Wheelchairs (Standard, Foldable, Commode Chair)',
      'BiPAP & CPAP Machines for respiratory sleep apnea & distress',
      'Air Mattresses for bedsore prevention & Suction machines'
    ],
    benefits: [
      'Saves high hospital room rent by enabling home recovery',
      'Prompt delivery & demo by trained medical technician',
      'Rigorous sanitization and testing before each deployment'
    ],
    idealFor: [
      'Patients requiring long-term home oxygen therapy',
      'Bedridden patients at risk of painful pressure sores',
      'Post-surgery patients requiring head-up Fowler beds'
    ],
    shiftsAvailable: ['Monthly Rental', 'Weekly Rental', 'Outright Purchase'],
    priceHint: 'Affordable monthly rental with security deposit'
  },
  {
    id: 'baby-caretaker-services',
    title: 'Baby Caretaker Services',
    hindiTitle: 'शिशु व न्यूबॉर्न केयरटेकर (जापा मेड)',
    category: 'caretaker',
    shortDesc: 'Experienced newborn nannies and trained baby caretakers for infant massage, hygiene, feeding support, and mother care.',
    fullDesc: 'Welcoming a new baby is precious yet demanding. Our experienced baby caretakers (Japa maids and infant nurses) provide gentle Ayurvedic infant oil massage, sterile sponge baths, burping, sterilization of bottles, and restful support to new mothers.',
    iconName: 'Baby',
    image: SERVICE_IMAGES.babyNanny,
    isPopular: false,
    features: [
      'Traditional gentle infant oil massage and bath',
      'Sterilization of feeding bottles and utensils',
      'Newborn sleep scheduling and diaper rash prevention',
      'Postnatal care and nutritious diet support for the new mother',
      'Colic relief techniques and safe infant holding'
    ],
    benefits: [
      'Allows new mothers to rest, heal, and recover post-delivery',
      'Trained hands with years of experience handling infants safely',
      'Polite, respectful, and hygiene-conscious female caretakers'
    ],
    idealFor: [
      'Newborns (Day 1 to 12 months) requiring specialized care',
      'Mothers recovering from C-section surgery needing physical rest',
      'Nuclear families without extended elderly support'
    ],
    shiftsAvailable: ['10-Hour Day Shift', '12-Hour Shift', '24-Hour Live-in Nanny'],
    priceHint: 'Monthly & 40-Day Japa Care Packages'
  },
  {
    id: 'on-call-doctor',
    title: 'On Call Doctor',
    hindiTitle: 'ऑन कॉल डॉक्टर होम विजिट',
    category: 'doctor-lab',
    shortDesc: 'Qualified general physicians visiting your home for patient examinations, diagnosis, and medical treatment plans.',
    fullDesc: 'Avoid strenuous traveling and long waiting queues in clinics. Our on-call general physicians visit your home in Indore for comprehensive clinical evaluation, elderly health review, vital signs diagnosis, and digital prescriptions.',
    iconName: 'Stethoscope',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: false,
    features: [
      'Comprehensive clinical bedside examination',
      'Vitals check: BP, Pulse, SPO2, Blood Sugar, Chest Auscultation',
      'Treatment prescription and review of ongoing polypharmacy',
      'Guidance on hospital admission if critical care is warranted',
      'Follow-up telephonic consultations'
    ],
    benefits: [
      'Prevents hospital-acquired bacterial exposure for frail elders',
      'Doctor sees patient in their natural home environment for better context',
      'Convenient scheduling including evening home visits'
    ],
    idealFor: [
      'Elderly or bedridden patients unable to sit in car/traffic',
      'Sudden fever, cough, seasonal illness, or dehydration',
      'Routine chronic disease management checkup'
    ],
    shiftsAvailable: ['Scheduled Home Visit', 'Same-Day Urgent Visit', 'Routine Monthly Follow-up'],
    priceHint: 'Transparent per-visit doctor consultation fee'
  },
  {
    id: 'on-call-nurses',
    title: 'On Call Nurses',
    hindiTitle: 'ऑन कॉल नर्सिंग प्रोसीजर विजिट',
    category: 'nursing',
    shortDesc: 'Registered nurses on-demand for quick procedures: injections, IV cannula/drip, catheterization, and sterile wound dressing.',
    fullDesc: 'Need an injection or IV saline bottle changed at home? Our registered male and female nurses arrive equipped with sterile medical supplies to perform clinical procedures safely under doctor prescription.',
    iconName: 'Syringe',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: true,
    features: [
      'Intramuscular (IM) and Intravenous (IV) Injections',
      'IV Cannulation, Saline Infusion, and Antibiotic administration',
      'Urinary Catheter insertion, removal, and bladder wash',
      'Ryle\'s Tube (Nasogastric Tube) insertion and feeding guidance',
      'Post-surgical suture removal and sterile dressing for bedsores'
    ],
    benefits: [
      'Eliminates the cost and trouble of clinic visits for 15-minute procedures',
      'Strict adherence to aseptic technique preventing wound infection',
      'Quick response across Indore within 1 to 2 hours of booking'
    ],
    idealFor: [
      'Patients needing regular antibiotic drip or vitamin injections',
      'Bedridden patients requiring catheter or feeding tube replacement',
      'Post-surgery patients requiring dressing change'
    ],
    shiftsAvailable: ['Per-Procedure Visit (30-45 mins)', 'Twice Daily Procedure Visit', 'Weekly Dressing Package'],
    priceHint: 'Cost-effective per procedure fee'
  },
  {
    id: 'skilled-nursing-services',
    title: 'Skilled Nursing Services',
    hindiTitle: 'स्किल्ड व क्रिटिकल केयर नर्सिंग (ICU एट होम)',
    category: 'nursing',
    shortDesc: 'Specialized GNM & B.Sc ICU nurses for tracheostomy care, ventilator support, PEG feeding, and critical patient management.',
    fullDesc: 'Providing intensive medical care at home comparable to a hospital step-down unit. Our skilled critical-care nurses manage high-dependency patients on tracheostomy suctioning, invasive ventilators, central venous lines, and continuous cardiac monitoring.',
    iconName: 'ShieldAlert',
    image: SERVICE_IMAGES.icuEquipment,
    isPopular: false,
    features: [
      'Tracheostomy tube care, sterile deep suctioning & cannula change',
      'Home mechanical ventilator and oxygen titration monitoring',
      'Total Parenteral Nutrition (TPN) & Central Line / PICC line management',
      'Arterial blood gas (ABG) clinical monitoring & emergency resuscitation',
      'Detailed hourly vitals chart maintenance'
    ],
    benefits: [
      'Allows critical patients to stay home with loved ones safely',
      'Reduces exorbitant private hospital ICU bills by up to 60-70%',
      'Supervised by senior medical coordinators'
    ],
    idealFor: [
      'Patients weaned off hospital ICU needing step-down care',
      'Comatose or semi-conscious patients on tracheostomy / ventilator',
      'Advanced neurological and terminal palliative care'
    ],
    shiftsAvailable: ['12-Hour Day Shift', '12-Hour Night Shift', '24-Hour Continuous ICU Nurse Rotation'],
    priceHint: 'Customized clinical assessment and package'
  },
  {
    id: 'home-nursing-services',
    title: 'Home Nursing Services',
    hindiTitle: 'होम नर्सिंग सेवाएं (12 घंटे / 24 घंटे)',
    category: 'nursing',
    shortDesc: 'Dedicated qualified male & female nurses for 12 or 24-hour continuous post-operative and medical recovery at home.',
    fullDesc: 'Comprehensive round-the-clock nursing care delivered with clinical excellence and warmth. Our nurses handle medication administration, vital sign logs, diabetic blood sugar control, surgical site monitoring, and doctor-coordinated recovery protocols.',
    iconName: 'UserCheck',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: true,
    features: [
      '12-hour or 24-hour continuous dedicated bedside nursing',
      'Administration of all oral, IV, and injectable medications',
      'Prevention and active management of pressure ulcers (bedsores)',
      'Coordination with attending surgeon or family doctor',
      'Daily vitals recording (BP, Sugar, Pulse, Temperature, SpO2)'
    ],
    benefits: [
      'Constant professional medical vigilance around the clock',
      'Rapid recognition of clinical deterioration and timely intervention',
      'Compassionate and dignified patient care'
    ],
    idealFor: [
      'Post-cardiac bypass, cancer, or major abdominal surgery recovery',
      'Severe stroke recovery and post-hospitalization rehab',
      'Patients requiring active clinical monitoring'
    ],
    shiftsAvailable: ['12-Hour Day Nursing', '12-Hour Night Nursing', '24-Hour Full-Time Nursing (Rotational)'],
    priceHint: 'Transparent monthly & daily rates'
  },
  {
    id: 'senior-citizec-care-taker',
    title: 'Senior Citizen Care Taker',
    hindiTitle: 'सीनियर सिटीजन केयर टेकर (वृद्धजन सेवा)',
    category: 'caretaker',
    shortDesc: 'Dedicated geriatric caregivers providing respectful personal care, dementia support, mobility help, and warm companionship for elders.',
    fullDesc: 'Our senior citizen caregivers are trained in geriatric sensitivity, patience, and respectful handling. They provide constant companionship, monitor routine health, accompany elders for walks, assist with toileting and bathing, and ensure medicines are taken on schedule.',
    iconName: 'HeartPulse',
    image: SERVICE_IMAGES.nurseCare,
    isPopular: true,
    features: [
      'Assistance with personal grooming, bathing, dressing, and hygiene',
      'Medication reminders and vital signs recording',
      'Companionship, reading, emotional support, and mental engagement',
      'Assisted walking and physical therapy exercise encouragement',
      'Dementia, Alzheimer\'s, and Parkinson\'s disease care support'
    ],
    benefits: [
      'Peace of mind for working children and NRI family members',
      'Reduces loneliness and feelings of vulnerability among senior citizens',
      'Prevents hazardous domestic slip-and-fall incidents'
    ],
    idealFor: [
      'Elderly parents living alone in Indore while children work abroad/away',
      'Seniors diagnosed with memory loss, Alzheimer\'s, or Parkinson\'s',
      'Frail elders needing everyday physical mobility assistance'
    ],
    shiftsAvailable: ['12-Hour Day Care', '12-Hour Night Assistance', '24-Hour Live-in Geriatric Attendant'],
    priceHint: 'Dedicated monthly packages with staff replacement guarantee'
  }
];

export const MEDICAL_EQUIPMENT_LIST: MedicalEquipmentItem[] = [
  {
    id: 'oxygen-concentrator',
    name: 'Medical Oxygen Concentrator (5L / 10L)',
    hindiName: 'ऑक्सीजन कंसंट्रेटर (5L / 10L)',
    type: 'both',
    description: 'High-purity (93% +/- 3%) continuous medical oxygen flow without the hassle of cylinder refills.',
    specs: ['Flow Rate: 1-5 LPM / 1-10 LPM', 'Purity: 93% ± 3%', 'Built-in Nebulizer & Purity Indicator', 'Low Noise Operation (<45 dB)'],
    features: ['Pre-sanitized unit', 'Free Nasal Cannula & Humidifier bottle', 'Technician delivery and demo'],
    depositInfo: 'Refundable security deposit applicable on rental',
    badge: 'High Demand'
  },
  {
    id: 'icu-hospital-bed',
    name: 'Hospital ICU Bed (Electric & Manual Fowler)',
    hindiName: 'हॉस्पिटल आईसीयू बेड (इलेक्ट्रिक / मैन्युअल)',
    type: 'both',
    description: 'Adjustable backrest, knee rest, and height elevation with collateral safety side rails and IV pole.',
    specs: ['Manual 2-Function / Motorized Electric 3 & 5 Function', 'ABS Head & Foot Boards', 'Collapsible Aluminum Railings', 'Heavy-duty caster wheels with brakes'],
    features: ['Comes with medical waterproof mattress', 'Easy remote control for electric variants', 'Safe patient repositioning'],
    depositInfo: 'Monthly rental available with doorstep installation',
    badge: 'Popular'
  },
  {
    id: 'bipap-cpap',
    name: 'BiPAP & CPAP Respiratory Machine',
    hindiName: 'बाईपैप एवं सीपैप मशीन',
    type: 'both',
    description: 'Non-invasive ventilator support for COPD, obstructive sleep apnea, and respiratory distress.',
    specs: ['Auto-titrating pressure modes (S, T, ST)', 'Integrated heated humidifier', 'Data recording SD card', 'Full face and nasal masks included'],
    features: ['Pre-calibrated as per doctor prescription', 'Includes tubing and sealed mask', '24/7 technical support'],
    depositInfo: 'Available for short-term and long-term rental'
  },
  {
    id: 'wheelchair-commode',
    name: 'Wheelchair & Commode Chair',
    hindiName: 'व्हीलचेयर एवं कमोड चेयर',
    type: 'both',
    description: 'Lightweight foldable wheelchairs, reclining high-back models, and portable commode chairs for easy mobility.',
    specs: ['Chrome-plated or lightweight aluminum frame', 'Foldable design for car trunk transport', 'Removable footrests & padded armrests', 'Load capacity up to 120 kg'],
    features: ['Easy to steer indoors and outdoors', 'Detachable commode bucket with lid', 'Puncture-proof solid rubber tires'],
    depositInfo: 'Affordable weekly & monthly rental'
  },
  {
    id: 'air-mattress',
    name: 'Anti-Bedsore Air Mattress with Pump',
    hindiName: 'एयर गद्दा (बेडसोर रोकथाम)',
    type: 'both',
    description: 'Alternating pressure bubble ripple mattress preventing painful pressure ulcers and bedsores for bedridden patients.',
    specs: ['Ultra-silent motor pump', 'Alternating inflation/deflation cycle (10-12 mins)', 'Medical-grade non-toxic PVC material', 'Variable pressure control knob'],
    features: ['Essential for patients in bed >15 hours/day', 'Immediate relief from skin breakdown', 'Fits standard single/hospital beds'],
    depositInfo: 'Available for immediate rental and purchase'
  },
  {
    id: 'suction-machine',
    name: 'Portable Phlegm Suction Machine',
    hindiName: 'पोर्टेबल सक्शन मशीन',
    type: 'both',
    description: 'High-vacuum suction unit for tracheostomy care and clearing respiratory tract secretions.',
    specs: ['Oil-free maintenance-free lubrication pump', 'Vacuum regulator & pressure gauge', 'Autoclavable polycarbonate jar', 'Anti-overflow device'],
    features: ['Includes sterile suction catheters', 'Compact & portable with handle', 'Technician guidance on safe usage'],
    depositInfo: 'Monthly rental available'
  }
];

export const INDORE_LOCATIONS: IndoreLocation[] = [
  { name: 'Khajrana & Main Road (Our Hub)', areaType: 'Immediate Hub', responseTime: 'Within 30 Mins' },
  { name: 'Vijay Nagar & Scheme 54/78', areaType: 'Major Sector', responseTime: '30-45 Mins' },
  { name: 'Palasia (Old & New)', areaType: 'Central Indore', responseTime: '30-45 Mins' },
  { name: 'Bengali Square & Kanadiya Road', areaType: 'East Indore', responseTime: '30-45 Mins' },
  { name: 'Bypass Road & Phoenix Citadel Area', areaType: 'Extended Sector', responseTime: '45-60 Mins' },
  { name: 'Sudama Nagar & Annapurna', areaType: 'West Indore', responseTime: '45-60 Mins' },
  { name: 'Rajwada, Sarafa & MG Road', areaType: 'City Center', responseTime: '30-45 Mins' },
  { name: 'Geeta Bhawan & AB Road', areaType: 'Central Indore', responseTime: '30-45 Mins' },
  { name: 'Super Corridor & Ujjain Road', areaType: 'North Indore', responseTime: '45-60 Mins' },
  { name: 'Bhawarkua & Sapna Sangeeta', areaType: 'South Indore', responseTime: '30-45 Mins' },
  { name: 'Rau, Silicon City & Cat Road', areaType: 'Outer South', responseTime: '45-60 Mins' }
];

export const SERVICE_CITIES: ServiceCity[] = [
  {
    id: 'indore',
    name: 'Indore',
    hindiName: 'इंदौर',
    tagline: 'Headquarters & Primary Dispatch Hub',
    dispatchTime: '30 - 45 Minutes',
    isHub: true,
    areasCovered: ['Khajrana (Main Hub)', 'Vijay Nagar', 'Palasia', 'Bengali Square', 'Sudama Nagar', 'Rajwada', 'Bypass Road', 'Rau & Silicon City']
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    hindiName: 'भोपाल',
    tagline: 'Capital Regional Network',
    dispatchTime: 'Same-Day / 2-4 Hours',
    areasCovered: ['MP Nagar', 'Arera Colony', 'Kolar Road', 'Hoshangabad Road', 'Ayodhya Bypass', 'Shahpura', 'Bairagarh']
  },
  {
    id: 'vidisha',
    name: 'Vidisha',
    hindiName: 'विदिशा',
    tagline: 'Doorstep Care & Attendant Support',
    dispatchTime: 'Scheduled & Same-Day Dispatch',
    areasCovered: ['Station Road', 'Ahmedpur Road', 'Durga Nagar', 'Civil Lines', 'Sanchi Road', 'Medical College Area']
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    hindiName: 'उज्जैन',
    tagline: 'Direct Dispatch from Indore Corridor',
    dispatchTime: '1 - 2 Hours',
    areasCovered: ['Freeganj', 'Nanakheda', 'Dewas Road', 'Mahananda Nagar', 'Agar Road', 'Mahakal Area']
  },
  {
    id: 'dewas',
    name: 'Dewas',
    hindiName: 'देवास',
    tagline: 'Rapid Industrial & Residential Route',
    dispatchTime: '45 - 60 Minutes',
    areasCovered: ['AB Road Hub', 'Vikas Nagar', 'Ujjain Road', 'Bhopal Road', 'Industrial Area', 'Mata Tekri Sector']
  },
  {
    id: 'khargone',
    name: 'Khargone',
    hindiName: 'खरगोन',
    tagline: 'Nimar Belt Healthcare Extension',
    dispatchTime: 'Daily Scheduled Shifts & Home Visits',
    areasCovered: ['Khandwa Road', 'Bistan Road', 'Navgraha Temple Area', 'Diversion Road', 'Sarafa Bazaar', 'Sanawad Link']
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 'jd1',
    author: 'Anjali Saxena',
    patientRelation: 'Daughter of Post-Surgery Mother',
    locality: 'Saket Nagar, Indore',
    rating: 5,
    review: 'Booked Indra Home Health Care Service for 24-hour post-operative nursing care for my mother. The nurse was polite, well-sanitized, and maintained strict safety protocols during sterile dressing and IV injections. Booking on 9301258566 was effortless. Great customer service!',
    serviceTaken: '24-Hour Home Nursing Service',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
  {
    id: 'jd2',
    author: 'Vikramaditya Solanki',
    patientRelation: 'Grandson of Bedridden Patient',
    locality: 'Khajrana, Indore',
    rating: 5,
    review: 'We hired a full-time senior citizen caretaker for my grandfather in Khajrana. The attendant provided by Indra Home Care was extremely patient, punctual, and well-trained in hygiene, sponge bath, and diaper care. Dependable home care service right near Khajrana Gate.',
    serviceTaken: 'Senior Citizen Care Taker Service',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
  {
    id: 'jd3',
    author: 'Dr. N. K. Joshi',
    patientRelation: 'Consultant Physician',
    locality: 'Vijay Nagar, Indore',
    rating: 5,
    review: 'Recommended Indra Home Health Care Service to my critical patient who needed a 10L oxygen concentrator and an ICU motorized bed. Delivered within 3 hours in Vijay Nagar in pristine, sanitized condition with a clear demonstration. Highly professional setup.',
    serviceTaken: 'Medical Equipment & ICU Setup at Home',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
  {
    id: 'jd4',
    author: 'Megha Agarwal',
    patientRelation: 'Mother of Newborn',
    locality: 'Old Palasia, Indore',
    rating: 5,
    review: 'Very satisfied with the baby caretaker (Japa Maid) sent to our home. She was experienced, hygienic, and handled infant bath, gentle massage, and feeding assistance with immense warmth. Safe practices and excellent support.',
    serviceTaken: 'Baby Caretaker / Babysitting at Home',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
  {
    id: 'jd5',
    author: 'Sunil Rathore',
    patientRelation: 'Son of Stroke Patient',
    locality: 'Bengali Square, Indore',
    rating: 5,
    review: 'Excellent home physiotherapy sessions for my father following paralysis. The physiotherapist was disciplined, brought modern electrotherapy equipment, and motivated him daily. Within 3 weeks my father was able to walk with support.',
    serviceTaken: 'Physiotherapy & Neuro Rehab',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
  {
    id: 'jd6',
    author: 'Pooja Verma',
    patientRelation: 'Daughter of ICU Step-down Patient',
    locality: 'Geeta Bhawan, Indore',
    rating: 5,
    review: 'The critical care GNM nurse sent by Indra Home Health Care handled tracheostomy suctioning and Ryle’s tube feeding with hospital-level perfection. 24/7 coordination on 9301258566 gives our family total peace of mind.',
    serviceTaken: 'Skilled ICU Home Nursing',
    date: 'Verified Justdial Review',
    source: 'Justdial Verified Review',
    isJustdialVerified: true,
  },
];

export const FAQ_LIST = [
  {
    question: 'In which cities are Indra Health Care Services available?',
    answer: 'Our certified home healthcare, nursing, attendant, and medical equipment services are actively available across 6 major cities in Madhya Pradesh: Indore (Headquarters), Bhopal, Vidisha, Ujjain, Dewas, and Khargone. You can book doorstep services by calling 9301258566 or 7509787952.'
  },
  {
    question: 'How quickly can a nurse or caretaker be deployed at home?',
    answer: 'In Indore, staff can be deployed within 2 to 4 hours for urgent needs. In Bhopal, Ujjain, Dewas, Vidisha, and Khargone, we arrange same-day or next-day scheduled dispatches based on your patient’s required shift (12-hour or 24-hour).'
  },
  {
    question: 'Are all nurses and caretakers background-checked and verified?',
    answer: 'Yes, 100%. We verify the government Aadhaar ID, police background record, residential address, and clinical credentials (GNM/B.Sc/ANM nursing certificates or certified attendant training) of every staff member before sending them to any family’s home.'
  },
  {
    question: 'Can I replace a caretaker or nurse if the patient does not feel comfortable?',
    answer: 'Absolutely. We understand that patient comfort and personality compatibility are critical in healthcare. If for any reason you are not satisfied with the staff, simply call us on 9301258566 or 7509787952 and we provide a prompt replacement without extra agency charges.'
  },
  {
    question: 'How does medical equipment rental work?',
    answer: 'You can choose any equipment (Oxygen Concentrator, ICU Bed, BiPAP, Wheelchair, Air Mattress). Our team delivers it directly to your doorstep in Indore and nearby regions, installs it, and gives you a complete operating demo with sterile sanitization.'
  },
  {
    question: 'What are your contact numbers and official email address?',
    answer: 'For calling, prefer our direct line: 9301258566 (secondary helpline: 7509787952). You can also email us directly at ag4842284@gmail.com or WhatsApp us at 9301258566 anytime for instant assistance.'
  },
  {
    question: 'Is Indra Home Health Care Service an officially registered business?',
    answer: 'Yes, Indra Home Health Care Service is officially registered with the Ministry of MSME, Government of India under registration number UDYAM-MP-23-0116976 as a Govt. Registered Home Health Care Service, trusted by 700+ all city customers.'
  }
];
