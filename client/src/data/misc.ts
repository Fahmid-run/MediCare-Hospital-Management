export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  permissions: string[];
  lastActive: string;
};

export const adminUsers: AdminUser[] = [
  { id: 'a1', name: 'Alex Morgan', email: 'alex.morgan@medicare.org', role: 'Super Admin', photo: 'https://i.pravatar.cc/300?u=alexm', permissions: ['All Access', 'User Management', 'System Settings', 'Reports', 'Billing'], lastActive: '5 min ago' },
  { id: 'a2', name: 'Rachel Green', email: 'rachel.green@medicare.org', role: 'Hospital Admin', photo: 'https://i.pravatar.cc/300?u=rachelg', permissions: ['Doctor Management', 'Appointment Management', 'Reports'], lastActive: '1 hour ago' },
  { id: 'a3', name: 'Kevin Hart', email: 'kevin.hart@medicare.org', role: 'Content Manager', photo: 'https://i.pravatar.cc/300?u=kevinh', permissions: ['Content Management', 'Reviews', 'Blog Posts'], lastActive: '3 hours ago' },
  { id: 'a4', name: 'Monica Bell', email: 'monica.bell@medicare.org', role: 'Support Admin', photo: 'https://i.pravatar.cc/300?u=monicab', permissions: ['Customer Support', 'Ticket Management', 'FAQ'], lastActive: '1 day ago' },
];

export const healthTips = [
  { id: 'ht1', title: '10 Foods That Boost Heart Health', category: 'Cardiology', excerpt: 'Discover the best foods to keep your heart strong and healthy, from leafy greens to fatty fish.', date: 'Dec 10, 2024', readTime: '5 min read' },
  { id: 'ht2', title: 'Understanding Migraine Triggers', category: 'Neurology', excerpt: 'Learn about common migraine triggers and effective strategies to prevent debilitating headaches.', date: 'Dec 08, 2024', readTime: '7 min read' },
  { id: 'ht3', title: 'Daily Exercises for Joint Pain Relief', category: 'Orthopedics', excerpt: 'Simple, low-impact exercises you can do at home to reduce joint pain and improve mobility.', date: 'Dec 05, 2024', readTime: '6 min read' },
];

export const faqs = [
  { id: 'f1', question: 'How do I book an appointment?', answer: 'Simply search for a doctor by name, specialty, or hospital, then click "Book Appointment" and follow the multi-step booking process to select your date, time, and enter patient details.' },
  { id: 'f2', question: 'Can I reschedule or cancel my appointment?', answer: 'Yes, you can reschedule or cancel your appointment from the "My Appointments" section in your patient dashboard at any time before the appointment date.' },
  { id: 'f3', question: 'How do I track my appointment status?', answer: 'Use the "Track Appointment" page and enter your tracking ID. You will see a real-time timeline of your appointment status from booking to completion.' },
  { id: 'f4', question: 'What payment methods are accepted?', answer: 'We accept Credit/Debit Cards, Bkash, Nagad, Rocket, and Cash payments at the hospital. All online payments are secured with encryption.' },
  { id: 'f5', question: 'How do I get my prescription?', answer: 'After your consultation, your doctor will upload the prescription to your dashboard. You can view and download it from the "Prescriptions" section.' },
  { id: 'f6', question: 'Is my medical information secure?', answer: 'Absolutely. We use industry-standard encryption and comply with healthcare data protection regulations to keep your medical information private and secure.' },
];

export const whyChooseUs = [
  { icon: 'Users', title: 'Verified Doctors', description: 'All doctors are verified and credentialed by top medical institutions.' },
  { icon: 'CalendarCheck', title: 'Easy Booking', description: 'Book appointments in minutes with our simple multi-step process.' },
  { icon: 'Shield', title: 'Secure Payments', description: 'Multiple secure payment options with encrypted transactions.' },
  { icon: 'Clock', title: '24/7 Support', description: 'Round-the-clock customer support for all your healthcare needs.' },
  { icon: 'Activity', title: 'Real-Time Tracking', description: 'Track your appointment status with our live timeline feature.' },
  { icon: 'FileText', title: 'Digital Records', description: 'Access your prescriptions and invoices anytime, anywhere.' },
];

export const howItWorks = [
  { step: '01', title: 'Search Doctors', description: 'Find specialists by name, specialty, or hospital location.', icon: 'Search' },
  { step: '02', title: 'Book Appointment', description: 'Choose a date and time slot that works for you.', icon: 'CalendarCheck' },
  { step: '03', title: 'Make Payment', description: 'Pay securely using your preferred payment method.', icon: 'CreditCard' },
  { step: '04', title: 'Get Consulted', description: 'Visit the doctor and receive your prescription online.', icon: 'Stethoscope' },
];

export const stats = [
  { label: 'Expert Doctors', value: '250+', icon: 'Stethoscope' },
  { label: 'Happy Patients', value: '50K+', icon: 'Users' },
  { label: 'Appointments', value: '100K+', icon: 'CalendarCheck' },
  { label: 'Hospitals', value: '25+', icon: 'Building' },
];

export const aboutTimeline = [
  { year: '1998', title: 'Founded', description: 'MediCare was established with a vision to make healthcare accessible to all.' },
  { year: '2005', title: 'Expansion', description: 'Opened our second flagship hospital with 18 specialized departments.' },
  { year: '2012', title: 'Digital Transformation', description: 'Launched our online appointment system, serving over 10,000 patients.' },
  { year: '2018', title: 'Mobile Platform', description: 'Introduced our mobile platform with real-time appointment tracking.' },
  { year: '2024', title: 'AI Integration', description: 'Integrated AI-powered doctor recommendations and smart scheduling.' },
];
