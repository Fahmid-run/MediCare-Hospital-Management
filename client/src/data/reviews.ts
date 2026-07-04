export type Review = {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  patientPhoto: string;
  rating: number;
  date: string;
  text: string;
  reply?: string;
  status: 'Approved' | 'Pending' | 'Rejected';
};

export const reviews: Review[] = [
  { id: 'r1', doctorId: 'd1', doctorName: 'Dr. Sarah Mitchell', patientName: 'John Carter', patientPhoto: 'https://i.pravatar.cc/300?u=john', rating: 5, date: '2024-11-22', text: 'Dr. Mitchell was incredibly thorough and took the time to explain my condition. The best cardiologist I have ever visited!', status: 'Approved', reply: 'Thank you John for your kind words!' },
  { id: 'r2', doctorId: 'd4', doctorName: 'Dr. Michael Chen', patientName: 'Aisha Rahman', patientPhoto: 'https://i.pravatar.cc/300?u=aisha', rating: 5, date: '2024-11-18', text: 'Amazing with kids! My son was so comfortable during the entire visit. Highly recommend Dr. Chen.', status: 'Approved' },
  { id: 'r3', doctorId: 'd2', doctorName: 'Dr. James Anderson', patientName: 'Mohammed Ali', patientPhoto: 'https://i.pravatar.cc/300?u=ali', rating: 4, date: '2024-11-15', text: 'Very knowledgeable doctor. The wait time was a bit long but the consultation was worth it.', status: 'Approved' },
  { id: 'r4', doctorId: 'd5', doctorName: 'Dr. Olivia Park', patientName: 'Priya Sharma', patientPhoto: 'https://i.pravatar.cc/300?u=priya', rating: 5, date: '2024-11-10', text: 'My skin has never looked better! Dr. Park prescribed a simple routine that worked wonders.', status: 'Approved', reply: 'So happy to hear that, Priya!' },
  { id: 'r5', doctorId: 'd10', doctorName: 'Dr. William Brown', patientName: 'Tanvir Ahmed', patientPhoto: 'https://i.pravatar.cc/300?u=tanvir', rating: 5, date: '2024-11-08', text: 'Dr. Brown has been my family physician for years. Compassionate, patient, and always accurate with diagnosis.', status: 'Approved' },
  { id: 'r6', doctorId: 'd7', doctorName: 'Dr. Sophia Lee', patientName: 'Nusrat Jahan', patientPhoto: 'https://i.pravatar.cc/300?u=nusrat', rating: 4, date: '2024-11-05', text: 'Dr. Lee really listens. The CBT sessions have helped me manage my anxiety significantly.', status: 'Pending' },
  { id: 'r7', doctorId: 'd3', doctorName: 'Dr. Emily Roberts', patientName: 'Rahul Verma', patientPhoto: 'https://i.pravatar.cc/300?u=rahul', rating: 5, date: '2024-11-01', text: 'After my knee surgery with Dr. Roberts, I am back to running marathons. Incredible surgeon!', status: 'Approved' },
  { id: 'r8', doctorId: 'd9', doctorName: 'Dr. Isabella Garcia', patientName: 'Farhana Khan', patientPhoto: 'https://i.pravatar.cc/300?u=farhana', rating: 5, date: '2024-10-28', text: 'Dr. Garcia made my pregnancy journey so smooth. She is caring and always available for questions.', status: 'Pending' },
];

export const testimonials = [
  { id: 't1', name: 'Emily Johnson', role: 'Patient', photo: 'https://i.pravatar.cc/300?u=emilyj', rating: 5, text: 'MediCare made booking my appointments so easy. I found a great cardiologist within minutes and the tracking feature keeps me updated.' },
  { id: 't2', name: 'Robert Williams', role: 'Patient', photo: 'https://i.pravatar.cc/300?u=robertw', rating: 5, text: 'The platform is intuitive and the doctors are top-notch. I received my prescription online and the whole experience was seamless.' },
  { id: 't3', name: 'Sophia Martinez', role: 'Parent', photo: 'https://i.pravatar.cc/300?u=sophiam', rating: 5, text: 'As a busy mom, booking pediatric appointments online has been a lifesaver. The reminders ensure I never miss a checkup.' },
  { id: 't4', name: 'David Lee', role: 'Patient', photo: 'https://i.pravatar.cc/300?u=davidl', rating: 4, text: 'Great selection of specialists and the payment process is secure and quick. The invoice download feature is very handy.' },
];
