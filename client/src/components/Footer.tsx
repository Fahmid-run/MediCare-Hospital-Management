import { Link } from 'react-router-dom';
import { Icon } from './Icon';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'Find Doctors' },
  { to: '/book', label: 'Book Appointment' },
  { to: '/track', label: 'Track Appointment' },
  { to: '/dashboard', label: 'Dashboard' },
];

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Oncology'];

const socials = [
  { icon: 'Facebook' as const, label: 'Facebook' },
  { icon: 'Twitter' as const, label: 'Twitter' },
  { icon: 'Instagram' as const, label: 'Instagram' },
  { icon: 'Linkedin' as const, label: 'LinkedIn' },
  { icon: 'Youtube' as const, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white">
                <Icon.HeartPulse size={22} />
              </div>
              <span className="text-xl font-bold text-white">MediCare</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner in healthcare. Book appointments with top doctors, track your visits, and manage your health records — all in one place.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map((s) => {
                const IconComp = Icon[s.icon];
                return (
                  <a key={s.label} href="#" aria-label={s.label} className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">
                    <IconComp size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Departments</h4>
            <ul className="space-y-2.5">
              {departments.map((d) => (
                <li key={d}>
                  <Link to="/doctors" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{d}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Icon.MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>123 Health Avenue, Gulshan, Dhaka 1212</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon.Phone size={18} className="text-primary-400 flex-shrink-0" />
                <span>+880 1711-100100</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon.Mail size={18} className="text-primary-400 flex-shrink-0" />
                <span>info@medicare.org</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon.Clock size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Open 24/7 — Emergency services always available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© 2024 MediCare Hospital Management. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
