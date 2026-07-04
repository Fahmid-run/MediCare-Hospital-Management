export type Specialty = {
  id: string;
  name: string;
  icon: string;
  description: string;
  doctorCount: number;
  color: string;
};

export const specialties: Specialty[] = [
  { id: 'cardio', name: 'Cardiology', icon: 'HeartPulse', description: 'Heart & vascular care', doctorCount: 24, color: 'rose' },
  { id: 'neuro', name: 'Neurology', icon: 'Brain', description: 'Brain & nervous system', doctorCount: 18, color: 'violet' },
  { id: 'ortho', name: 'Orthopedics', icon: 'Bone', description: 'Bones & joints', doctorCount: 21, color: 'amber' },
  { id: 'ophth', name: 'Ophthalmology', icon: 'Eye2', description: 'Eye care', doctorCount: 15, color: 'sky' },
  { id: 'pedia', name: 'Pediatrics', icon: 'Baby', description: 'Child healthcare', doctorCount: 19, color: 'emerald' },
  { id: 'derma', name: 'Dermatology', icon: 'Smile', description: 'Skin care', doctorCount: 12, color: 'orange' },
  { id: 'dental', name: 'Dentistry', icon: 'Smile', description: 'Dental care', doctorCount: 17, color: 'cyan' },
  { id: 'ent', name: 'ENT', icon: 'Stethoscope', description: 'Ear, nose & throat', doctorCount: 14, color: 'teal' },
  { id: 'psych', name: 'Psychiatry', icon: 'Brain', description: 'Mental health', doctorCount: 11, color: 'fuchsia' },
  { id: 'onco', name: 'Oncology', icon: 'Activity', description: 'Cancer care', doctorCount: 9, color: 'red' },
  { id: 'gyno', name: 'Gynecology', icon: 'Heart', description: "Women's health", doctorCount: 16, color: 'pink' },
  { id: 'gener', name: 'General Medicine', icon: 'Stethoscope', description: 'Primary care', doctorCount: 28, color: 'blue' },
];
