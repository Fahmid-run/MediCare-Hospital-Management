export type Invoice = {
  id: string;
  invoiceNumber: string;
  appointmentId: string;
  patientName: string;
  doctorName: string;
  date: string;
  paymentMethod: string;
  consultationFee: number;
  platformFee: number;
  total: number;
  status: 'Paid' | 'Pending';
};

export const invoices: Invoice[] = [
  { id: 'inv1', invoiceNumber: 'INV-2024-001', appointmentId: 'APT-001', patientName: 'John Carter', doctorName: 'Dr. Sarah Mitchell', date: '2024-12-01', paymentMethod: 'Card', consultationFee: 1500, platformFee: 50, total: 1550, status: 'Paid' },
  { id: 'inv2', invoiceNumber: 'INV-2024-002', appointmentId: 'APT-003', patientName: 'John Carter', doctorName: 'Dr. James Anderson', date: '2024-11-10', paymentMethod: 'Card', consultationFee: 1800, platformFee: 50, total: 1850, status: 'Paid' },
  { id: 'inv3', invoiceNumber: 'INV-2024-003', appointmentId: 'APT-006', patientName: 'John Carter', doctorName: 'Dr. Emily Roberts', date: '2024-10-01', paymentMethod: 'Card', consultationFee: 1200, platformFee: 50, total: 1250, status: 'Paid' },
  { id: 'inv4', invoiceNumber: 'INV-2024-004', appointmentId: 'APT-005', patientName: 'John Carter', doctorName: 'Dr. William Brown', date: '2024-12-08', paymentMethod: 'Nagad', consultationFee: 800, platformFee: 50, total: 850, status: 'Paid' },
  { id: 'inv5', invoiceNumber: 'INV-2024-005', appointmentId: 'APT-007', patientName: 'John Carter', doctorName: 'Dr. Sophia Lee', date: '2024-12-10', paymentMethod: 'Bkash', consultationFee: 1600, platformFee: 50, total: 1650, status: 'Paid' },
  { id: 'inv6', invoiceNumber: 'INV-2024-006', appointmentId: 'APT-002', patientName: 'John Carter', doctorName: 'Dr. Michael Chen', date: '2024-12-05', paymentMethod: 'Bkash', consultationFee: 900, platformFee: 50, total: 950, status: 'Pending' },
];
