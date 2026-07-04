import type { AppointmentStatus } from '../data/appointments';

export const statusColors: Record<AppointmentStatus, string> = {
  Booked: 'bg-blue-100 text-blue-700 border-blue-200',
  Confirmed: 'bg-success-100 text-success-700 border-success-200',
  'Doctor Assigned': 'bg-primary-100 text-primary-700 border-primary-200',
  'In Progress': 'bg-amber-100 text-amber-700 border-amber-200',
  Completed: 'bg-success-100 text-success-700 border-success-200',
  Cancelled: 'bg-danger-100 text-danger-700 border-danger-200',
  Pending: 'bg-amber-100 text-amber-700 border-amber-200',
};

export const statusDot: Record<AppointmentStatus, string> = {
  Booked: 'bg-blue-500',
  Confirmed: 'bg-success-500',
  'Doctor Assigned': 'bg-primary-500',
  'In Progress': 'bg-amber-500',
  Completed: 'bg-success-500',
  Cancelled: 'bg-danger-500',
  Pending: 'bg-amber-500',
};

export const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatCurrency = (amount: number): string => `৳${amount.toLocaleString('en-US')}`;

export const cn = (...classes: (string | false | undefined | null)[]): string =>
  classes.filter(Boolean).join(' ');
