export type Notification = {
  id: string;
  type: 'appointment_booked' | 'appointment_cancelled' | 'prescription_uploaded' | 'payment_successful' | 'review_received';
  title: string;
  message: string;
  time: string;
  read: boolean;
};

export const notifications: Notification[] = [
  { id: 'n1', type: 'appointment_booked', title: 'Appointment Booked', message: 'Your appointment with Dr. Sarah Mitchell on Dec 15 is confirmed.', time: '2 hours ago', read: false },
  { id: 'n2', type: 'payment_successful', title: 'Payment Successful', message: 'Payment of ৳1,550 for INV-2024-001 was successful.', time: '5 hours ago', read: false },
  { id: 'n3', type: 'prescription_uploaded', title: 'Prescription Uploaded', message: 'Dr. James Anderson uploaded your prescription RX-002.', time: '1 day ago', read: true },
  { id: 'n4', type: 'review_received', title: 'Review Received', message: 'Thank you for reviewing Dr. Sarah Mitchell!', time: '2 days ago', read: true },
  { id: 'n5', type: 'appointment_cancelled', title: 'Appointment Cancelled', message: 'Your appointment APT-004 was cancelled. Refund processing.', time: '3 days ago', read: true },
];
