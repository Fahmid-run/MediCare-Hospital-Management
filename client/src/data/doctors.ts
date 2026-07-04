export type Doctor = {
  id: string;
  name: string;
  degree: string;
  specialization: string;
  specialtyId: string;
  hospital: string;
  hospitalId: string;
  experience: number;
  rating: number;
  reviewCount: number;
  consultationFee: number;
  gender: 'Male' | 'Female';
  languages: string[];
  photo: string;
  availableToday: boolean;
  about: string;
  education: { degree: string; institute: string; year: number }[];
  experienceList: { role: string; place: string; years: string }[];
  certificates: string[];
  workingHours: { day: string; morning: string; afternoon: string; evening: string; available: boolean }[];
  slots: { morning: string[]; afternoon: string[]; evening: string[] };
  isNew?: boolean;
};

const photo = (seed: string) => `https://i.pravatar.cc/300?u=${seed}`;

export const doctors: Doctor[] = [
  {
    id: 'd1', name: 'Dr. Sarah Mitchell', degree: 'MBBS, MD (Cardiology)', specialization: 'Cardiologist',
    specialtyId: 'cardio', hospital: 'Apollo Heart Institute', hospitalId: 'h2', experience: 14, rating: 4.9, reviewCount: 312,
    consultationFee: 1500, gender: 'Female', languages: ['English', 'Bengali', 'Hindi'], photo: photo('sarah'), availableToday: true,
    about: 'Dr. Sarah Mitchell is a renowned cardiologist with over 14 years of experience in interventional cardiology and heart failure management. She has performed over 5,000 cardiac procedures.',
    education: [{ degree: 'MBBS', institute: 'Dhaka Medical College', year: 2006 }, { degree: 'MD Cardiology', institute: 'Bangabandhu Sheikh Mujib Medical University', year: 2011 }],
    experienceList: [{ role: 'Senior Cardiologist', place: 'Apollo Heart Institute', years: '2012 - Present' }, { role: 'Consultant', place: 'MediCare Central', years: '2009 - 2012' }],
    certificates: ['Fellow of the American College of Cardiology', 'Board Certified in Interventional Cardiology', 'Advanced Cardiac Life Support Instructor'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Mon', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Tue', morning: '09:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Thu', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: '09:00-12:00', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'] },
  },
  {
    id: 'd2', name: 'Dr. James Anderson', degree: 'MBBS, MD (Neurology)', specialization: 'Neurologist',
    specialtyId: 'neuro', hospital: 'City Neuro Center', hospitalId: 'h3', experience: 18, rating: 4.8, reviewCount: 256,
    consultationFee: 1800, gender: 'Male', languages: ['English', 'Bengali'], photo: photo('james'), availableToday: true,
    about: 'Dr. James Anderson specializes in neurology with a focus on stroke management, epilepsy, and movement disorders. He has published over 40 research papers in peer-reviewed journals.',
    education: [{ degree: 'MBBS', institute: 'Sir Salimullah Medical College', year: 2002 }, { degree: 'MD Neurology', institute: 'National Institute of Neurosciences', year: 2008 }],
    experienceList: [{ role: 'Director of Neurology', place: 'City Neuro Center', years: '2014 - Present' }, { role: 'Neurologist', place: 'MediCare Central', years: '2008 - 2014' }],
    certificates: ['Diplomate, American Board of Psychiatry and Neurology', 'Fellowship in Stroke Medicine', 'Certified in EEG Interpretation'],
    workingHours: [
      { day: 'Sun', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Mon', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: 'Closed', afternoon: '14:00-17:00', evening: 'Closed', available: false },
      { day: 'Wed', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Thu', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'] },
  },
  {
    id: 'd3', name: 'Dr. Emily Roberts', degree: 'MBBS, MS (Orthopedics)', specialization: 'Orthopedic Surgeon',
    specialtyId: 'ortho', hospital: 'MediCare Central Hospital', hospitalId: 'h1', experience: 12, rating: 4.7, reviewCount: 198,
    consultationFee: 1200, gender: 'Female', languages: ['English', 'Bengali', 'French'], photo: photo('emily'), availableToday: false,
    about: 'Dr. Emily Roberts is an orthopedic surgeon specializing in joint replacement and sports injury treatment. She has helped over 2,000 patients regain mobility.',
    education: [{ degree: 'MBBS', institute: 'Chittagong Medical College', year: 2008 }, { degree: 'MS Orthopedics', institute: 'BSMMU', year: 2013 }],
    experienceList: [{ role: 'Senior Orthopedic Surgeon', place: 'MediCare Central', years: '2015 - Present' }, { role: 'Orthopedic Consultant', place: 'Square Hospital', years: '2013 - 2015' }],
    certificates: ['Fellowship in Joint Replacement', 'Sports Medicine Certification', 'AO Trauma Course Graduate'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: '09:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Thu', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM'] },
  },
  {
    id: 'd4', name: 'Dr. Michael Chen', degree: 'MBBS, MD (Pediatrics)', specialization: 'Pediatrician',
    specialtyId: 'pedia', hospital: 'Square Children Hospital', hospitalId: 'h5', experience: 9, rating: 4.9, reviewCount: 421,
    consultationFee: 900, gender: 'Male', languages: ['English', 'Bengali', 'Mandarin'], photo: photo('michael'), availableToday: true, isNew: true,
    about: 'Dr. Michael Chen is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence.',
    education: [{ degree: 'MBBS', institute: 'Dhaka Medical College', year: 2011 }, { degree: 'MD Pediatrics', institute: 'BSMMU', year: 2016 }],
    experienceList: [{ role: 'Pediatrician', place: 'Square Children Hospital', years: '2017 - Present' }, { role: 'Junior Consultant', place: 'GreenLife', years: '2016 - 2017' }],
    certificates: ['Neonatal Resuscitation Program', 'Pediatric Advanced Life Support', 'Child Development Specialist'],
    workingHours: [
      { day: 'Sun', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Tue', morning: '08:00-12:00', afternoon: 'Closed', evening: '18:00-20:00', available: true },
      { day: 'Wed', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Thu', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM'] },
  },
  {
    id: 'd5', name: 'Dr. Olivia Park', degree: 'MBBS, MD (Dermatology)', specialization: 'Dermatologist',
    specialtyId: 'derma', hospital: 'MediCare Central Hospital', hospitalId: 'h1', experience: 7, rating: 4.6, reviewCount: 167,
    consultationFee: 1100, gender: 'Female', languages: ['English', 'Bengali', 'Korean'], photo: photo('olivia'), availableToday: true,
    about: 'Dr. Olivia Park is a dermatologist specializing in cosmetic dermatology, acne treatment, and skin cancer prevention.',
    education: [{ degree: 'MBBS', institute: 'Sir Salimullah Medical College', year: 2013 }, { degree: 'MD Dermatology', institute: 'BSMMU', year: 2018 }],
    experienceList: [{ role: 'Dermatologist', place: 'MediCare Central', years: '2019 - Present' }],
    certificates: ['Cosmetic Dermatology Certification', 'Laser Therapy Specialist', 'Skin Cancer Screening Certified'],
    workingHours: [
      { day: 'Sun', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Mon', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Tue', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Wed', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Thu', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-20:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
    ],
    slots: { morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'] },
  },
  {
    id: 'd6', name: 'Dr. Robert Taylor', degree: 'MBBS, MS (Ophthalmology)', specialization: 'Ophthalmologist',
    specialtyId: 'ophth', hospital: 'GreenLife Medical College', hospitalId: 'h4', experience: 16, rating: 4.8, reviewCount: 234,
    consultationFee: 1300, gender: 'Male', languages: ['English', 'Bengali'], photo: photo('robert'), availableToday: false,
    about: 'Dr. Robert Taylor is an ophthalmologist with expertise in cataract surgery, LASIK, and retinal disorders. He has performed over 8,000 eye surgeries.',
    education: [{ degree: 'MBBS', institute: 'Chittagong Medical College', year: 2004 }, { degree: 'MS Ophthalmology', institute: 'BSMMU', year: 2009 }],
    experienceList: [{ role: 'Senior Ophthalmologist', place: 'GreenLife Medical College', years: '2012 - Present' }, { role: 'Consultant', place: 'Apollo', years: '2009 - 2012' }],
    certificates: ['Fellowship in Retinal Surgery', 'LASIK Certification', 'American Board of Ophthalmology'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: '09:00-12:00', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Thu', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'] },
  },
  {
    id: 'd7', name: 'Dr. Sophia Lee', degree: 'MBBS, MD (Psychiatry)', specialization: 'Psychiatrist',
    specialtyId: 'psych', hospital: 'City Neuro Center', hospitalId: 'h3', experience: 11, rating: 4.7, reviewCount: 145,
    consultationFee: 1600, gender: 'Female', languages: ['English', 'Bengali', 'Japanese'], photo: photo('sophia'), availableToday: true,
    about: 'Dr. Sophia Lee is a psychiatrist focused on anxiety, depression, and cognitive behavioral therapy with a holistic approach to mental wellness.',
    education: [{ degree: 'MBBS', institute: 'Dhaka Medical College', year: 2009 }, { degree: 'MD Psychiatry', institute: 'BSMMU', year: 2014 }],
    experienceList: [{ role: 'Senior Psychiatrist', place: 'City Neuro Center', years: '2016 - Present' }],
    certificates: ['CBT Certification', 'Addiction Medicine Specialist', 'Mindfulness-Based Therapy Certified'],
    workingHours: [
      { day: 'Sun', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Mon', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Wed', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Thu', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
    ],
    slots: { morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'] },
  },
  {
    id: 'd8', name: 'Dr. David Kim', degree: 'MBBS, MD (Oncology)', specialization: 'Oncologist',
    specialtyId: 'onco', hospital: 'Apollo Heart Institute', hospitalId: 'h2', experience: 20, rating: 4.9, reviewCount: 189,
    consultationFee: 2200, gender: 'Male', languages: ['English', 'Bengali', 'Korean'], photo: photo('david'), availableToday: false,
    about: 'Dr. David Kim is a leading oncologist with two decades of experience in chemotherapy, immunotherapy, and personalized cancer treatment plans.',
    education: [{ degree: 'MBBS', institute: 'Sir Salimullah Medical College', year: 2000 }, { degree: 'MD Oncology', institute: 'National Cancer Institute', year: 2006 }],
    experienceList: [{ role: 'Director of Oncology', place: 'Apollo Heart Institute', years: '2010 - Present' }, { role: 'Oncologist', place: 'MediCare Central', years: '2006 - 2010' }],
    certificates: ['Fellowship in Medical Oncology', 'Immunotherapy Certification', 'Palliative Care Specialist'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Thu', morning: '09:00-12:00', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM'] },
  },
  {
    id: 'd9', name: 'Dr. Isabella Garcia', degree: 'MBBS, MD (Gynecology)', specialization: 'Gynecologist',
    specialtyId: 'gyno', hospital: 'Square Children Hospital', hospitalId: 'h5', experience: 13, rating: 4.8, reviewCount: 278,
    consultationFee: 1400, gender: 'Female', languages: ['English', 'Bengali', 'Spanish'], photo: photo('isabella'), availableToday: true,
    about: 'Dr. Isabella Garcia is a gynecologist specializing in maternal health, fertility treatments, and minimally invasive gynecological surgery.',
    education: [{ degree: 'MBBS', institute: 'Chittagong Medical College', year: 2007 }, { degree: 'MD Gynecology', institute: 'BSMMU', year: 2012 }],
    experienceList: [{ role: 'Senior Gynecologist', place: 'Square Children Hospital', years: '2014 - Present' }],
    certificates: ['Fellowship in Reproductive Medicine', 'Laparoscopic Surgery Certified', 'High-Risk Pregnancy Specialist'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Mon', morning: '09:00-12:00', afternoon: 'Closed', evening: '18:00-20:00', available: true },
      { day: 'Tue', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Wed', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Thu', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: 'Closed', evening: 'Closed', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM'] },
  },
  {
    id: 'd10', name: 'Dr. William Brown', degree: 'MBBS, MD (General Medicine)', specialization: 'General Physician',
    specialtyId: 'gener', hospital: 'MediCare Central Hospital', hospitalId: 'h1', experience: 22, rating: 4.7, reviewCount: 502,
    consultationFee: 800, gender: 'Male', languages: ['English', 'Bengali', 'Arabic'], photo: photo('william'), availableToday: true,
    about: 'Dr. William Brown is a seasoned general physician providing comprehensive primary care for adults with a focus on preventive medicine.',
    education: [{ degree: 'MBBS', institute: 'Dhaka Medical College', year: 1998 }, { degree: 'MD General Medicine', institute: 'BSMMU', year: 2003 }],
    experienceList: [{ role: 'Chief Physician', place: 'MediCare Central', years: '2010 - Present' }, { role: 'Physician', place: 'GreenLife', years: '2003 - 2010' }],
    certificates: ['Internal Medicine Board Certified', 'Diabetes Care Specialist', 'Hypertension Management Certified'],
    workingHours: [
      { day: 'Sun', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Mon', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Thu', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '08:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'] },
  },
  {
    id: 'd11', name: 'Dr. Charlotte Wilson', degree: 'BDS, MDS (Dental Surgery)', specialization: 'Dental Surgeon',
    specialtyId: 'dental', hospital: 'GreenLife Medical College', hospitalId: 'h4', experience: 8, rating: 4.6, reviewCount: 156,
    consultationFee: 1000, gender: 'Female', languages: ['English', 'Bengali'], photo: photo('charlotte'), availableToday: true, isNew: true,
    about: 'Dr. Charlotte Wilson is a dental surgeon specializing in cosmetic dentistry, implants, and orthodontics with a gentle, patient-first approach.',
    education: [{ degree: 'BDS', institute: 'Dhaka Dental College', year: 2012 }, { degree: 'MDS', institute: 'BSMMU', year: 2017 }],
    experienceList: [{ role: 'Dental Surgeon', place: 'GreenLife Medical College', years: '2018 - Present' }],
    certificates: ['Implant Dentistry Certification', 'Invisalign Provider', 'Cosmetic Dentistry Specialist'],
    workingHours: [
      { day: 'Sun', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Tue', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: '18:00-20:00', available: true },
      { day: 'Wed', morning: '09:00-12:00', afternoon: 'Closed', evening: '18:00-20:00', available: true },
      { day: 'Thu', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '09:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
    ],
    slots: { morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM'] },
  },
  {
    id: 'd12', name: 'Dr. Daniel Martinez', degree: 'MBBS, MS (ENT)', specialization: 'ENT Specialist',
    specialtyId: 'ent', hospital: 'City Neuro Center', hospitalId: 'h3', experience: 15, rating: 4.7, reviewCount: 203,
    consultationFee: 1150, gender: 'Male', languages: ['English', 'Bengali', 'Spanish'], photo: photo('daniel'), availableToday: false,
    about: 'Dr. Daniel Martinez is an ENT specialist treating disorders of the ear, nose, throat, and head & neck with surgical and medical expertise.',
    education: [{ degree: 'MBBS', institute: 'Sir Salimullah Medical College', year: 2005 }, { degree: 'MS ENT', institute: 'BSMMU', year: 2010 }],
    experienceList: [{ role: 'Senior ENT Specialist', place: 'City Neuro Center', years: '2013 - Present' }, { role: 'ENT Surgeon', place: 'MediCare Central', years: '2010 - 2013' }],
    certificates: ['Head & Neck Surgery Fellowship', 'Cochlear Implant Certified', 'Sleep Apnea Treatment Specialist'],
    workingHours: [
      { day: 'Sun', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Mon', morning: '10:00-12:00', afternoon: 'Closed', evening: '18:00-21:00', available: true },
      { day: 'Tue', morning: 'Closed', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Wed', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: 'Closed', available: true },
      { day: 'Thu', morning: '10:00-12:00', afternoon: '14:00-17:00', evening: '18:00-21:00', available: true },
      { day: 'Fri', morning: 'Closed', afternoon: 'Closed', evening: 'Closed', available: false },
      { day: 'Sat', morning: '10:00-12:00', afternoon: 'Closed', evening: 'Closed', available: true },
    ],
    slots: { morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'], afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'], evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'] },
  },
];
