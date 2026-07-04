export type Hospital = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  departments: number;
  established: number;
};

export const hospitals: Hospital[] = [
  { id: 'h1', name: 'MediCare Central Hospital', address: '123 Health Avenue, Gulshan', city: 'Dhaka', phone: '+880 1711-100100', email: 'info@medicare.org', departments: 18, established: 1998 },
  { id: 'h2', name: 'Apollo Heart Institute', address: '45 Cardiac Road, Banani', city: 'Dhaka', phone: '+880 1711-200200', email: 'care@apollo.org', departments: 12, established: 2005 },
  { id: 'h3', name: 'City Neuro Center', address: '78 Brain Street, Dhanmondi', city: 'Dhaka', phone: '+880 1711-300300', email: 'help@neuro.org', departments: 9, established: 2010 },
  { id: 'h4', name: 'GreenLife Medical College', address: '12 Green Road, Chittagong', city: 'Chittagong', phone: '+880 1711-400400', email: 'info@greenlife.org', departments: 22, established: 2001 },
  { id: 'h5', name: 'Square Children Hospital', address: '56 Kids Lane, Mirpur', city: 'Dhaka', phone: '+880 1711-500500', email: 'care@squarekids.org', departments: 14, established: 2015 },
];
