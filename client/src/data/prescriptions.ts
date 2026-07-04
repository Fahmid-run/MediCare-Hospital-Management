export type Prescription = {
  id: string;
  patientName: string;
  doctorName: string;
  doctorSpecialization: string;
  date: string;
  diagnosis: string;
  medicines: { name: string; dosage: string; duration: string; instructions: string }[];
  nextVisit: string;
  notes: string;
};

export const prescriptions: Prescription[] = [
  { id: 'RX-001', patientName: 'John Carter', doctorName: 'Dr. Sarah Mitchell', doctorSpecialization: 'Cardiologist', date: '2024-11-20', diagnosis: 'Hypertension Stage 1', medicines: [{ name: 'Amlodipine 5mg', dosage: '1 tablet daily', duration: '30 days', instructions: 'Take in the morning after breakfast' }, { name: 'Aspirin 75mg', dosage: '1 tablet daily', duration: '30 days', instructions: 'Take after meals' }], nextVisit: '2024-12-20', notes: 'Monitor blood pressure daily. Reduce salt intake.' },
  { id: 'RX-002', patientName: 'John Carter', doctorName: 'Dr. James Anderson', doctorSpecialization: 'Neurologist', date: '2024-11-20', diagnosis: 'Chronic Migraine', medicines: [{ name: 'Sumatriptan 50mg', dosage: '1 tablet as needed', duration: '15 days', instructions: 'Take at onset of migraine' }, { name: 'Propranolol 40mg', dosage: '1 tablet twice daily', duration: '30 days', instructions: 'Do not stop abruptly' }], nextVisit: '2024-12-20', notes: 'Maintain a headache diary. Avoid triggers like bright lights.' },
  { id: 'RX-003', patientName: 'John Carter', doctorName: 'Dr. Emily Roberts', doctorSpecialization: 'Orthopedic Surgeon', date: '2024-10-15', diagnosis: 'Osteoarthritis of Knee', medicines: [{ name: 'Ibuprofen 400mg', dosage: '1 tablet twice daily', duration: '10 days', instructions: 'Take after meals' }, { name: 'Calcium + Vitamin D', dosage: '1 tablet daily', duration: '90 days', instructions: 'Take in the morning' }], nextVisit: '2025-01-15', notes: 'Physical therapy recommended. Low-impact exercise daily.' },
  { id: 'RX-004', patientName: 'John Carter', doctorName: 'Dr. William Brown', doctorSpecialization: 'General Physician', date: '2024-09-10', diagnosis: 'Seasonal Flu', medicines: [{ name: 'Paracetamol 500mg', dosage: '1 tablet thrice daily', duration: '5 days', instructions: 'Take after meals' }, { name: 'Cetirizine 10mg', dosage: '1 tablet at night', duration: '5 days', instructions: 'May cause drowsiness' }], nextVisit: 'As needed', notes: 'Rest and drink plenty of fluids.' },
];
