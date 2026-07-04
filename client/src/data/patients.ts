export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'Male' | 'Female';
  bloodGroup: string;
  address: string;
  photo: string;
  status: 'Active' | 'Inactive';
  medicalHistory: string[];
  allergies: string[];
  emergencyContact: { name: string; relation: string; phone: string };
  recentAppointments: number;
};

export const patients: Patient[] = [
  { id: 'p1', name: 'John Carter', email: 'john.carter@email.com', phone: '+880 1711-110011', age: 34, gender: 'Male', bloodGroup: 'O+', address: 'House 12, Road 5, Gulshan, Dhaka', photo: 'https://i.pravatar.cc/300?u=john', status: 'Active', medicalHistory: ['Hypertension', 'Migraine'], allergies: ['Penicillin'], emergencyContact: { name: 'Mary Carter', relation: 'Spouse', phone: '+880 1711-110012' }, recentAppointments: 8 },
  { id: 'p2', name: 'Aisha Rahman', email: 'aisha.rahman@email.com', phone: '+880 1711-220022', age: 28, gender: 'Female', bloodGroup: 'A+', address: 'Flat 4B, Banani, Dhaka', photo: 'https://i.pravatar.cc/300?u=aisha', status: 'Active', medicalHistory: ['Asthma'], allergies: ['Dust', 'Pollen'], emergencyContact: { name: 'Karim Rahman', relation: 'Father', phone: '+880 1711-220023' }, recentAppointments: 5 },
  { id: 'p3', name: 'Mohammed Ali', email: 'mohammed.ali@email.com', phone: '+880 1711-330033', age: 45, gender: 'Male', bloodGroup: 'B+', address: 'House 78, Dhanmondi, Dhaka', photo: 'https://i.pravatar.cc/300?u=ali', status: 'Active', medicalHistory: ['Diabetes Type 2', 'High Cholesterol'], allergies: [], emergencyContact: { name: 'Fatima Ali', relation: 'Spouse', phone: '+880 1711-330034' }, recentAppointments: 12 },
  { id: 'p4', name: 'Priya Sharma', email: 'priya.sharma@email.com', phone: '+880 1711-440044', age: 31, gender: 'Female', bloodGroup: 'AB+', address: 'Road 11, Mirpur, Dhaka', photo: 'https://i.pravatar.cc/300?u=priya', status: 'Active', medicalHistory: ['Thyroid Disorder'], allergies: ['Sulfa drugs'], emergencyContact: { name: 'Raj Sharma', relation: 'Brother', phone: '+880 1711-440045' }, recentAppointments: 6 },
  { id: 'p5', name: 'Tanvir Ahmed', email: 'tanvir.ahmed@email.com', phone: '+880 1711-550055', age: 52, gender: 'Male', bloodGroup: 'O-', address: 'House 34, Chittagong', photo: 'https://i.pravatar.cc/300?u=tanvir', status: 'Inactive', medicalHistory: ['Heart Disease', 'Arthritis'], allergies: ['Aspirin'], emergencyContact: { name: 'Nadia Ahmed', relation: 'Daughter', phone: '+880 1711-550056' }, recentAppointments: 15 },
  { id: 'p6', name: 'Nusrat Jahan', email: 'nusrat.jahan@email.com', phone: '+880 1711-660066', age: 24, gender: 'Female', bloodGroup: 'A-', address: 'Flat 2A, Uttara, Dhaka', photo: 'https://i.pravatar.cc/300?u=nusrat', status: 'Active', medicalHistory: [], allergies: ['Latex'], emergencyContact: { name: 'Selim Jahan', relation: 'Father', phone: '+880 1711-660067' }, recentAppointments: 3 },
  { id: 'p7', name: 'Rahul Verma', email: 'rahul.verma@email.com', phone: '+880 1711-770077', age: 38, gender: 'Male', bloodGroup: 'B-', address: 'House 90, Mohammadpur, Dhaka', photo: 'https://i.pravatar.cc/300?u=rahul', status: 'Active', medicalHistory: ['Hypertension'], allergies: [], emergencyContact: { name: 'Sita Verma', relation: 'Spouse', phone: '+880 1711-770078' }, recentAppointments: 7 },
  { id: 'p8', name: 'Farhana Khan', email: 'farhana.khan@email.com', phone: '+880 1711-880088', age: 29, gender: 'Female', bloodGroup: 'O+', address: 'Road 23, Bashundhara, Dhaka', photo: 'https://i.pravatar.cc/300?u=farhana', status: 'Active', medicalHistory: ['PCOS'], allergies: ['Ibuprofen'], emergencyContact: { name: 'Imran Khan', relation: 'Brother', phone: '+880 1711-880089' }, recentAppointments: 4 },
];

export const currentPatient: Patient = {
  id: 'p1', name: 'John Carter', email: 'john.carter@email.com', phone: '+880 1711-110011', age: 34, gender: 'Male', bloodGroup: 'O+', address: 'House 12, Road 5, Gulshan, Dhaka', photo: 'https://i.pravatar.cc/300?u=john', status: 'Active', medicalHistory: ['Hypertension', 'Migraine'], allergies: ['Penicillin'], emergencyContact: { name: 'Mary Carter', relation: 'Spouse', phone: '+880 1711-110012' }, recentAppointments: 8,
};
