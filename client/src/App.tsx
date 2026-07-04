import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import type { SidebarItem } from './layouts/DashboardLayout';

import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';
import Payment from './pages/Payment';
import PaymentFailed from './pages/PaymentFailed';
import Confirmation from './pages/Confirmation';
import TrackAppointment from './pages/TrackAppointment';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';

import PatientDashboard from './pages/patient/PatientDashboard';
import MyAppointments from './pages/patient/MyAppointments';
import MyPrescriptions from './pages/patient/MyPrescriptions';
import MyInvoices from './pages/patient/MyInvoices';
import Profile from './pages/patient/Profile';

import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import ManageAvailability from './pages/doctor/ManageAvailability';
import DoctorProfileMgmt from './pages/doctor/DoctorProfileMgmt';
import PrescriptionWriting from './pages/doctor/PrescriptionWriting';

import AdminDashboard from './pages/admin/AdminDashboard';
import DoctorManagement from './pages/admin/DoctorManagement';
import PatientManagement from './pages/admin/PatientManagement';
import AppointmentManagement from './pages/admin/AppointmentManagement';
import ReviewsManagement from './pages/admin/ReviewsManagement';
import DemoAdmins from './pages/admin/DemoAdmins';

const patientItems: SidebarItem[] = [
  { to: '/dashboard', label: 'Dashboard', icon: 'Layout' },
  { to: '/dashboard/appointments', label: 'Appointments', icon: 'Calendar' },
  { to: '/dashboard/prescriptions', label: 'Prescriptions', icon: 'FileText' },
  { to: '/dashboard/invoices', label: 'Invoices', icon: 'CreditCard' },
  { to: '/dashboard/profile', label: 'Profile', icon: 'User' },
  { to: '/dashboard/settings', label: 'Settings', icon: 'Settings' },
];

const doctorItems: SidebarItem[] = [
  { to: '/doctor', label: 'Dashboard', icon: 'Layout' },
  { to: '/doctor/appointments', label: 'Appointments', icon: 'Calendar', badge: '3' },
  { to: '/doctor/availability', label: 'Availability', icon: 'Clock' },
  { to: '/doctor/prescription', label: 'Write Prescription', icon: 'FileText' },
  { to: '/doctor/profile', label: 'Profile', icon: 'User' },
];

const adminItems: SidebarItem[] = [
  { to: '/admin', label: 'Dashboard', icon: 'Layout' },
  { to: '/admin/doctors', label: 'Doctors', icon: 'Stethoscope' },
  { to: '/admin/patients', label: 'Patients', icon: 'Users' },
  { to: '/admin/appointments', label: 'Appointments', icon: 'Calendar' },
  { to: '/admin/reviews', label: 'Reviews', icon: 'Star' },
  { to: '/admin/demo-admins', label: 'Demo Admins', icon: 'Shield' },
];

const patientUser = { name: 'John Carter', role: 'Patient', photo: 'https://i.pravatar.cc/300?u=john' };
const doctorUser = { name: 'Dr. Sarah Mitchell', role: 'Cardiologist', photo: 'https://i.pravatar.cc/300?u=sarah' };
const adminUser = { name: 'Alex Morgan', role: 'Super Admin', photo: 'https://i.pravatar.cc/300?u=alexm' };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main site */}
        <Route element={<MainLayout><Outlet /></MainLayout>}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/track" element={<TrackAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Patient Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout items={patientItems} user={patientUser} title="Patient Portal" />}>
          <Route index element={<PatientDashboard />} />
          <Route path="appointments" element={<MyAppointments />} />
          <Route path="prescriptions" element={<MyPrescriptions />} />
          <Route path="invoices" element={<MyInvoices />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Profile />} />
        </Route>

        {/* Doctor Dashboard */}
        <Route path="/doctor" element={<DashboardLayout items={doctorItems} user={doctorUser} title="Doctor Portal" accent="success" />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="availability" element={<ManageAvailability />} />
          <Route path="prescription" element={<PrescriptionWriting />} />
          <Route path="profile" element={<DoctorProfileMgmt />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<DashboardLayout items={adminItems} user={adminUser} title="Admin Panel" accent="warning" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="doctors" element={<DoctorManagement />} />
          <Route path="patients" element={<PatientManagement />} />
          <Route path="appointments" element={<AppointmentManagement />} />
          <Route path="reviews" element={<ReviewsManagement />} />
          <Route path="demo-admins" element={<DemoAdmins />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
