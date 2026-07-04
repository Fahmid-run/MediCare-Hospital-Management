export type AppointmentStatus = 'Booked' | 'Confirmed' | 'Doctor Assigned' | 'In Progress' | 'Completed' | 'Cancelled' | 'Pending';

export type Appointment = {
  id: string;
  trackingId: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  patientGender: 'Male' | 'Female';
  doctorId: string;
  doctorName: string;
  doctorSpecialization: string;
  doctorPhoto: string;
  hospital: string;
  date: string;
  time: string;
  reason: string;
  status: AppointmentStatus;
  fee: number;
  paymentMethod: string;
  paymentStatus: 'Paid' | 'Pending';
  createdAt: string;
};

export const appointments: Appointment[] = [
  { id: 'APT-001', trackingId: 'TRK-2024-001', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd1', doctorName: 'Dr. Sarah Mitchell', doctorSpecialization: 'Cardiologist', doctorPhoto: 'https://i.pravatar.cc/300?u=sarah', hospital: 'Apollo Heart Institute', date: '2024-12-15', time: '10:00 AM', reason: 'Chest pain and shortness of breath', status: 'Confirmed', fee: 1500, paymentMethod: 'Card', paymentStatus: 'Paid', createdAt: '2024-12-01' },
  { id: 'APT-002', trackingId: 'TRK-2024-002', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd4', doctorName: 'Dr. Michael Chen', doctorSpecialization: 'Pediatrician', doctorPhoto: 'https://i.pravatar.cc/300?u=michael', hospital: 'Square Children Hospital', date: '2024-12-18', time: '09:30 AM', reason: 'Routine checkup for child', status: 'Pending', fee: 900, paymentMethod: 'Bkash', paymentStatus: 'Pending', createdAt: '2024-12-05' },
  { id: 'APT-003', trackingId: 'TRK-2024-003', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd2', doctorName: 'Dr. James Anderson', doctorSpecialization: 'Neurologist', doctorPhoto: 'https://i.pravatar.cc/300?u=james', hospital: 'City Neuro Center', date: '2024-11-20', time: '03:00 PM', reason: 'Migraine consultation', status: 'Completed', fee: 1800, paymentMethod: 'Card', paymentStatus: 'Paid', createdAt: '2024-11-10' },
  { id: 'APT-004', trackingId: 'TRK-2024-004', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd5', doctorName: 'Dr. Olivia Park', doctorSpecialization: 'Dermatologist', doctorPhoto: 'https://i.pravatar.cc/300?u=olivia', hospital: 'MediCare Central Hospital', date: '2024-11-05', time: '11:00 AM', reason: 'Skin rash treatment', status: 'Cancelled', fee: 1100, paymentMethod: 'Cash', paymentStatus: 'Pending', createdAt: '2024-10-28' },
  { id: 'APT-005', trackingId: 'TRK-2024-005', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd10', doctorName: 'Dr. William Brown', doctorSpecialization: 'General Physician', doctorPhoto: 'https://i.pravatar.cc/300?u=william', hospital: 'MediCare Central Hospital', date: '2024-12-20', time: '08:30 AM', reason: 'Annual health checkup', status: 'Booked', fee: 800, paymentMethod: 'Nagad', paymentStatus: 'Paid', createdAt: '2024-12-08' },
  { id: 'APT-006', trackingId: 'TRK-2024-006', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd3', doctorName: 'Dr. Emily Roberts', doctorSpecialization: 'Orthopedic Surgeon', doctorPhoto: 'https://i.pravatar.cc/300?u=emily', hospital: 'MediCare Central Hospital', date: '2024-10-15', time: '02:30 PM', reason: 'Knee pain follow-up', status: 'Completed', fee: 1200, paymentMethod: 'Card', paymentStatus: 'Paid', createdAt: '2024-10-01' },
  { id: 'APT-007', trackingId: 'TRK-2024-007', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd7', doctorName: 'Dr. Sophia Lee', doctorSpecialization: 'Psychiatrist', doctorPhoto: 'https://i.pravatar.cc/300?u=sophia', hospital: 'City Neuro Center', date: '2024-12-22', time: '06:30 PM', reason: 'Anxiety management session', status: 'Doctor Assigned', fee: 1600, paymentMethod: 'Bkash', paymentStatus: 'Paid', createdAt: '2024-12-10' },
  { id: 'APT-008', trackingId: 'TRK-2024-008', patientId: 'p1', patientName: 'John Carter', patientAge: 34, patientGender: 'Male', doctorId: 'd9', doctorName: 'Dr. Isabella Garcia', doctorSpecialization: 'Gynecologist', doctorPhoto: 'https://i.pravatar.cc/300?u=isabella', hospital: 'Square Children Hospital', date: '2024-12-25', time: '10:00 AM', reason: 'Prenatal consultation', status: 'In Progress', fee: 1400, paymentMethod: 'Card', paymentStatus: 'Paid', createdAt: '2024-12-12' },
  { id: 'APT-009', trackingId: 'TRK-2024-009', patientId: 'p2', patientName: 'Aisha Rahman', patientAge: 28, patientGender: 'Female', doctorId: 'd1', doctorName: 'Dr. Sarah Mitchell', doctorSpecialization: 'Cardiologist', doctorPhoto: 'https://i.pravatar.cc/300?u=sarah', hospital: 'Apollo Heart Institute', date: '2024-12-16', time: '11:00 AM', reason: 'Heart palpitations', status: 'Confirmed', fee: 1500, paymentMethod: 'Rocket', paymentStatus: 'Paid', createdAt: '2024-12-03' },
  { id: 'APT-010', trackingId: 'TRK-2024-010', patientId: 'p3', patientName: 'Mohammed Ali', patientAge: 45, patientGender: 'Male', doctorId: 'd8', doctorName: 'Dr. David Kim', doctorSpecialization: 'Oncologist', doctorPhoto: 'https://i.pravatar.cc/300?u=david', hospital: 'Apollo Heart Institute', date: '2024-12-19', time: '09:00 AM', reason: 'Chemotherapy session', status: 'Confirmed', fee: 2200, paymentMethod: 'Card', paymentStatus: 'Paid', createdAt: '2024-12-06' },
  { id: 'APT-011', trackingId: 'TRK-2024-011', patientId: 'p4', patientName: 'Priya Sharma', patientAge: 31, patientGender: 'Female', doctorId: 'd7', doctorName: 'Dr. Sophia Lee', doctorSpecialization: 'Psychiatrist', doctorPhoto: 'https://i.pravatar.cc/300?u=sophia', hospital: 'City Neuro Center', date: '2024-12-17', time: '07:00 PM', reason: 'Thyroid-related anxiety', status: 'Pending', fee: 1600, paymentMethod: 'Bkash', paymentStatus: 'Pending', createdAt: '2024-12-07' },
  { id: 'APT-012', trackingId: 'TRK-2024-012', patientId: 'p5', patientName: 'Tanvir Ahmed', patientAge: 52, patientGender: 'Male', doctorId: 'd1', doctorName: 'Dr. Sarah Mitchell', doctorSpecialization: 'Cardiologist', doctorPhoto: 'https://i.pravatar.cc/300?u=sarah', hospital: 'Apollo Heart Institute', date: '2024-12-21', time: '10:30 AM', reason: 'Heart disease follow-up', status: 'In Progress', fee: 1500, paymentMethod: 'Cash', paymentStatus: 'Paid', createdAt: '2024-12-09' },
];

export const trackAppointment = {
  trackingId: 'TRK-2024-001',
  appointmentId: 'APT-001',
  patientName: 'John Carter',
  patientAge: 34,
  patientGender: 'Male',
  doctorName: 'Dr. Sarah Mitchell',
  doctorSpecialization: 'Cardiologist',
  doctorPhoto: 'https://i.pravatar.cc/300?u=sarah',
  hospital: 'Apollo Heart Institute',
  hospitalAddress: '45 Cardiac Road, Banani, Dhaka',
  date: '2024-12-15',
  time: '10:00 AM',
  reason: 'Chest pain and shortness of breath',
  fee: 1500,
  paymentMethod: 'Card',
  timeline: [
    { status: 'Booked', date: 'Dec 01, 2024 — 10:30 AM', description: 'Appointment booked successfully', completed: true },
    { status: 'Confirmed', date: 'Dec 02, 2024 — 09:15 AM', description: 'Appointment confirmed by hospital', completed: true },
    { status: 'Doctor Assigned', date: 'Dec 03, 2024 — 02:00 PM', description: 'Dr. Sarah Mitchell assigned to your case', completed: true },
    { status: 'In Progress', date: 'Pending', description: 'Consultation in progress', completed: false },
    { status: 'Completed', date: 'Pending', description: 'Appointment completed', completed: false },
  ],
};
